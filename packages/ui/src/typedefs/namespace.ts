import type { MouseEvent } from "react";
import WcdEnums from "./enum";

export namespace UI {
  export module CN {
    export type Value = string | number | boolean | undefined | null;
    export type Mapping = { [key: string]: any };
    export type Argument = Value | Mapping | Argument[];
  }
  export module DT {
    export type UnwrapIntlDateTimeFormat<
      T extends keyof globalThis.Intl.DateTimeFormat
    > = {
      [P in T]: globalThis.Intl.DateTimeFormat[P];
    };
    export type UnwrapIntlDateTimeFormatOptions<
      T extends keyof globalThis.Intl.DateTimeFormatOptions
    > = {
      [P in keyof globalThis.Intl.DateTimeFormatOptions[T]]: globalThis.Intl.DateTimeFormatOptions[T][P];
    };
    export interface DateTimeHandlerProps {
      preference: keyof typeof WcdEnums.DateTime.Preference;
      value: string | number | Date;
      timeZone: keyof typeof WcdEnums.DateTime.TimeZones;
      withGmtOffset?: boolean;
      dateTimeSeparator?: keyof typeof WcdEnums.DateTime.DateTimeSeparator;
      dateFormat?: keyof typeof WcdEnums.DateTime.DateFormat;
      formatMatcher?: UnwrapIntlDateTimeFormatOptions<"formatMatcher">;
    }
  }
  export module Helpers {
    /**
     * System signals which shut down a process
     */
    export enum ShutdownSignal {
      SIGHUP = "SIGHUP",
      SIGINT = "SIGINT",
      SIGQUIT = "SIGQUIT",
      SIGILL = "SIGILL",
      SIGTRAP = "SIGTRAP",
      SIGABRT = "SIGABRT",
      SIGBUS = "SIGBUS",
      SIGFPE = "SIGFPE",
      SIGSEGV = "SIGSEGV",
      SIGUSR2 = "SIGUSR2",
      SIGTERM = "SIGTERM"
    }
    export type Booleanish = boolean | `${boolean}`;

    export type Unenumerate<T> = T extends Array<infer U> ? U : T;

    export type Enumerable<T> = T | T[];

    export type UnwrapPromise<T> = T extends Promise<infer U> ? U : T;

    export type UnwrapAwaitable<T> = T extends PromiseLike<infer U> ? U : T;

    export type PromiseOrSync<T> = T | Promise<T>;

    export type PromiseLikeOrSync<T> = T | PromiseLike<T>;

    export type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

    export type AtLeastOne<
      TTarget,
      TMapped = { [Key in keyof TTarget]: Pick<TTarget, Key> }
    > = Partial<TTarget> & TMapped[keyof TMapped];

    export type Params<T> = T extends NodeJS.Dict<
      Enumerable<string | infer U>
    > | null
      ? NodeJS.Dict<Enumerable<string | U>> | null
      : NodeJS.Dict<Enumerable<string | T>> | null;

    export type XOR<T, U> = T | U extends object
      ? (Without<T, U> & U) | (Without<U, T> & T)
      : T | U;

    export type Tuplize<T extends Record<string, unknown>[]> = Pick<
      T,
      Exclude<
        keyof T,
        Extract<keyof Record<string, unknown>[], string> | number
      >
    >;

    export type GetScalarType<T, O> = O extends Record<string, unknown>
      ? { [P in keyof T]: P extends keyof O ? O[P] : never }
      : never;

    export type UnwrapTuple<Tuple extends readonly unknown[]> = {
      [K in keyof Tuple]: K extends `${number}`
        ? Tuple[K] extends Promise<infer X>
          ? X
          : UnwrapAwaitable<Tuple[K]>
        : UnwrapAwaitable<Tuple[K]>;
    };

    export type UnionToIntersectionFn<T> = (
      T extends unknown ? (k: () => T) => void : never
    ) extends (k: infer Intersection) => void
      ? Intersection
      : never;

    export type GetUnionLast<T> =
      UnionToIntersectionFn<T> extends () => infer Last ? Last : never;

    export type UnionToTuple<T, Tuple extends unknown[] = []> = [T] extends [
      never
    ]
      ? Tuple
      : UnionToTuple<Exclude<T, GetUnionLast<T>>, [GetUnionLast<T>, ...Tuple]>;

