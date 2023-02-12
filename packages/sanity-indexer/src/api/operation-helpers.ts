import groq from "groq";
import type { ErrorProps } from "next/error";
import { Indexer } from "../types/namespace";
export const defaultGroqQuery = groq`*[_type == $type && _id == $id]{'objectID': _id,...}`;

/**
 *
 * takes create or update operation args to conditionally return either groqScaffoldCreate or groqScaffoldUpdate props
 *
 * if we use break here it will make the function return string | undefined instead of string
 *  which is what the thrown TypeError will achieve if the case for create or update remains unfulfilled
 */

export const getQueryForOperation = <
  T extends Indexer.Sanity.SlashDeleteFromEnumKeys
>(
  props: Indexer.Operation.GetQueryForOperationProps<T>
): string => {
  switch (props.operation) {
    case "create":
      return props.groqScaffoldCreate;
    case "update":
      return props.groqScaffoldUpdate;
    default:
      (e: ErrorProps) => {
        throw new TypeError(`unexpected ${e.statusCode} ${e.title}`);
      };
      return "";
  }
};

/**
 *
 * Sanity Create or Update Operation Logging Helper.
 * If no `targetKey` is provided (the key to have its value logged) it defaults to title
 * @returns string
 */

export const workupCreateOrUpdateLogHelper = ({
  targetKey,
  o
}: {
  o:
    | {
        [s: string]: unknown;
      }
    | ArrayLike<unknown>;
  targetKey?: string | undefined;
}) =>
  Object.entries<unknown>(o)
    .map<string>(([key, val]) =>
      (key.includes(targetKey ? targetKey : "title") ? `${val}` : "").trim()
    )
    .join("")
    .trim();

export const templateLiteralForLogger = (
  operation: Indexer.Sanity.SlashDeleteFromEnumKeys,
  isCustom: boolean,
  workup: {
    o:
      | {
          [s: string]: unknown;
        }
      | ArrayLike<unknown>;
    targetKey?: string | undefined;
  }
) =>
  `[${operation} workup (${
    isCustom ? "custom" : "not custom"
  }) for record]: ${workupCreateOrUpdateLogHelper({
    o: workup.o,
    targetKey: workup?.targetKey ? workup?.targetKey : "title" ?? "_id"
  })}`;

/**
 *
 * @description to use custom properties (groqQueryCreate | groqQueryUpdate) you must use the following
 * base scaffold for query parameters and only this base scaffold--beyond that, go wild
 *
 * @example `*[_type == $type && _id == $id]{...}`
 *
 * DIY
 *
 * @description
 * ```md
 * - `updated` and `created` return time elapsed in days to the thousandth decimal point
 * -
 * ```
 *
 * @example
 *
 * ```ts
 * const customGroqQuery = groq`*[_type match $type && _id == $id]|order(count(sections[]) desc){
 *  "objectID": _id,
 *  "type": _type,
 *  "rev": _rev,
 *  "updated": round(((dateTime(now()) - dateTime(_updatedAt)) / 60 / 60 / 24), 5),
 *  "created": round(((dateTime(now()) - dateTime(_createdAt)) / 60 / 60 / 24), 5),
 *  "me": identity(),
 *  title,
 *  description,
 *  keywords,
 *  metaDescription,
 *  metaTitle,
 *  addTitleSuffix
 * }`;
 * ```
 *
 * ```ts
 *const handleNextApiRequestProps = async (req: Indexer.Operation.NextApiRequest) => {
 *  const relaxedContentLayoutMatcher = req.body.changed.operation._type ?
 *      req.body.changed.operation._type.includes("ContentLayout") ?
 *      "**ContentLayout**" :
 *    req.body.changed.operation._type :
 *   "*";
 *};
 *```
 */

export const getSanityDataCreateOrUpdate = async <
  T extends Indexer.Sanity.SlashDeleteFromEnumKeys
>(
  props: Indexer.Sanity.GetSanityDataCreateOrUpdateProps<T>
) => {
  const webhookRes = props.req.body as Indexer.Sanity.WebhookResponse;
  const Data = async () => {
    switch (props.operation) {
      case "create": {
        const data = await props.sanityClient.fetch(
          getQueryForOperation<"create">({
            operation: props.operation,
            groqScaffoldCreate: props?.groqScaffoldCreate
              ? props.groqScaffoldCreate
              : defaultGroqQuery
          }),
          {
            type: webhookRes.changed._type,
            id: webhookRes.changed._id
          }
        );
        const logger = templateLiteralForLogger(
          props.operation,
          typeof props?.groqScaffoldCreate !== "undefined" ? true : false,
          {
            o: data[0],
            targetKey: props.targetKeyForLogger ?? "_id"
          }
        );
        return { data, logger };
      }
      case "update": {
        const data = await props.sanityClient.fetch(
          getQueryForOperation<"update">({
            operation: props.operation,
            groqScaffoldUpdate: props?.groqScaffoldUpdate
              ? props.groqScaffoldUpdate
              : defaultGroqQuery
          }),
          {
            type: webhookRes.changed._type,
            id: webhookRes.changed._id
          }
        );
        const logger = templateLiteralForLogger(
          props.operation,
          typeof props?.groqScaffoldUpdate !== "undefined" ? true : false,
          {
            o: data[0],
            targetKey: props.targetKeyForLogger ?? "_id"
          }
        );
        return { data, logger };
      }
      default: {
        return {
          data: {} as any,
          logger: `[error]: ${new Error("error in createupdateworkup")}`
        };
      }
    }
  };
  const { data, logger } = await Data();
  // console.log(logger);
  // console.log(
  //   `<details>is the data wrapped in an array? ${
  //     Array.isArray(data) === true
  //       ? "why yes, yes it is " + JSON.stringify(data[0], null, 2)
  //       : "why no, no it isn't " + JSON.stringify(data, null, 2)
  //   }</details>`
  // );
  return data[0];
};
