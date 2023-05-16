export type JsonValueScalar = string | boolean | number;
export type JsonValue =
  | JsonValueScalar
  | Array<JsonValue>
  | { [key: string]: JsonValue };
export type JsonReplacer = (
  _: string,
  value: JsonValue
) => JsonValue | undefined;

export const ESCAPE_ENTITIES: Readonly<{
  "&": string;
  "<": string;
  ">": string;
  '"': string;
  "'": string;
}> = Object.freeze({
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  '"': "&quot;",
  "'": "&apos;"
});

export const ESCAPE_REGEX = new RegExp(
  `[${Object.keys(ESCAPE_ENTITIES).join("")}]`,
  "g"
);
export const ESCAPE_REPLACER = (t: string): string =>
  ESCAPE_ENTITIES[t as keyof typeof ESCAPE_ENTITIES];

export function isNever(_: never): void {}

export const safeJsonLdReplacer: JsonReplacer = (() => {
  return (_: string, value: JsonValue): JsonValue | undefined => {
    switch (typeof value) {
      case "object":
        // Omit null values.
        if (value === null) {
          return undefined;
        }
        return value; // recursively calls replacer via JSON.stringify
      case "number":
      case "boolean":
      case "bigint":
        return value; // These values are not risky.
      case "string":
        return value.replace(ESCAPE_REGEX, ESCAPE_REPLACER);
      default: {
        // We shouldn't expect other types.
        isNever(value);

        // JSON.stringify will remove this element.
        return undefined;
      }
    }
  };
})();
export interface JsonLdProps {
  type?: string;
  scriptId?: string;
  "@id"?: string;
  [key: string]: any;
}

export function ExcludeJsonLdField<JsonLdProps, Key extends keyof JsonLdProps>(
  jsonLd: JsonLdProps,
  ...keys: Key[]
): Omit<JsonLdProps, Key> {
  for (const key of keys) {
    delete jsonLd[key];
  }
  return jsonLd;
}

export const toJson = (type: string, jsonld: JsonLdProps) => {
  const { ["@id"]: id = undefined } = jsonld;
  const updated = {
    ...(id ? { ["@id"]: id } : {}),
    ...jsonld
  };
  const deleteIdField = ExcludeJsonLdField(updated, "@id");

  return {
    __html: JSON.stringify(
      {
        "@context": "https://schema.org",
        "@type": type,
        ...deleteIdField
      },
      safeJsonLdReplacer,
      2
    )
  };
};

export default toJson;
