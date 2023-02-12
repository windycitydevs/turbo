import type { AlgoliaSearchOptions } from "algoliasearch";

export namespace Backfill {
  export module Algolia {
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

    export interface Aborter {
      abort(): void;
      signal: AbortSignal;
    }
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

export default Backfill;
