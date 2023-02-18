import type { createClient } from "@sanity/client";
import type { AlgoliaSearchOptions, SearchIndex } from "algoliasearch";
import { IncomingMessage } from "http";

export namespace Indexer {
  export module Algolia {
    export enum SearchClientType {
      custom,
      preconfigured
    }

    export interface AlgoliaClientConfig {
      appId?: string;
      searchKey?: string;
      options?: AlgoliaSearchOptions;
    }

    export type AlgoliaOptionsSansHeaders = Helpers.RemoveFields<
      AlgoliaSearchOptions,
      "headers"
    >;

    export type AlgoliaHeaders = Helpers.RemoveFields<
      AlgoliaSearchOptions,
      keyof Omit<AlgoliaSearchOptions, "headers">
    >;

    export type AlgoliaSearchCustom = {
      appId: string;
      writeKey: string;
      options?: {
        readonly [P in keyof AlgoliaOptionsSansHeaders]: AlgoliaOptionsSansHeaders[P];
      };
      headers?: AlgoliaHeaders["headers"];
    };

    export type AlgoliaClientCustomConsumerProps = Pick<
      AlgoliaSearchCustom,
      "headers" | "options"
    >;

    export type AlgoliaClientConfigHandlerProps<
      T extends keyof typeof SearchClientType
    > = T extends "custom"
      ? Helpers.ConditionalToRequired<
          AlgoliaClientConfig,
          "appId" | "searchKey"
        >
      : Helpers.RemoveFields<
          AlgoliaClientConfig,
          "appId" | "searchKey"
        >["options"];

    export type AlgoliaSearchIndexConfig<
      T extends keyof typeof SearchClientType = keyof typeof SearchClientType
    > = T extends "custom"
      ? {
          index: string;
          options: {
            [P in keyof AlgoliaSearchOptions]: AlgoliaSearchOptions[P];
          };
        }
      : never;

    export type Cache = {
      /**
       * Gets the value of the given `key`.
       */
      get: <TValue>(
        key: Record<string, any> | string,
        defaultValue: () => Promise<TValue>,
        events?: CacheEvents<TValue>
      ) => Promise<TValue>;

      /**
       * Sets the given value with the given `key`.
       */
      set: <TValue>(
        key: Record<string, any> | string,
        value: TValue
      ) => Promise<TValue>;

      /**
       * Deletes the given `key`.
       */
      delete: (key: Record<string, any> | string) => Promise<void>;

      /**
       * Clears the cache.
       */
      clear: () => Promise<void>;
    };

    export type CacheEvents<TValue> = {
      /**
       * The callback when the given `key` is missing from the cache.
       */
      miss: (value: TValue) => Promise<any>;
    };

    export type MemoryCacheOptions = {
      /**
       * If keys and values should be serialized using `JSON.stringify`.
       */
      serializable?: boolean;
    };

    export type BrowserLocalStorageOptions = {
      /**
       * The cache key.
       */
      readonly key: string;

      /**
       * The native local storage implementation.
       */
      readonly storage: Storage;
    };
    /** This Web Storage API interface provides access to a particular domain's session or local storage. It allows, for example, the addition, modification, or deletion of stored data items. */
    export interface Storage {
      /** Returns the number of key/value pairs. */
      readonly length: number;
      /**
       * Removes all key/value pairs, if there are any.
       *
       * Dispatches a storage event on Window objects holding an equivalent Storage object.
       */
      clear(): void;
      /** Returns the current value associated with the given key, or null if the given key does not exist. */
      getItem(key: string): string | null;
      /** Returns the name of the nth key, or null if n is greater than or equal to the number of key/value pairs. */
      key(index: number): string | null;
      /**
       * Removes the key/value pair with the given key, if a key/value pair with the given key exists.
       *
       * Dispatches a storage event on Window objects holding an equivalent Storage object.
       */
      removeItem(key: string): void;
      /**
       * Sets the value of the pair identified by key to value, creating a new key/value pair if none existed for key previously.
       *
       * Throws a "QuotaExceededError" DOMException exception if the new value couldn't be set. (Setting could fail if, e.g., the user has disabled storage for the site, or if the quota has been exceeded.)
       *
       * Dispatches a storage event on Window objects holding an equivalent Storage object.
       */
      setItem(key: string, value: string): void;
      [name: string]: any;
    }