    export type CastToStringTuple<T> = T extends [string, ...string[]]
      ? T
      : never;

    export type UnionToTupleString<T> = CastToStringTuple<UnionToTuple<T>>;

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

    export interface Type<T> extends Function {
      new (...args: any[]): T;
    }
    export function create<Type>(c: { new (): Type }): Type {
      return new c();
    }
    export type Depth<
      Y extends { [record: string | symbol | number]: unknown },
      X extends keyof Y = keyof Y
    > = {
      [H in keyof Y[X]]: Y[X][H][keyof Y[X][H]];
    };

    export type InferDepth<T> = T extends Depth<infer U> ? U : T;

    export type InferValsDepth<T> = T extends Depth<infer U> ? U[keyof U] : T;

    export type InferKeysDepth<T> = T extends Depth<infer U> ? keyof U : T;

    export function ExcludeTargetedField<Type, Key extends keyof Type>(
      type: Type,
      ...keys: Key[]
    ) {
      for (const key of keys) {
        delete type[key];
      }
      return type;
    }
  }
  export module Util {
    export type AssertEqual<T, U> = (<V>() => V extends T ? 1 : 2) extends <
      V
    >() => V extends U ? 1 : 2
      ? true
      : false;

    export const assertEqual = <A, B>(val: AssertEqual<A, B>) => val;
    export function assertIs<T>(_arg: T): void {}
    export function assertNever(_x: never): never {
      throw new Error();
    }

    export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
    export type OmitKeys<T, K extends string> = Pick<T, Exclude<keyof T, K>>;
    export type MakePartial<T, K extends keyof T> = Omit<T, K> &
      Partial<Pick<T, K>>;

    export const arrayToEnum = <T extends string, U extends [T, ...T[]]>(
      items: U
    ): { [k in U[number]]: k } => {
      const obj: any = {};
      for (const item of items) {
        obj[item] = item;
      }
      return obj as any;
    };

    export const objectToIndexTuple = (obj: Record<string, unknown>) => {
      const validKeys = objectKeys(obj).filter(k =>
        Array.from(Object.entries(obj)).map(([x = k, r]) => x !== "number")
      );
      const filtered: Record<string, unknown> = {};
      for (const k of validKeys) {
        filtered[k] = obj[k];
        console.log(filtered);
      }
      return Array.from(Object.entries(filtered)).map(
        ([key, val], index) => [{ [`${key}`]: val }, index] as const
      );
    };

    // const getValidEnumValues = (obj: Record<string, unknown>) => {
    //   const validKeys = objectKeys(obj).filter(k =>
    //     Array.from(Object.entries(obj)).map(([x = k, r]) => x !== "number")
    //   );
    //   console.log(validKeys);
    //   const filtered: Record<string, unknown> = {};
    //   for (const k of validKeys) {
    //     filtered[k] = obj[k];
    //     console.log(filtered);
    //   }
    //   enum T {
    //     "hmmm" = objectValues(obj)[0]
    //   }
    //   T.hmmm;
    //   return Array.from(Object.entries(filtered)).map(
    //     ([key, val], index) => ({ [`${key}`]: val } as const)
    //   );
    // };
    export const getValidEnumValues = (
      obj: Record<string, string | number>
    ): (string | number)[] => {
      const validKeys: string[] = objectKeys(obj).filter(
        k => typeof obj[obj[k]] !== "number"
      );
      const filtered: Record<string, string | number> = {};
      for (const k of validKeys) {
        filtered[k] = obj[k];
      }
      return objectValues(filtered);
    };

    const getValidEnumValsExperimental = (obj: Record<string, unknown>) => {
      const validKeys = objectKeys(obj).filter(k => typeof obj[k] !== "number");
      const filtered = Object.assign<{}, { [record: string]: unknown }>(
        {},
        obj
      );
      for (const k of validKeys) {
        filtered[k] = obj[k];
        console.log(filtered);
      }
      return Array.from(Object.entries(filtered)).map(
        ([key, val], index) => [{ [`${key}`]: val }, index] as const
      );
    };

    export const objectValues = (obj: { [record: string]: any }) => {
      return objectKeys(obj).map((e, i) => ({ [i]: obj[e] }[i++]));
    };
    export enum ObjectOptions {
      "Keys",
      "Vals",
      "IndexedTuple"
    }

