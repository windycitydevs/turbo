#!/usr/bin/env node
import SanityClientConstructor, {
  IdentifiedSanityDocumentStub
} from "@sanity/client";
import algoliasearch, { type SearchIndex } from "algoliasearch";
import axios, {
  type AxiosInstance,
  type AxiosResponse,
  type CreateAxiosDefaults
} from "axios";
import chalk from "chalk";
import * as dotenv from "dotenv";
import { Agent as HttpAgent } from "http";
import { Agent as HttpsAgent } from "https";
import path from "path";
import { setTimeout } from "timers/promises";
import yargs from "yargs/yargs";
import Backfill from "./types/namespace";

export const ReqMethod = {
  GET: "GET",
  POST: "POST",
  PUT: "PUT",
  PATCH: "PATCH",
  PURGE: "PURGE",
  OPTIONS: "OPTIONS",
  DELETE: "DELETE",
  HEAD: "HEAD",
  LINK: "LINK",
  UNLINK: "UNLINK",
  HOrsE: "HORSE"
} as const;

export type Depth<
  Y extends { [record: string | symbol | number]: unknown },
  X extends keyof Y = keyof Y
> = {
  [H in keyof Y[X]]: Y[X][H][keyof Y[X][H]];
};

export type InferDepth<T> = T extends Depth<infer U> ? U : T;

export const inferObj = <J, T extends InferDepth<J>>(props: T) => props;

export const objInference = <T extends Parameters<typeof inferObj>["0"]>(
  props: T
) => inferObj(props);

export const sanityEndpoints = {
  assets: `assets`,
  doc: `doc`,
  export: `export`,
  history: `history`,
  jobs: `jobs`,
  listen: `listen`,
  mutate: `mutate`,
  projects: `projects`,
  publish: `publish`,
  query: `query`,
  roles: `roles`,
  schedules: `schedules`,
  unpublish: `unpublish`
} as const;

export type SanityGraphConfigProps = {
  operation: (typeof sanityEndpoints)[keyof typeof sanityEndpoints];
  projectId: string;
  dataset: string;
  accessToken: string;
  apiVersion: string;
  query: string;
  method: (typeof ReqMethod)[keyof typeof ReqMethod];
  params?: string;
};

export const sanityGraphConfig = ({
  accessToken,
  query,
  projectId,
  dataset,
  apiVersion,
  operation,
  method,
  params
}: SanityGraphConfigProps) => ({
  baseURL:
    `https://${projectId}.api.sanity.io/v${apiVersion}/data/${operation}/${dataset}` as const,
  url: `https://${projectId}.api.sanity.io/v${apiVersion}/data/${operation}/${dataset}` as const,
  headers: {
    "Cache-Control": "stale-while-revalidate=6000, s-maxage=12000",
    "Accept-Encoding": "gzip, deflate, br",
    Accept: "*/*",
    Connection: "keep-alive",
    "Content-Type": "application/json",
    Authorization: `Bearer ${accessToken}`
  },
  httpAgent: new HttpAgent({ keepAlive: true }),
  httpsAgent: new HttpsAgent({ keepAlive: true }),
  params: params,
  method,
  data: { query: query }
});

export const sanityNetwork = ({ params, ...rest }: SanityGraphConfigProps) => {
  return axios.create({
    ...(sanityGraphConfig({
      params: encodeURIComponent(params ?? ""),
      ...rest
    }) satisfies CreateAxiosDefaults)
  }) satisfies AxiosInstance;
};

export const envPaths = [
  ".env",
  ".env.local",
  ".env.local.prod",
  ".env.local.development",
  ".env.local.staging",
  ".env.local.test",
  ".env.local.production",
  ".env.production",
  ".env.development",
  ".env.staging",
  ".env.test"
] as const;

for (const p of envPaths) {
  dotenv.config({ path: path.relative(process.cwd(), p) });
}

export const wcdBlue = chalk["rgb"](255, 36, 42);

export type IncomingArgs = Backfill.Helpers.PromiseOrSync<{
  [x: string]: unknown;
  algoliakey: string;
  sanitykey: string;
  projectId: string | undefined;
  dataset: string | undefined;
  algoliaAppId: string | undefined;
  apiVersion: string | undefined;
  tag: string | undefined;
  algoliaIndex: string;
  groq: string;
  _: (string | number)[];
  $0: string;
}> & {
  [x: string]: unknown;
};