    declare var Storage: {
      prototype: Storage;
      new (): Storage;
    };

    export type FallbackableCacheOptions = {
      /**
       * List of caches order by priority.
       */
      caches: Cache[];
    };
  }
  export module Helpers {
    export type Booleanish = boolean | `${boolean}`;

    export type Unenumerate<T> = T extends Array<infer U> ? U : T;

    export type Enumerable<T> = T | T[];

    export type UnwrapPromise<T> = T extends Promise<infer U> ? U : T;

    export type UnwrapAwaitable<T> = T extends PromiseLike<infer U> ? U : T;

    export type PromiseOrSync<T> = T | Promise<T>;

    export type PromiseLikeOrSync<T> = T | PromiseLike<T>;
    /**
  * @type IsExactlyAny
  * @description naked 'any' type in a conditional type will short circuit via a union of both then/else branches

  * solution: boolean is only resolved for T = any
  */
    export type IsExactlyAny<T> = boolean extends (
      T extends never ? true : false
    )
      ? true
      : false;

    export type ExactlyAnyPropertyKeys<T> = {
      [K in keyof T]: IsExactlyAny<T[K]> extends true ? K : never;
    }[keyof T];

    export type NotExactlyAnyPropertyKeys<T> = Exclude<
      keyof T,
      ExactlyAnyPropertyKeys<T>
    >;

    // Try to resolve ill-defined props like for JS users: props can be any, or sometimes objects with properties of type any
    export type MergePropTypes<P, T> =
      // Distribute over P in case it is a union type
      P extends any
        ? // If props is type any, use propTypes definitions
          IsExactlyAny<P> extends true
          ? T
          : // If declared props have indexed properties, ignore inferred props entirely as keyof gets widened
          string extends keyof P
          ? P
          : // Prefer declared types which are not exactly any
            Pick<P, NotExactlyAnyPropertyKeys<P>> &
              // For props which are exactly any, use the type inferred from propTypes if present
              Pick<T, Exclude<keyof T, NotExactlyAnyPropertyKeys<P>>> &
              // Keep leftover props not specified in propTypes
              Pick<P, Exclude<keyof P, keyof T>>
        : never;

    // Any prop that has a default prop becomes optional, but its type is unchanged
    // Undeclared default props are augmented into the resulting allowable attributes
    // If declared props have indexed properties, ignore default props entirely as keyof gets widened
    // Wrap in an outer-level conditional type to allow distribution over props that are unions
    export type Defaultize<P, D> = P extends any
      ? string extends keyof P
        ? P
        : Pick<P, Exclude<keyof P, keyof D>> &
            Partial<Pick<P, Extract<keyof P, keyof D>>> &
            Partial<Pick<D, Exclude<keyof D, keyof P>>>
      : never;

    export type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

    /**
     * Use XOR to define a truly mutually exclusive union
     */
    export type XOR<T, U> = T | U extends object
      ? (Without<T, U> & U) | (Without<U, T> & T)
      : T | U;

    /**
     * Makes an interface with all optional values require AT LEAST one of them
     */
    export type RequireAtLeastOne<T, Keys extends keyof T = keyof T> = Pick<
      T,
      Keys
    > &
      {
        [K in Keys]-?: Required<Pick<T, K>> &
          Partial<Pick<T, Exclude<Keys, K>>>;
      }[Keys];

    /**
     *  Makes an interface with all optional values accept ONLY one of them
     */
    export type RequireOnlyOne<T, Keys extends keyof T = keyof T> = Pick<
      T,
      Exclude<keyof T, Keys>
    > &
      {
        [K in Keys]-?: Required<Pick<T, K>> &
          Partial<Record<Exclude<Keys, K>, undefined>>;
      }[Keys];

    export type RemoveFields<T, P extends keyof T = keyof T> = {
      [S in keyof T as Exclude<S, P>]: T[S];
    };

    export type Depth<
      Y extends { [record: string | symbol | number]: unknown },
      X extends keyof Y = keyof Y
    > = {
      [H in keyof Y[X]]: Y[X][H][keyof Y[X][H]];
    };

