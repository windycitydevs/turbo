import { ALGOLIA_WRITE_KEY } from "../config/constants";
import type Indexer from "../types/namespace";
import {
  defaultGroqQuery,
  getSanityDataCreateOrUpdate
} from "./operation-helpers";

export const handleDelete = async ({
  searchIndex,
  algoliaWriteKey,
  req
}: Indexer.Operation.HandleDeleteProps): Promise<Indexer.Operation.BatchResponse> => {
  const algoliaDeleteArr = Array.of<Indexer.Operation.BatchResponse>();
  const webhookRes = req.body as Indexer.Sanity.WebhookResponse;
  try {
    await searchIndex
      .batch(
        [
          { action: "deleteObject", body: { objectID: webhookRes.changed._id } }
        ],
        {
          headers: {
            "X-Algolia-API-Key": algoliaWriteKey ?? ALGOLIA_WRITE_KEY ?? ""
          }
        }
      )
      .then(deleteRes => {
        algoliaDeleteArr.push(deleteRes);
        return deleteRes;
      })
      .catch(reason => {
        return console.error({
          errorHandleDeleteFlowCatchCB: JSON.stringify(
            { ...(reason ?? {}) },
            null,
            2
          )
        });
      });
  } catch (err) {
    console.error({
      errorHandleDeleteFlowCatchBlock: JSON.stringify(
        { ...((err as any) ?? {}) },
        null,
        2
      )
    });
  } finally {
    return algoliaDeleteArr[0];
  }
};

export const transformRes = (props: Indexer.Sanity.SanityDocument) => {
  const { _id, _type, _rev, _updatedAt, _createdAt, ...rest } = props;
  return {
    objectID: _id,
    type: _type,
    updatedAt: _updatedAt,
    createdAt: _createdAt,
    ...rest
  };
};

export const handleUpdate = async ({
  searchIndex,
  algoliaWriteKey,
  sanityClient,
  req,
  transformedData,
  groqQueryUpdate
}: Indexer.Operation.HandleOpsTargeted<"update">): Promise<
  | Indexer.Operation.PartialUpdateObjectResponse
  | Indexer.Operation.BatchResponse
  | undefined
> => {
  const algoliaUpdateArr =
    Array.of<Indexer.Operation.PartialUpdateObjectResponse>();
  const batcher = Array.of<Indexer.Operation.BatchResponse>();
  if (!transformedData) {
    const sanityDerivedData =
      typeof groqQueryUpdate !== "undefined"
        ? await getSanityDataCreateOrUpdate<"update">({
            sanityClient: sanityClient,
            req,
            operation: "update",
            groqScaffoldUpdate: groqQueryUpdate
          })
        : await getSanityDataCreateOrUpdate<"update">({
            sanityClient: sanityClient,
            groqScaffoldUpdate: defaultGroqQuery,
            req,
            operation: "update"
          });
    const algoliaObj =
      typeof groqQueryUpdate !== "undefined"
        ? sanityDerivedData
        : transformRes({ ...sanityDerivedData });

    try {
      return await searchIndex
        .batch([{ action: "partialUpdateObject", body: { ...algoliaObj } }], {
          queryParameters: { createIfNotExists: true },
          headers: {
            "X-Algolia-API-Key": algoliaWriteKey ?? ALGOLIA_WRITE_KEY ?? ""
          }
        })
        .then(updateRes => {
          batcher.push(updateRes);
          return updateRes;
        })
        .catch(reason => {
          console.error({
            errorHandleUpdateFlowPartialUpdateFlow: JSON.stringify(
              { ...(reason ?? {}) },
              null,
              2
            )
          });
          return undefined;
        });
    } catch (err) {
      console.error({
        errorHandleUpdateFlow: JSON.stringify(
          { ...((err as any) ?? {}) },
          null,
          2
        )
      });
    } finally {
      return batcher[0];
    }
  } else if (typeof transformedData !== "undefined") {
    try {
      await searchIndex
        .partialUpdateObject(transformedData, {
          createIfNotExists: true,
          headers: {
            "X-Algolia-API-Key": algoliaWriteKey ?? ALGOLIA_WRITE_KEY ?? ""
          }
        })
        .then(updateRes => {
          algoliaUpdateArr.push(updateRes);
          return updateRes;
        })
        .catch(reason => {
          throw new Error(`${reason}`);
        });
    } catch (err) {
      console.error({
        errorHandleUpdateTransformedDataFlow: JSON.stringify(
          { ...((err as any) ?? {}) },
          null,
          2
        )
      });
    } finally {
      return algoliaUpdateArr[0];
    }
  }
};

export const handleCreate = async ({
  searchIndex,
  algoliaWriteKey,
  req,
  sanityClient,
  groqQueryCreate,
  transformedData
}: Indexer.Operation.HandleOpsTargeted<"create">): Promise<
  Indexer.Operation.SaveObjectResponse | undefined
