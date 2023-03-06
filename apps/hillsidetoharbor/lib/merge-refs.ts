import type { LegacyRef, MutableRefObject, RefCallback } from "react";

export type InferNestedTypeInArrayOfRefs<T> = T extends Array<
  MutableRefObject<infer U> | LegacyRef<infer U>
>
  ? U
  : T;
export default function mergeRefs<T = unknown>(
  refs: (MutableRefObject<T> | LegacyRef<T>)[]
): RefCallback<T> {
  return value => {
    refs.forEach(ref => {
      if (typeof ref === "function") {
        ref(value);
      } else if (ref != null) {
        (ref as MutableRefObject<T | null>).current = value;
      }
    });
  };
}