    export type InferDepth<T> = T extends Depth<infer U> ? U : T;

    export type InferValsDepth<T> = T extends Depth<infer U> ? U[keyof U] : T;

    export type InferKeysDepth<T> = T extends InferDepth<Depth<infer U>>
      ? keyof U
      : T;

    // type inferKeys = <J, T extends InferKeysDepth<J>>(props: T) => keyof typeof props;

    export const inferObj = <J, T extends InferDepth<J>>(props: T) => props;

    export const objInference = <T extends Parameters<typeof inferObj>["0"]>(
      props: T
    ) => inferObj(props);

    /**
     * @type ConditionalToRequired
     * @description
     *
     * strips fields of being conditionally undefined via an input union of keys without otherwise altering the type being operated on
     *
     *
     * @example
     * ```ts
    interface ExampleEntity {
        a?: () => Array<number>;
        b?: Date | undefined;
        c?: Record<string, File> | undefined;
    }

    const exampleRequires = (
        props: ConditionalToRequired<ExampleEntity, "a" | "c">
      ): {
        a: () => number[];
        b?: Date | undefined;
        c: Record<string, File>;
    } => ({ ...props });
     * ```
     */
    export type ConditionalToRequired<
      T,
      Z extends keyof T = keyof T
    > = RemoveFields<T, Z> & { [Q in Z]-?: T[Q] };

    export type RequiredToConditional<
      T,
      X extends keyof T = keyof T
    > = RemoveFields<T, X> & { [Q in X]?: T[Q] };

    export type ExcludeFieldEnumerable<T, K extends keyof T> = RemoveFields<
      T,
      K
    >;

    export function ExcludeTargetedField<Type, Key extends keyof Type>(
      type: Type,
      ...keys: Key[]
    ): Omit<Type, Key> {
      for (const key of keys) {
        delete type[key];
      }
      return type;
    }
  }

  export module Json {
    export class Serializer<T> {
      serialize(inp: T, replacer?: any): string {
        return JSON.stringify(inp, replacer, 2);
      }
      deserialize(inp: string): JSONified<T> {
        return JSON.parse(inp);
      }
    }

    export type Widget = {
      toJSON(): {
        kind: "Widget";
        date: Date;
      };
    };

    export type Item = {
      text: string;
      count: number;
      // preserve options
      choice: "yes" | "no" | null;
      // drop functions
      func: () => void;
      nested: {
        isSaved: boolean;
        data: [1, undefined, 2];
      };
      // pointer to another type
      widget: Widget;
      // Same obj referenced again
      children?: Item[];
    };

    export type PrimitveJSONValue =
      | string
      | number
      | boolean
      | undefined
      | null;

    export type JsonObject = { [Key in string]?: PrimitveJSONValue };

    export type JSONValue = PrimitveJSONValue | JSON | JsonObject;

    export type JsonArr = Array<string | number | boolean | JsonObject | null>;

    export type JSONifiedObject<T> = {
      [P in keyof T]: JSONifiedObject<T[P]>;
    };
    export type Send<T> = (body: T) => void;

    export type UndefinedAsNull<T> = T extends undefined ? null : T;

    export type JSONifiedArray<T> = Array<UndefinedAsNull<JSONified<T>>>;

    export type JSONifiedValue<T> = T extends string | number | boolean | null
      ? T
      : T extends Record<string, unknown>
      ? never
      : T extends () => Record<string, unknown>
      ? JSONifiedObject<T>
      : T extends Array<infer U>
      ? JSONifiedArray<U>
      : never;

    export type JSONified<T> = JSONifiedValue<
      T extends { toJSON(): infer U } ? U : T
    >;
  }
  export module Operation {
    export type PreviewData = string | false | object | undefined;

    export type Env = {
      [key: string]: string | undefined;
    };
    export interface NextApiRequest extends IncomingMessage {
      /**
       * Object of `query` values from url
       */
      query: Partial<{
        [key: string]: string | string[];
      }>;
      /**
       * Object of `cookies` from header
       */
      cookies: Partial<{
        [key: string]: string;
      }>;
      body?: Sanity.WebhookResponse;
      env: Env;
      preview?: boolean;
      /**
       * Preview data set on the request, if any
       * */
      previewData?: string | false | object | undefined;
    }