    export const objectKeys: {
      (...args: [o: Record<string, unknown>]): string[];
    } = Array.of<string>()
      ? (obj: Record<string, unknown>) =>
          Array.from<[string, unknown]>(
            Object.entries<unknown>(obj)
          ).map<string>(([x, _vals]) => x)
      : (object: Record<string, unknown>) => {
          const keys = Array.of<string>();
          for (const key in object) {
            if (
              Object.prototype.hasOwnProperty.call<
                Record<string, unknown>,
                [string],
                boolean
              >(object, key)
            ) {
              keys.push(key);
            }
          }
          return keys;
        };

    export const find = <T>(
      arr: T[],
      checker: (arg: T) => any
    ): T | undefined => {
      for (const item of arr) {
        if (checker(item)) return item;
      }
      return undefined;
    };

    export type identity<T> = T;
    export type flatten<T> = identity<{ [k in keyof T]: T[k] }>;
    export type noUndefined<T> = T extends undefined ? never : T;

    export const isInteger: NumberConstructor["isInteger"] =
      typeof Number.isInteger === "function"
        ? val => Number.isInteger(val)
        : val =>
            typeof val === "number" && isFinite(val) && Math.floor(val) === val;

    export function joinValues<T extends any[]>(
      array: T,
      separator = " | "
    ): string {
      return array
        .map(val => (typeof val === "string" ? `'${val}'` : val))
        .join(separator);
    }
    export const TkParsedType = arrayToEnum([
      "string",
      "nan",
      "number",
      "integer",
      "float",
      "boolean",
      "date",
      "bigint",
      "symbol",
      "function",
      "undefined",
      "null",
      "array",
      "object",
      "unknown",
      "promise",
      "void",
      "never",
      "map",
      "set"
    ]);

    export type TkParsedType = keyof typeof TkParsedType;
    export type InferPromiseWrappedType<T> = T extends Promise<infer U> ? U : T;
    export const getParsedType = (data: unknown) => {
      const t = typeof data;
      switch (t) {
        case "undefined":
          return TkParsedType.undefined;
        case "string":
          return TkParsedType.string;

        case "number":
          return typeof data === "number" && isNaN(data)
            ? TkParsedType.nan
            : TkParsedType.number;

        case "boolean":
          return TkParsedType.boolean;

        case "function":
          return TkParsedType.function;

        case "bigint":
          return TkParsedType.bigint;

        case "object":
          if (Array.isArray(data)) {
            return TkParsedType.array;
          }
          if (data === null) {
            return TkParsedType.null;
          }
          if (
            (
              data as ReturnType<
                InferPromiseWrappedType<Promise<Awaited<typeof data>>["then"]>
              >
            ).then &&
            typeof (
              data as ReturnType<
                InferPromiseWrappedType<Promise<Awaited<typeof data>>["then"]>
              >
            ).then === "function" &&
            (
              data as ReturnType<
                InferPromiseWrappedType<Promise<Awaited<typeof data>>["catch"]>
              >
            ).catch &&
            typeof (
              data as ReturnType<
                InferPromiseWrappedType<Promise<Awaited<typeof data>>["catch"]>
              >
            ).catch === "function"
          ) {
            return TkParsedType.promise;
          }
          if (typeof Map !== "undefined" && data instanceof Map) {
            return TkParsedType.map;
          }
          if (typeof Set !== "undefined" && data instanceof Set) {
            return TkParsedType.set;
          }
          if (typeof Date !== "undefined" && data instanceof Date) {
            return TkParsedType.date;
          }
          return TkParsedType.object;

        default:
          return TkParsedType.unknown;
      }
    };
    export class SetUtil<T = any extends infer U ? U : any> {
      /**
       * Creates a set that contains those elements of arrayOne that are also in arrayTwo.
       * @param arrayOne
       * @param arrayTwo
       */
      constructor(private arrayOne: T[], private arrayTwo: T[]) {
        arrayOne = this.arrayOne;
        arrayTwo = this.arrayTwo;
      }
      intersection<T>(arrayOne: T[], arrayTwo: T[]): Set<T> {
        return new Set([...arrayOne].filter(value => arrayTwo.includes(value)));
      }