export type AxiosResponseSanityIdArr = {
  ms: number;
  query: string;
  result: string[];
};
export type GetSanityDatasetProps = {
  dataset: string;
  projectId: string;
  groqType: string;
  token: string;
  apiVersion: string;
};
export const getSanityData = async ({
  dataset,
  projectId,
  token,
  groqType,
  apiVersion
}: GetSanityDatasetProps): Promise<string[]> => {
  const groqQ = (groqType: string) =>
    `*[_type match '**${groqType}**' && !(_id in path('drafts.**'))]{...({_id})}[]._id` as const;

  const config = () =>
    sanityGraphConfig({
      accessToken: token ?? "",
      apiVersion: apiVersion,
      dataset,
      operation: "query",
      projectId,
      method: "POST",
      query: groqQ(groqType)
    });

  return await sanityNetwork({
    accessToken: token,
    apiVersion,
    dataset,
    projectId,
    method: "POST",
    operation: "query",
    query: groqQ(groqType)
  })
    .post<
      AxiosResponseSanityIdArr,
      AxiosResponse<AxiosResponseSanityIdArr>,
      { query: string }
    >(config().url, config().data, config())
    .then(data => data.data.result);
};

// Algolia Client/Index Workup

export const AlgBackfillClient = ({
  appId,
  writeKey,
  headers,
  options
}: Backfill.Algolia.AlgoliaSearchCustom) =>
  algoliasearch(appId, writeKey, {
    headers: {
      "X-Algolia-API-Key": writeKey ?? process.env.ALGOLIA_WRITE_KEY ?? "",
      "X-Algolia-Application-Id": appId,
      ...headers
    },
    ...options
  });

export const AlgBackfillIndex = (
  algoliaIndex: string,
  algoliaAppId: string,
  algoliakey: string
) =>
  AlgBackfillClient({
    appId: algoliaAppId,
    writeKey: algoliakey,
    headers: {
      "X-Algolia-API-Key": algoliakey ?? process.env.ALGOLIA_WRITE_KEY ?? "",
      "X-Algolia-Application-Id": algoliaAppId
    },
    options: { authMode: 1 }
  }).initIndex(algoliaIndex);

// id values from existing that aren't in incoming are returned
export const comparator = (existing: string[], incoming: string[]) => {
  return existing
    .map(id => {
      return incoming.includes(id) ? null : id;
    })
    .filter(flagged => flagged !== null);
};

export const formatCount = (num: number) => (num < 10 ? `0${num}` : `${num}`);

export type GetBulkDataProps = {
  groqResponseBulk: IdentifiedSanityDocumentStub<Record<string, any>>[];
  AlgoliaIndexHandler: SearchIndex;
  algoliakey: string | undefined;
  algoliaAppId: string | undefined;
};

/**
 * handles feeding returned bulk sanity data to the algolia SearchIndex
 * which in turn uploads said data en batch to the targeted index
 *
 * @param {GetBulkDataProps} props
 * @param {GetBulkDataProps['AlgoliaIndexHandler']} props.AlgoliaIndexHandler
 * @param {GetBulkDataProps['algoliaAppId']} props.algoliaAppId
 * @param {GetBulkDataProps['algoliakey']} props.algoliakey
 * @param {GetBulkDataProps['groqResponseBulk']} props.groqResponseBulk
 * @returns {Promise<Promise<void | Backfill.Operation.SaveObjectResponse>[]>}
 */

export const getBulkData = async ({
  groqResponseBulk,
  AlgoliaIndexHandler,
  algoliakey,
  algoliaAppId
}: GetBulkDataProps): Promise<
  Promise<void | Backfill.Operation.SaveObjectResponse>[]
> => {
  let j = 0;
  j <= groqResponseBulk.length;
  return (() => {
    j++;
    return (() => {
      return groqResponseBulk.map(
        async (singleton, k) =>
          await AlgoliaIndexHandler.saveObject(singleton, {
            headers: {
              "X-Algolia-API-Key":
                algoliakey ?? process.env.ALGOLIA_WRITE_KEY ?? "",
              "X-Algolia-Application-Id": algoliaAppId ?? "",
              "Accept-Encoding": "gzip, deflate, br",
              Connection: "keep-alive"
            },
            autoGenerateObjectIDIfNotExist: false
          })
            .then(async batchedRes => {
              console.log(
                wcdBlue(
                  `[${formatCount(1 + k++)}/${groqResponseBulk.length}]`
                ).concat(":") +
                  chalk.whiteBright(
                    `objectID ${batchedRes.objectID} successfully created`
                  )
              );
              return await setTimeout<Backfill.Operation.SaveObjectResponse>(
                1000,
                batchedRes,
                {
                  ref: true
                }
              );
            })
            .catch(err =>
              console.error(`[error in bulk algolia upload]: ` + err)
            )
      );
    })();
  })();
};