    export type ArticleToTaxonomiesConditional =
      | {
          _createdAt: string;
          _rev: string;
          _type: string;
          _updatedAt: string;
          created: number;
          displayName: string;
          icon: string | null;
          objectID: string;
          parentId: string;
          parentSlug: string;
          parentTitle: string;
          parentType: string;
          updated: number;
        }[]
      | null;

    export type ArticleToImg = {
      B: number;
      GB: number;
      KB: number;
      MB: number;
      aspectRatio: string;
      created: number;
      created_at: string;
      height: number;
      mimeType: string;
      objectID: string;
      key: string | null;
      parentId: string;
      parentSlug: string;
      parentType: string;
      publicId: string;
      resource: string;
      type: string;
      url: string;
      v: number;
      width: number;
    } | null;

    export type ArticleToAuthorsToAuthorImage = {
      B: number;
      GB: number;
      KB: number;
      MB: number;
      aspectRatio: string;
      created: number;
      grandParentSlug: string;
      grandparentId: string;
      grandparentType: string;
      height: number;
      mimeType: string;
      parentId: string;
      parentType: string;
      publicId: string;
      tags: any[];
      url: string;
      version: number;
      width: number;
    } | null;

    export type ArticleAuthorTaxonomyCounts = {
      authors: number;
      taxonomies: number;
    };

    export type ArticleToAuthorsToSocial = Helpers.Enumerable<{
      altText: string;
      elementId: string;
      icon: string;
      key: string;
      label: string;
      style: string;
      type: string;
      url: string;
    }> | null;

    export type ArticleToAuthors =
      | {
          _createdAt: string;
          _rev: string;
          _type: string;
          _updatedAt: string;
          bio: string;
          created: number;
          fullName: string;
          image: ArticleToAuthorsToAuthorImage;
          imageHasPriority: boolean | null;
          objectID: string;
          parentId: string;
          parentSlug: string;
          parentTitle: string;
          parentType: string;
          quote: string | null;
          quoteDate: string | null;
          role: string;
          social: ArticleToAuthorsToSocial;
          updated: number;
        }[]
      | null;

    export type ArticleGroqResponseSingleton = {
      _createdAt: string;
      _id: string;
      _rev: string;
      _type: string;
      _updatedAt: string;
      authors: ArticleToAuthors;
      content: string;
      counts: ArticleAuthorTaxonomyCounts;
      created: number;
      description: string;
      hasAuthor: boolean;
      hasImage: boolean;
      hasTaxonomy: boolean;
      image: ArticleToImg;
      objectID: string;
      publishDate: string;
      publishDateTimestamp: string;
      readTime: number;
      slug: string;
      taxonomies: ArticleToTaxonomiesConditional;
      title: string;
      updated: number;
    };

    export type ArticleGroqResponseArr = Array<ArticleGroqResponseSingleton>;

    export type DeleteResponse = {
      taskID: number;
    };

    export type PartialUpdateObjectResponse = {
      taskID: number;
      objectID: string;
    };

    export type SaveObjectResponse = {
      taskID: number;
      objectID: string;
    };

    export type BatchResponse = {
      taskID: number;
      objectIDs: string[];
    };
    export interface HandleDeleteProps {
      searchIndex: SearchIndex;
      algoliaWriteKey?: string;
      req: NextApiRequest;
    }

    export type OpsReturnTypeUnion =
      | SaveObjectResponse
      | BatchResponse
      | PartialUpdateObjectResponse
      | undefined;
    export interface HandleOperationProps extends HandleDeleteProps {
      sanityClient: ReturnType<typeof createClient>;
      transformedData?: Record<string, any>;
      groqQueryUpdate?: string;
      groqQueryCreate?: string;
    }
    export interface DeltaHandlerProps extends HandleOperationProps {
      operation: keyof typeof Sanity.OperationEnum;
    }

