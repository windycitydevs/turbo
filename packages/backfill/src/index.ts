/* eslint-disable import/no-extraneous-dependencies */
export {
  aggregateGroq,
  AlgBackfillClient,
  AlgBackfillIndex,
  comparator,
  default as BackfillIndex,
  envPaths,
  formatCount,
  getBulkData,
  getSanityData,
  inferObj,
  objInference,
  ReqMethod,
  sanityEndpoints,
  sanityGraphConfig,
  sanityNetwork,
  wcdBlue,
  type AxiosResponseSanityIdArr,
  type Depth,
  type GetBulkDataProps,
  type GetSanityDatasetProps,
  type IncomingArgs,
  type InferDepth,
  type SanityGraphConfigProps
} from "./bin";
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
export { default as Backfill } from "./types/namespace";

declare module "types/namespace" {
  namespace Backfill {}
}
declare module "bin" {}
declare module "config/constants" {}
declare module "utils/parse-process-env" {}
