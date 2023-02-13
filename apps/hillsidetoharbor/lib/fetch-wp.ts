const API_URL =
  process.env.WORDPRESS_API_URL ?? "https://www.hillsidetoharbor.biz/graphql";

async function fetchAPI<T extends any = any>(
  query: string,
  { variables }: Record<string, unknown> = {}
): Promise<T> {
  const headers = {
    "Content-Type": "application/json",
    Authorization: `Bearer ${process.env.WORDPRESS_AUTH_REFRESH_TOKEN}`
  };
  const res = await fetch(API_URL, {
    headers,
    method: "POST",
    body: JSON.stringify({
      query,
      variables
    })
  });

  const json = await res.json();
  if (json.errors) {
    console.error(json.errors);
    throw new Error(`WPGraphQL Fetcher Failed`);
  }
  return json.data;
}

export const getHomePageData = async ({
  idType,
  id
}: {
  idType: "URI" | "ID" | "DATABASE_ID";
  id: string | number;
}) => {
  const data = await fetchAPI(
    `
    fragment MediaItemFragment on MediaItem {
        __typename
        altText
        uri
        description
        title
        slug
        mediaDetails {
          width
          height
          __typename
        }
      }
      
      fragment SubHeroFragment on Page_Hero_subHeroImages3 {
        __typename
        subHeroImageCta
        subHeroImageSubCta
      }
      
      fragment HeroFragment on Page_Hero {
        __typename
        fieldGroupName
        subCta
        cta
      }
      
      fragment PostTypeSeoFragment on PostTypeSEO {
        metaDesc
        readingTime
        metaKeywords
        __typename
        focuskw
        metaRobotsNofollow
      }
      
      fragment PageFragment on Page {
        title
        content
        previewRevisionId
        previewRevisionDatabaseId
        isPreview
        isFrontPage
        uri
        slug
        modifiedGmt
        databaseId
        id
      }
      
      query Home($id: ID!, $idType: PageIdType!) {
        page(idType: $idType, id: $id) {
              ...PageFragment
          seo {
            ...PostTypeSeoFragment
          }
          featuredImage {
            node {
              ...MediaItemFragment
            }
          }
          hero {
            ...HeroFragment
            subHeroImages3 {
              ...SubHeroFragment
              subHeroImage {
                ...MediaItemFragment
              }
            }
            heroImage {
              ...MediaItemFragment
            }
          }
        }
      }`,
      { variables: { id: id, idType: idType } }
  );
  return data;
};