      /**
       * Creates a set that contains those elements of arrayOne that are not in arrayTwo
       * @param arrayOne
       * @param arrayTwo
       */
      difference<T>(arrayOne: T[], arrayTwo: T[]): Set<T> {
        const difference = new Set(arrayOne);

        for (const value of arrayTwo) {
          difference.delete(value);
        }

        return difference as Set<T>;
      }
    }
  }
  export module TSX {
    export type ExtractAttributeElementTandem<T> =
      T extends globalThis.React.DetailedHTMLProps<infer U, Element> ? U : T;

    export type AttributeElementMap = {
      [P in keyof globalThis.JSX.IntrinsicElements]: ExtractAttributeElementTandem<
        globalThis.JSX.IntrinsicElements[P]
      >;
    };

    export type ExtractOnlyElement<T> =
      T extends globalThis.React.DetailedHTMLProps<
        globalThis.React.HTMLAttributes<infer U>,
        infer U
      >
        ? U
        : T;

    export type ElementMap = {
      [P in keyof globalThis.JSX.IntrinsicElements]: ExtractOnlyElement<
        globalThis.JSX.IntrinsicElements[P]
      >;
    };

    export type DomAttributeElementMap = {
      [P in keyof globalThis.JSX.IntrinsicElements]: globalThis.React.DOMAttributes<
        ExtractOnlyElement<globalThis.JSX.IntrinsicElements[P]>
      >;
    };

    export type ModifierClicks<
      T extends keyof globalThis.React.MouseEvent<Element, MouseEvent>
    > = {
      [P in T]: globalThis.React.MouseEvent<Element, MouseEvent>[P];
    };

    export const event = (
      props: ModifierClicks<
        keyof globalThis.React.MouseEvent<Element, MouseEvent>
      >
    ) => props;

    export type RecursiveOptional<T> = {
      [P in keyof T]?: RecursiveOptional<T[P]>;
    };

    export type RecursiveRequired<T> = {
      [P in keyof T]-?: RecursiveRequired<T[P]>;
    };

    export type OmitRecursiveOptionalRecursionAgent<T> =
      T extends RecursiveOptional<infer U> ? U : T;

    export type ReactMapped = {
      [P in keyof AttributeElementMap]: AttributeElementMap[P] &
        DomAttributeElementMap[P];
    };

    export type JSXSelect<T extends keyof ReactMapped = keyof ReactMapped> = {
      [P in keyof ReactMapped[T]]: ReactMapped[T][P];
    };

    export type JSXPickOneWorkup<
      T extends ReactMapped,
      Keys extends keyof T = keyof T
    > = Pick<T, Exclude<keyof T, Keys>>;
    export type InferPickedType<T> = T extends JSXPickOneWorkup<
      infer U,
      keyof (infer U)
    >
      ? U
      : T;

    export type JSXElementSelect<
      T extends keyof ElementMap = keyof ElementMap
    > = {
      [P in keyof ElementMap[T]]: ElementMap[T][P];
    };

    export type CreateElementMapped = {
      [P in keyof ReturnType<
        InstanceType<typeof globalThis.Document>["createElement"]
      >]: ReturnType<
        InstanceType<typeof globalThis.Document>["createElement"]
      >[P];
    };

    export const createTargetReactElement = <T extends keyof ReactMapped>(
      props: JSXSelect<T>,
      type: T,
      children: Array<globalThis.React.ReactNode>
    ) => ({ ...globalThis.React.createElement(`${type}`, props, ...children) });

    export const createReactElementHelper =
      <
        T extends keyof globalThis.JSX.IntrinsicElements = keyof globalThis.JSX.IntrinsicElements
      >(
        type: T
      ) =>
      (props: JSXSelect<T>) =>
        createTargetReactElement<T>(
          props,
          type,
          Array.of<globalThis.React.ReactNode>()
        );

    export type DocumentCreateElementKeyTypeTandem<
      T extends keyof globalThis.HTMLElementTagNameMap
    > = {
      [P in keyof globalThis.HTMLElementTagNameMap[T]]: globalThis.HTMLElementTagNameMap[T][P];
    };

    export const createNativeElement = <
      T extends keyof globalThis.HTMLElementTagNameMap = keyof globalThis.HTMLElementTagNameMap
    >(
      type: T
    ) => document.querySelector<T>(type);
  }
}

export default UI;