> => {
  const algoliaCreateArr = Array.of<Indexer.Operation.SaveObjectResponse>();
  if (typeof transformedData === "undefined") {
    const sanityDerivedData =
      typeof groqQueryCreate !== "undefined"
        ? await getSanityDataCreateOrUpdate<"create">({
            sanityClient: sanityClient,
            req,
            groqScaffoldCreate: groqQueryCreate,
            operation: "create"
          })
        : await getSanityDataCreateOrUpdate<"create">({
            sanityClient: sanityClient,
            groqScaffoldCreate: defaultGroqQuery,
            req,
            operation: "create"
          });

    const algoliaObj =
      typeof groqQueryCreate !== "undefined"
        ? sanityDerivedData
        : transformRes({ ...sanityDerivedData });
    try {
      return await searchIndex
        .saveObject(algoliaObj, {
          cacheable: true,
          autoGenerateObjectIDIfNotExist: false,
          headers: {
            "X-Algolia-API-Key": algoliaWriteKey ?? ALGOLIA_WRITE_KEY ?? ""
          }
        })
        .then(createRes => {
          algoliaCreateArr.push(createRes);
          return createRes;
        })
        .catch(reason => {
          throw new Error(`${reason}`);
        });
    } catch (err) {
      console.error({
        errorHandleCreateFlow: JSON.stringify(
          { ...((err as any) ?? {}) },
          null,
          2
        )
      });
    } finally {
      return algoliaCreateArr[0];
    }
  } else if (typeof transformedData !== "undefined") {
    try {
      await searchIndex
        .saveObject(transformedData, {
          cacheable: true,
          autoGenerateObjectIDIfNotExist: false,
          headers: {
            "X-Algolia-API-Key": algoliaWriteKey ?? ALGOLIA_WRITE_KEY ?? ""
          }
        })
        .then(createRes => {
          algoliaCreateArr.push(createRes);
          return createRes;
        })
        .catch(reason => {
          throw new Error(`${reason}`);
        });
    } catch (err) {
      console.error({
        errorHandleCreateTransformedDataFlow: JSON.stringify(
          { ...((err as any) ?? {}) },
          null,
          2
        )
      });
    } finally {
      return algoliaCreateArr[0];
    }
  }
};

/**
 * `transformedData` takes priority over `groqQueryCreate | groqQueryUpdate` props -- these fields are optional -- info below
 *
 * @description to use custom groqQueries (groqQueryCreate | groqQueryUpdate) you must use the following
 * base scaffold for query parameters and only this base scaffold--beyond that, go wild
 *
 * @example `*[_type == $type && _id == $id]{...}`
 *
 * ---
 *
 * IMPORTANT
 * @description Alternatively, if the `transformedData` field is provided, it takes priority
 * over any custom groq queries provided. This transformed data must be obtained from firing a groq query yourself
 * and must handle the conversion of the Sanity-specific `_id` key to the Algolia-specific `objectID` key.
 *
 * If the `objectID` key is not present, algolia WILL generate one at random making efforts to update this record in the future quite difficult
 */

export default async function HandleIndexer({
  req,
  sanityClient,
  searchIndex,
  algoliaWriteKey,
  operation,
  transformedData,
  groqQueryCreate,
  groqQueryUpdate
}: Indexer.Operation.DeltaHandlerProps): Promise<Indexer.Operation.OpsReturnTypeUnion> {
  const arrHelper = Array.of<Indexer.Operation.OpsReturnTypeUnion>();
  try {
    if (operation.valueOf() === "delete") {
      return (
        await Promise.all([
          await handleDelete({
            req,
            searchIndex,
            algoliaWriteKey: algoliaWriteKey ?? ALGOLIA_WRITE_KEY ?? ""
          })
            .then(data => {
              arrHelper.push(data);
              return data;
            })
            .catch(err => console.error(err))
        ])
      )[0] as Indexer.Operation.BatchResponse;
    } else if (operation.valueOf() === "create") {
      return (
        await Promise.all([
          await handleCreate({
            req,
            sanityClient,
            searchIndex,
            transformedData,
            groqQueryCreate,
            algoliaWriteKey: algoliaWriteKey ?? ALGOLIA_WRITE_KEY ?? ""
          })
            .then(data => {
              arrHelper.push(data);
              return data;
            })
            .catch(err => console.error(err))
        ])
      )[0] as Indexer.Operation.SaveObjectResponse;
    } else if (operation.valueOf() === "update") {
      return (
        await Promise.all([
          await handleUpdate({
            req,
            sanityClient,
            searchIndex,
            transformedData,
            groqQueryUpdate,
            algoliaWriteKey: algoliaWriteKey ?? ALGOLIA_WRITE_KEY ?? ""
          })
            .then(data => {
              arrHelper.push(data);
              return data;
            })
            .catch(err => console.error(err))
        ])
      )[0] as
        | Indexer.Operation.PartialUpdateObjectResponse
        | Indexer.Operation.BatchResponse;
    }
  } catch (err) {
    console.error(`${err}`);
  } finally {
    return arrHelper[0];
  }
}
