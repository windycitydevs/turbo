/* eslint-disable import/no-extraneous-dependencies */
export {
  default as HandleIndexer,
  handleCreate,
  handleDelete,
  handleUpdate,
  transformRes
} from "./api/handle-operations";
export {
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
} from "./config/constants";
export { default as Indexer } from "./types/namespace";
export { handleQParam, qParamConditional } from "./utils/handle-q-param";
export { mapParams } from "./utils/map-params";

declare module "types/namespace" {
  namespace Indexer {}
}
declare module "api/operation-helpers" {}
declare module "api/handle-operations" {}
declare module "config/constants" {}
declare module "utils/parse-process-env" {}
