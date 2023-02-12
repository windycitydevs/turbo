export type JsonValueScalar = string | boolean | number;

export type JsonEnumerable<T> = T | T[];

export type JsonValue =
  | JsonEnumerable<JsonValueScalar>
  | { [key: string]: JsonValue };

export type JsonReplacer = (
  _: string,
  value: JsonValue
) => JsonValue | undefined;

export interface JsonLdProps {
  type?: string;
  scriptId?: string;
  "@id"?: string;
  [key: string]: any;
}

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

/**
 *
 *
 *
 * - **About:**
 *
 * - the scaffold below is returned by the ldjson helper
 * and can be passed to dangerouslySetHtml as a prop
 * ---
 *
 * ```ts
const JobPostingMetaData = ({
  rawResults
}: {
  rawResults: GetUniqueExtended;
}) => {
  const metaBaseDescription = (i: number) =>
    rawResults.hits[i]
      ? positionDescriptionFormatter(rawResults.hits[i].description).toString()
      : baseDescription(rawResults.hits[i]).toString();

  const janFirst2023Unix = 1672552886861;
  return (
    <>
      {rawResults.hits ? (
        rawResults.hits.map((post, i) => (
          <Script
            key={post.slug.current}
            type='application/ld+json'
            id={
              typeof window === "undefined"
                ? `https://hcms-takeda-jobs-seven.vercel.app/search-jobs/${post.slug?.current}#JobPosting`
                : `https://hcms-takeda-jobs-seven.vercel.app/search-jobs/${post.referenceNumber}`
            }
            dangerouslySetInnerHTML={{
              __html: JSON.stringify(
                {
                  "@context": "https://schema.org/",
                  "@type": "JobPosting",
                  title: `${
                    post ? post?.title.substring(0, 60) : config.title
                  }`,
                  description: metaBaseDescription(i) ?? "",
                  identifier: {
                    "@type": "PropertyValue",
                    name: post
                      ? post.supervisoryOrganization
                      : "Takeda | 武田薬品工業株式会社",
                    value: post?.objectID ?? Date.now().toString(),
                  },
                  datePosted: `${new Date(
                    post ? post.pubDateUnix : Date.now()
                  ).toISOString()}`,
                  validThrough: `${
                    post
                      ? new Date(
                          janFirst2023Unix - post.pubDateUnix + post.pubDateUnix
                        ).toISOString()
                      : new Date(janFirst2023Unix).toISOString()
                  }`,
                  employmentType: post
                    ? post.timeType.includes("Full")
                      ? "FULL_TIME"
                      : "PART_TIME"
                    : "CONTRACTOR",
                  hiringOrganization: {
                    "@type": "Organization",
                    name: "Takeda | 武田薬品工業株式会社",
                    sameAs: `https://hcms-takeda-jobs-seven.vercel.app/search-jobs/${post.slug?.current}#JobPosting`,
                    logo: "https://hcms-takeda-jobs-seven.vercel.app/assets/OG-Takeda.png"
                  },
                  applicantLocationRequirements: {
                    "@type": "Country",
                    name:
                      post && post.locationsCount.valueOf() < 2
                        ? post.postingLocation[0].country
                        : post && post.primaryLocation.split(/([,])/).length > 1
                        ? post?.primaryLocation.split(/([,])/gim).reverse()[0]
                        : "USA"
                  },
                  jobLocation: {
                    "@type": "Place",
                    geo: {
                      "@type": "GeoCoordinates",
                      latitude: post?.postingLocation[0].geoPoint.lat ?? 0,
                      longitude: post?.postingLocation[0].geoPoint.lng ?? 0
                    },
                    address: post
                      ? {
                          "@type": "PostalAddress",
                          addressCountry:
                            post.postingLocation[0].country ===
                            "United States of America"
                              ? "United States"
                              : post.postingLocation[0].country ?? "",
                          addressLocality: post.postingLocation[0].city,
                          addressRegion: post.postingLocation[0].region,
                          postalCode: post?.postingLocation[0].postalCode,
                          streetAddress: `${post?.postingLocation[0].geoPoint.lat}, ${post?.postingLocation[0].geoPoint.lng}`
                        }
                      : {
                          "@type": "PostalAddress",
                          addressCountry: "United States",
                          addressLocality: "Cambridge",
                          addressRegion: "MA",
                          postalCode: "02142",
                          streetAddress: "650 E Kendall Street"
                        }
                  }
                },
                safeJsonLdReplacer,
                2
              )
            }}
          />
        ))
      ) : (
        <></>
      )}
    </>
  );
};

export default JobPostingMetaData;
 * ```
 *
 * - ***Example:***
 *
 * @url (https://github.com/oneTakeda/HCMS-TakedaJobs/blob/dev/apps/vercel/src/components/Rich/JobPosting/job-posting.tsx)
 *
 * */

export const safeJsonLdReplacer: JsonReplacer = (() => {
  return (_: string, value: JsonValue): JsonValue | undefined => {
    switch (typeof value) {
      case "object":
        /* Omit null values. */
        if (value === null) {
          return undefined;
        }
        return value; /* recursively calls replacer via JSON.stringify */
      case "number":
      case "boolean":
      case "bigint":
        return value; /* These values are not risky. */
      case "string":
        return value.replace(ESCAPE_REGEX, ESCAPE_REPLACER);
      default: {
        /* We shouldn't expect other types. */
        isNever(value);

        /* JSON.stringify will remove this element. */
        return undefined;
      }
    }
  };
})();

export function ExcludeJsonLdField<JsonLdProps, Key extends keyof JsonLdProps>(
  jsonLd: JsonLdProps,
  ...keys: Key[]
): Omit<JsonLdProps, Key> {
  for (const key of keys) {
    delete jsonLd[key];
  }
  return jsonLd;
}

// TODO https://github.com/oneTakeda/HCMS-TakedaJobs/blob/dev/apps/vercel/src/components/Rich/JobPosting/job-posting.tsx#L10
// Abstract out this Script component using safeJsonLdReplacer for consumption 🐜

export function toJson(type: string, jsonld: JsonLdProps) {
  const { ["@id"]: id = undefined } = jsonld;
  const updated = {
    ...(id ? { ["@id"]: id } : {}),
    ...jsonld
  };
  const deleteIdField = ExcludeJsonLdField(updated, "@id");

  return {
    __html: JSON.stringify(
      {
        "@context": "https://schema.org/",
        "@type": type,
        ...deleteIdField
      },
      safeJsonLdReplacer,
      2
    )
  };
}

export default safeJsonLdReplacer;
