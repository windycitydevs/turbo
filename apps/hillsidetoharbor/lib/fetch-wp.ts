import { PageIdType } from "@/gql/graphql";
import type { HomeProps } from "@/types/home-props";

const API_URL =
  process.env.WORDPRESS_API_URL ?? "";

export const QueryObject = {
  home: `fragment MediaDetailsFragment on MediaDetails {
    __typename
    width
    height
  }
  
  
  
  fragment MediaItemFragment on MediaItem {
    __typename
    altText
    uri
    title
    sourceUrl
    databaseId
    id
    srcSet
    slug
  }
  
  fragment SubHeroFragment on Page_Hero_subHeroImages3 {
    __typename
    subHeroImageCta
    subHeroImageSubCta
    fieldGroupName
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
  
  fragment NodeWithFeaturedImageToMediaItemConnectionEdgeFragment on NodeWithFeaturedImageToMediaItemConnectionEdge {
    __typename
    cursor
  }
  
  fragment PageFragment on Page {
    __typename
    title
    content
    previewRevisionId
    previewRevisionDatabaseId
    isPreview
    isFrontPage
    uri
    slug
    guid
    modifiedGmt
    guid
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
        ...NodeWithFeaturedImageToMediaItemConnectionEdgeFragment
        node {
          ...MediaItemFragment
          mediaDetails {
            ...MediaDetailsFragment
          }
        }
      }
      hero {
        ...HeroFragment
        subHeroImages3 {
          ...SubHeroFragment
          subHeroImage {
            ...MediaItemFragment
            mediaDetails {
              ...MediaDetailsFragment
            }
          }
        }
        heroImage {
          ...MediaItemFragment
          mediaDetails {
            ...MediaDetailsFragment
          }
        }
      }
    }
  }`
} as const;

async function fetchAPI<T extends any = any>(
  query: keyof typeof QueryObject,
  { variables }: Record<string, unknown> = {}
): Promise<T> {
  const headers = {
    "Content-Type": "application/json",
    Authorization: `Bearer ${process.env.WORDPRESS_AUTH_REFRESH_TOKEN ?? ""}`
  };
  const res = await fetch(API_URL, {
    headers,
    method: "POST",
    body: JSON.stringify({
      query: QueryObject[query],
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
  idType: keyof typeof PageIdType;
  id: string | number;
}) => {
  const data = await fetchAPI<HomeProps>("home", {
    variables: { id: id, idType: PageIdType[idType] }
  });
  return data;
};