    export type HandleOpsTargeted<
      T extends Exclude<keyof typeof Sanity.OperationEnum, "delete">
    > = T extends "create"
      ? {
          readonly [P in keyof Helpers.RemoveFields<
            HandleOperationProps,
            "groqQueryUpdate"
          >]: Helpers.RemoveFields<HandleOperationProps, "groqQueryUpdate">[P];
        }
      : {
          readonly [P in keyof Helpers.RemoveFields<
            HandleOperationProps,
            "groqQueryCreate"
          >]: Helpers.RemoveFields<HandleOperationProps, "groqQueryCreate">[P];
        };

    export type GetQueryForOperationProps<
      T extends Exclude<keyof typeof Sanity.OperationEnum, "delete">
    > = T extends "update"
      ? { operation: "update"; groqScaffoldUpdate: string }
      : { operation: "create"; groqScaffoldCreate: string };

    export interface Aborter {
      abort(): void;
      signal: AbortSignal;
    }
    export type NextApiResponseUnion =
      | {
          data: {
            output: OpsReturnTypeUnion;
            input: Sanity.WebhookResponse;
          };
        }
      | { message: string }
      | { msg: void }
      | { err: string };
  }
  export module Sanity {
    export const DeltaGroqWebhookProjection = `{
      "changed": select(delta::operation() == "delete" => {
         "operation": "delete",
         "_id": before()._id,
         "_type": before()._type,
         "projectId": sanity::projectId(),
         "dataset": sanity::dataset()
      }, delta::operation() == "update" => {
         "operation": "update",
         "_id": coalesce(before()._id, after()._id),
         "_type": coalesce(before()._type, after()._type),
         "projectId": sanity::projectId(),
         "dataset": sanity::dataset()
      }, delta::operation() == "create" => {
         "operation": "create",
         "_id": after()._id,
         "_type": after()._type,
         "projectId": sanity::projectId(),
         "dataset": sanity::dataset()
      }, {})
     }
     ` as const;
    export interface ClientConfig {
      useCdn?: boolean;
      token?: string;
      apiHost?: string;
      apiVersion?: string;
      proxy?: string;
      timeout?: number;
      allowReconfigure?: boolean;
      ignoreBrowserTokenWarning?: boolean;
      withCredentials?: boolean;
    }

    export enum ClientConfigTypeEnum {
      custom,
      preconfigured
    }

    export type AxiosGroqDataQueryRes<T> = {
      ms: number;
      query: string;
      result: Array<
        {
          _createdAt: string;
          _id: string;
          _rev: string;
          _type: string;
          _updatedAt: string;
          apiVersion: string;
          query: string;
        } & T extends Record<string | number | symbol, infer U>
          ? Record<string | number | symbol, U>
          : T extends Array<infer U>
          ? U
          : { [record: string]: T }
      >;
    };

    /**
     * Sanity document with a guaranteed `_id` and `_type`
     *
     */
    export interface Doc {
      _id: string;
      _type: string;
      _rev?: string | undefined;
      _updatedAt?: string | undefined;
      _key?: string | undefined;
      [attribute: string]: unknown;
    }

    export interface PersistedDoc
      extends Helpers.ConditionalToRequired<Doc, "_updatedAt" | "_key"> {
      _createdAt: string;
    }

    export type SanityDocument<
      T extends Record<string, any> = Record<string, any>
    > = {
      [P in keyof T]: T[P];
    } & {
      _id: string;
      _rev: string;
      _type: string;
      _createdAt: string;
      _updatedAt: string;
    };

    export interface CurrentUser {
      id: string;
      name: string;
      profileImage?: string;
    }

    export enum SanityHttpApiTypes {
      "assets",
      "doc",
      "export",
      "history",
      "jobs",
      "listen",
      "mutate",
      "projects",
      "query",
      "roles"
    }

    export enum OperationEnum {
      "create",
      "delete",
      "update"
    }

    export const OperationObj = {
      changed: {
        operation: {}
      }
    };

    export type WebhookResponse = {
      readonly changed: {
        readonly _type: string;
        readonly projectId: string;
        readonly dataset: string;
        readonly operation: keyof typeof OperationEnum;
        readonly _id: string;
      };
    };

    export type SanityMembersPath = `/projects`;

    export type SlashDeleteFromEnumKeys = Exclude<
      keyof typeof OperationEnum,
      "delete"
    >;

