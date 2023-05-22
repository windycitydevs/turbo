import {
  PageIdType,
  type SubmitGfFormInput,
  type SubmitGfFormPayload
} from "@/gql/graphql";
import type { HomeProps } from "@/types/home-props";

const API_URL = process.env.WORDPRESS_API_URL ?? "";
export type InputProps = {
  input: {
    id: string;
    clientMutationId: string;
    entryMeta: {
      createdById: number;
      dateCreatedGmt: string;
      ip: string;
      sourceUrl: string;
      userAgent: string;
    };
    fieldValues: (
      | {
          id: number;
          nameValues: {
            first: string;
            last: string;
          };
          emailValues?: undefined;
          value?: undefined;
        }
      | {
          id: number;
          emailValues: {
            value: string;
          };
          nameValues?: undefined;
          value?: undefined;
        }
      | {
          id: number;
          value: string;
          nameValues?: undefined;
          emailValues?: undefined;
        }
    )[];
    saveAsDraft: boolean;
  };
};

export const QueryObject = {
  submitForm: /* GraphQL */ `
    fragment SubmissionConfirmationFields on SubmissionConfirmation {
      message
      pageId
      queryString
      type
      url
      __typename
    }

    fragment GfEntryToFormFieldConnectionEdgeFields on GfEntryToFormFieldConnectionEdge {
      cursor
      __typename
    }

    fragment GfEntryFields on GfEntry {
      dateCreated
      userAgent
      __typename
      ip
      formId
      isSubmitted
      sourceUrl
      id
      createdById
      createdByDatabaseId
      dateCreatedGmt
    }

    fragment FormFieldFields on FormField {
      databaseId
      displayOnly
      inputType
      layoutGridColumnSpan
      layoutSpacerGridColumnSpan
      pageNumber
      type
      visibility
      __typename
    }

    fragment GfFormFields on GfForm {
      cssClass
      databaseId
      dateCreated
      description
      title
      nextFieldId
      __typename
    }

    fragment FieldErrorFields on FieldError {
      id
      message
      __typename
    }

    mutation ContactSubmission($input: SubmitGfFormInput!) {
      submitGfForm(input: $input) {
        clientMutationId
        confirmation {
          ...SubmissionConfirmationFields
        }
        errors {
          ...FieldErrorFields
        }
        __typename
        entry {
          ...GfEntryFields
          form {
            ...GfFormFields
          }
          formFields {
            __typename
            edges {
              ...GfEntryToFormFieldConnectionEdgeFields
              node {
                ...FormFieldFields
              }
            }
          }
        }
      }
    }
  `,
  home: /* GraphQL */ `
    fragment AboutFragment on Page_About {
      __typename
      fieldGroupName
      abouttextarea
    }

    fragment MediaDetailsFragment on MediaDetails {
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
        about {
          ...AboutFragment
          aboutimage {
            ...MediaItemFragment
            mediaDetails {
              ...MediaDetailsFragment
            }
          }
        }
      }
    }
  `
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

export const getContactFormSubmissionData = async (
  props: SubmitGfFormInput
) => {
  const data = await fetchAPI<SubmitGfFormPayload>("submitForm", {
    variables: { input: props }
  });
};