export default function BackfillIndex<T extends typeof process.argv>(str: T) {
  if (
    process.env.NODE_ENV === "production" ||
    process.env.NODE_ENV === "development"
  ) {
    return console.log("`@windycitydevs/backfill` only runs locally");
  } else {
    const argv = yargs(str)
      .env(false)
      .options({
        algoliakey: {
          type: "string",
          default: process.env.ALGOLIA_WRITE_KEY,
          description: "Algolia write key"
        },
        sanitykey: {
          type: "string",
          default: process.env.SANITY_API_TOKEN,
          description: "Sanity api token key"
        },
        projectId: {
          type: "string",
          description: "Sanity project id",
          default: process.env.SANITY_PROJECT_ID
        },
        dataset: {
          description: "Sanity dataset",
          default: process.env.SANITY_DATASET,
          type: "string"
        },
        apiVersion: {
          description: "Sanity api Version",
          default: process.env.SANITY_API_VERSION,
          choices: [
            "2022-11-15",
            "2021-10-21",
            "2021-06-07",
            "2021-03-25"
          ] as const
        },
        tag: {
          type: "string",
          default: process.env.SANITY_DATASET_TAG,
          description: "Sanity dataset tag"
        },
        algoliaAppId: {
          description: "Algola App Id",
          default: process.env.ALGOLIA_APP_ID,
          type: "string"
        },
        algoliaIndex: {
          type: "string",
          description: "Algolia Index Targeted",
          default: process.env.ALGOLIA_INDEX
        },
        groq: {
          demandOption: true,
          type: "string",
          description: "Groq query type"
        }
      })
      .parse();

    async function BackfillDataset<T extends IncomingArgs>(
      props: Backfill.Helpers.UnwrapPromise<T>
    ) {
      const sanityClient = new SanityClientConstructor({
        token: props.sanitykey ?? "",
        apiVersion: props.apiVersion ?? "2022-11-15",
        dataset: props.dataset ?? "",
        projectId: props.projectId ?? "",
        allowReconfigure: true,
        requestTagPrefix: props.tag ?? "",
        useCdn: true,
        withCredentials: true
      });

      const AlgoliaIndexHandler = AlgBackfillIndex(
        props.algoliaIndex,
        props.algoliaAppId ?? process.env.ALGOLIA_APP_ID ?? "",
        props.algoliakey
      );

      for (const x in props) {
        console.log(wcdBlue(x) + ": " + chalk.whiteBright(props[x]));
      }

      const getSanityIdArr = getSanityData({
        groqType: props.groq ?? "**Article**",
        apiVersion: props.apiVersion ?? "",
        dataset: props.dataset ?? "",
        projectId: props.projectId ?? "",
        token: props.sanitykey ?? ""
      });

      const getAlgoliaIdArr = AlgoliaIndexHandler.search("*", {
        attributesToRetrieve: ["objectID"],
        cacheable: true,
        hitsPerPage: 100,
        similarQuery: "*"
      })
        .then(data => (data.nbHits > 0 ? data.hits.map(v => v.objectID) : null))
        .then(arrObjectID => arrObjectID);

      const [sanity, algolia] = await Promise.all<[string[], string[] | null]>([
        await getSanityIdArr,
        await getAlgoliaIdArr
      ]);

      console.log({
        [`sanityIds(${sanity.length})`]: sanity,
        [`algoliaIds(${algolia ? algolia.length : 0})`]:
          algolia !== null ? algolia : "empty"
      });

      const executeComparator = comparator(sanity, algolia ?? [""]);

      let i = 1;

      i <= executeComparator.length;

      if (executeComparator.length > 0) {
        try {
          for (const returnedId of executeComparator) {
            console.log(
              wcdBlue(`[${formatCount(i++)}/${executeComparator.length}]`) +
                ": " +
                chalk.whiteBright(returnedId)
            );
          }
          console.log(
            chalk.blueBright(
              `\n Executing backfilling for ${executeComparator.length} records on dataset ${props.dataset} targeting type ${props.groq}... \n`
            )
          );

          const [bulkData] = await Promise.all([
            sanityClient.fetch<
              Array<IdentifiedSanityDocumentStub<Record<string, any>>>
            >(aggregateGroq, {
              type: props.groq,
              ids: executeComparator
            })
          ]);

          return await getBulkData({
            algoliaAppId: props.algoliaAppId,
            algoliakey: props.algoliakey,
            AlgoliaIndexHandler,
            groqResponseBulk: bulkData
          });
        } catch (err) {
          console.error(`${err}`);
        }
      } else {
        return console.log(
          wcdBlue("[graceful exit]").concat(":") +
            chalk.whiteBright(
              ` ${props.dataset} is already current with ${props.algoliaIndex} for type ${props.groq}`
            )
        );
      }
    }
    return BackfillDataset(
      argv as Backfill.Helpers.UnwrapPromise<IncomingArgs>
    );
  }
}

BackfillIndex(process.argv.slice(2));

export const aggregateGroq =
  `*[_type match $type && _id in $ids]|order(_updatedAt desc){'objectID': _id, ...}` as const;