    export type GetSanityDataCreateOrUpdatePropsBaseEntity<
      T extends SlashDeleteFromEnumKeys
    > = Operation.GetQueryForOperationProps<T> & {
      readonly targetKeyForLogger?: string;
      readonly sanityClient: ReturnType<typeof createClient>;
      readonly req: Operation.NextApiRequest;
    };

    export type GetSanityDataCreateOrUpdateProps<
      T extends SlashDeleteFromEnumKeys
    > = T extends "create"
      ? {
          readonly [P in keyof GetSanityDataCreateOrUpdatePropsBaseEntity<"create">]: GetSanityDataCreateOrUpdatePropsBaseEntity<"create">[P];
        }
      : {
          readonly [P in keyof GetSanityDataCreateOrUpdatePropsBaseEntity<"update">]: GetSanityDataCreateOrUpdatePropsBaseEntity<"update">[P];
        };

    export type WorkupCreateOrUpdateLogHelperProps = {
      readonly o:
        | {
            readonly [s: string]: unknown;
          }
        | ArrayLike<unknown>;
      readonly targetKey?:
        | "_id"
        | "title"
        | "slug.current"
        | "_type"
        | "_rev"
        | "publishDateTimestamp"
        | "publishDate"
        | "_createdAt"
        | "_updatedAt"
        | unknown;
    };
  }
  export module Utility {
    export type ProcessEnv = { [key: string]: string | undefined };

    export type LoadedEnvFiles = Array<{
      path: string;
      contents: string;
    }>;

    export type Log = {
      info: (...args: any[]) => void;
      error: (...args: any[]) => void;
    };

    export enum ExpectedEnvConfigHandler {
      ALGOLIA_SEARCH_KEY,
      ALGOLIA_WRITE_KEY,
      ALGOLIA_INDEX,
      ALGOLIA_APP_ID,
      SANITY_DATASET,
      SANITY_PROJECT_ID,
      SANITY_API_TOKEN,
      SANITY_API_VERSION,
      SANITY_DATASET_TAG,
      SANITY_WEBHOOK_SECRET
    }

    export enum OSandNpmInformation {
      COLORTERM,
      DISPLAY,
      GIT_ASKPASS,
      HOME,
      HOSTTYPE,
      INIT_CWD,
      LANG,
      LESSCLOSE,
      LESSOPEN,
      LOGNAME,
      LS_COLORS,
      MOTD_SHOWN,
      NAME,
      NODE,
      npm_config_argv,
      npm_config_bin_links,
      npm_config_email,
      npm_config_ignore_optional,
      npm_config_ignore_scripts,
      npm_config_init_license,
      npm_config_init_version,
      npm_config_registry,
      npm_config_save_prefix,
      npm_config_strict_ssl,
      npm_config_unsafe_perm,
      npm_config_user_agent,
      npm_config_username,
      npm_config_version_commit_hooks,
      npm_config_version_git_message,
      npm_config_version_git_sign,
      npm_config_version_git_tag,
      npm_config_version_tag_prefix,
      npm_execpath,
      npm_lifecycle_event,
      npm_node_execpath,
      npm_package_files_0,
      npm_package_description,
      npm_package_main,
      npm_package_module,
      npm_package_name,
      npm_package_readmeFilename,
      npm_package_scripts_build,
      npm_package_scripts_dev,
      npm_package_scripts_lint,
      npm_package_scripts_prebuild,
      npm_package_sideEffects,
      npm_package_types,
      npm_package_version,
      NVM_BIN,
      NVM_CD_FLAGS,
      NVM_DIR,
      NVM_INC,
      OLDPWD,
      PATH,
      PULSE_SERVER,
      PWD,
      SHELL,
      SHLVL,
      TERM,
      TERM_PROGRAM,
      TERM_PROGRAM_VERSION,
      USER,
      VSCODE_GIT_ASKPASS_EXTRA_ARGS,
      VSCODE_GIT_ASKPASS_MAIN,
      VSCODE_GIT_ASKPASS_NODE,
      VSCODE_GIT_IPC_HANDLE,
      VSCODE_IPC_HOOK_CLI,
      WAYLAND_DISPLAY,
      WT_PROFILE_ID,
      WT_SESSION,
      XDG_DATA_DIRS,
      XDG_RUNTIME_DIR
    }
  }
}

export default Indexer;
