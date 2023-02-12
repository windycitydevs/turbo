/* eslint-disable import/no-extraneous-dependencies */
import { Indexer } from "../types/namespace";
import { GetUserInfo, ParseProcessEnv } from "../utils/parse-process-env";

type ENV = { [P in keyof NodeJS.ProcessEnv]?: NodeJS.ProcessEnv[P] };

interface ENVExtended extends ENV {}

type Config = {
  [P in keyof NodeJS.ProcessEnv]: NodeJS.ProcessEnv[P];
};

interface ConfigExtended extends Config {}

const getConfig = () =>
  ({
    ALGOLIA_SEARCH_KEY: process.env.ALGOLIA_SEARCH_KEY
      ? process.env.ALGOLIA_SEARCH_KEY
      : undefined,
    ALGOLIA_WRITE_KEY: process.env.ALGOLIA_WRITE_KEY
      ? process.env.ALGOLIA_WRITE_KEY
      : undefined,
    ALGOLIA_INDEX: process.env.ALGOLIA_INDEX
      ? process.env.ALGOLIA_INDEX
      : undefined,
    ALGOLIA_APP_ID: process.env.ALGOLIA_APP_ID
      ? process.env.ALGOLIA_APP_ID
      : undefined,
    SANITY_DATASET: process.env.SANITY_DATASET
      ? process.env.SANITY_DATASET
      : undefined,
    SANITY_PROJECT_ID: process.env.SANITY_PROJECT_ID
      ? process.env.SANITY_PROJECT_ID
      : undefined,
    SANITY_API_TOKEN: process.env.SANITY_API_TOKEN
      ? process.env.SANITY_API_TOKEN
      : undefined,
    SANITY_API_VERSION: process.env.SANITY_API_VERSION
      ? process.env.SANITY_API_VERSION
      : undefined,
    SANITY_DATASET_TAG: process.env.SANITY_DATASET_TAG
      ? process.env.SANITY_DATASET_TAG
      : undefined,
    SANITY_WEBHOOK_SECRET: process.env.SANITY_WEBHOOK_SECRET
      ? process.env.SANITY_WEBHOOK_SECRET
      : undefined
  } satisfies ENVExtended);

const numOrNull = (keysWithIndices: string[]) =>
  keysWithIndices.map(p =>
    (p.split(":")[0].valueOf() as
      | keyof typeof Indexer.Utility.ExpectedEnvConfigHandler
      | null as keyof typeof Indexer.Utility.ExpectedEnvConfigHandler)
      ? Indexer.Utility.ExpectedEnvConfigHandler?.[
          p
            .split(":")[0]
            .valueOf() as keyof typeof Indexer.Utility.ExpectedEnvConfigHandler
        ]
      : null
  ) as (number | null)[];

const getSanitzedConfig = (config: ENVExtended): ConfigExtended => {
  const getArrOfNullOrNum = numOrNull(ParseProcessEnv().keysWithIndices);
  if (!getArrOfNullOrNum.includes(null)) {
    console.info(
      "your config looks F A N T A S T I C ".concat(
        (
          GetUserInfo("npm_config_email") as {
            ["npm_config_email"]: string;
          }
        ).npm_config_email
      )
    );
  }
  for (const [key, value] of Object.entries(
    numOrNull(ParseProcessEnv().keysWithIndices)
  )) {
    if (typeof value === "number") {
      console.info(
        `Key ${Indexer.Utility.ExpectedEnvConfigHandler[value]} detected in .env`
      );
    } else if (value === null) {
      console.warn(
        `missing key ${
          Indexer.Utility.ExpectedEnvConfigHandler[Number.parseInt(key)]
        } in .env`
      );
    }
  }
  return config as ConfigExtended;
};

const config = getConfig();

export const {
  ALGOLIA_APP_ID,
  ALGOLIA_INDEX,
  ALGOLIA_SEARCH_KEY,
  ALGOLIA_WRITE_KEY,
  SANITY_API_TOKEN,
  SANITY_API_VERSION,
  SANITY_DATASET,
  SANITY_DATASET_TAG,
  SANITY_PROJECT_ID,
  SANITY_WEBHOOK_SECRET
} = getSanitzedConfig(config);
