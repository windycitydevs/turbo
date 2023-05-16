import {
  PageIdType,
  type SubmitGfFormInput,
  type SubmitGfFormPayload
} from "@/gql/graphql";
import type { HomeProps } from "@/types/home-props";

const API_URL = process.env.WORDPRESS_API_URL ?? "";
type InputProps = {
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

/**
 * Example Input
 const input = {
  "input": {
    "id": "1",
    "clientMutationId": "geolocation info",
    "entryMeta": {
      "createdById": 1,
      "dateCreatedGmt": "2023-05-15",
      "ip": "127.0.0.1",
      "sourceUrl": "https://www.hillsidetoharbor.com/api/contact/route",
      "userAgent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:109.0) Gecko/20100101 Firefox/114.0"
    },
    "fieldValues": [
      {
        "id": 1,
        "nameValues": {
          "first": "Andrew",
          "last": "Ross"
        }
      },
      {
        "id": 2,
        "emailValues": {
          "value": "andrew@windycitydevs.io"
        }
      },
      {
        "id": 3,
        "value": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut vitae luctus mauris, id dictum mauris. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi pulvinar urna quis lobortis condimentum. Maecenas sit amet odio ultricies massa mollis consectetur a in dui. Phasellus auctor, augue vitae dignissim fringilla, diam urna sollicitudin elit, eu porttitor ipsum dolor ac justo. Nulla ornare tincidunt odio, eget aliquam ligula molestie quis. Curabitur et convallis neque. Fusce neque nisi, faucibus id urna sit amet, dictum feugiat elit. Nam accumsan velit tellus, vestibulum elementum eros eleifend et. Morbi interdum enim et nisi condimentum laoreet. Mauris viverra accumsan sapien, sed mollis felis placerat id.\n\nUt aliquam sed augue eget consequat. Phasellus nulla leo, ultrices ut tortor sed, efficitur imperdiet dui. Sed vel gravida ipsum. Suspendisse vitae imperdiet libero. Maecenas pharetra fermentum lectus non vulputate. Proin velit nulla, vehicula sit amet accumsan id, congue a enim. Nulla faucibus placerat velit, quis semper purus tempor sit amet. Proin velit nulla, pulvinar ac tellus a, tincidunt mollis justo. Morbi fermentum massa erat, vel condimentum augue dapibus at. Sed gravida mattis eros, vitae malesuada ae elementumeu."
      },
      {
        "id": 4,
        "value": "5635809987"
      }
    ],
    "saveAsDraft": false
  }
};
 */
export const QueryObject = {
  submitForm: `fragment SubmissionConfirmationFields on SubmissionConfirmation {
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
  }`,
  home: `
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

export const getContactFormSubmissionData = async (
  props: SubmitGfFormInput
) => {
  const data = await fetchAPI<SubmitGfFormPayload>("submitForm", {
    variables: { input: props }
  });
};
