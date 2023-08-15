/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
    "fragment AboutFragment on Page_About {\n  __typename\n  fieldGroupName\n  abouttextarea\n}": types.AboutFragmentFragmentDoc,
    "fragment AvatarFragment on Avatar {\n  __typename\n  width\n  height\n  default\n  foundAvatar\n  size\n  url\n  scheme\n  forceDefault\n}": types.AvatarFragmentFragmentDoc,
    "fragment HeroFragment on Page_Hero {\n  __typename\n  fieldGroupName\n  subCta\n  cta\n}": types.HeroFragmentFragmentDoc,
    "fragment LoginPayloadFragment on LoginPayload {\n  __typename\n  authToken\n  refreshToken\n  clientMutationId\n}": types.LoginPayloadFragmentFragmentDoc,
    "fragment MediaDetailsFragment on MediaDetails {\n  __typename\n  width\n  height\n}": types.MediaDetailsFragmentFragmentDoc,
    "fragment MediaItemFragment on MediaItem {\n  __typename\n  altText\n  uri\n  title\n  sourceUrl\n  databaseId\n  id\n  srcSet\n  slug\n}": types.MediaItemFragmentFragmentDoc,
    "fragment NodeWithFeaturedImageToMediaItemConnectionEdgeFragment on NodeWithFeaturedImageToMediaItemConnectionEdge {\n  __typename\n  cursor\n}": types.NodeWithFeaturedImageToMediaItemConnectionEdgeFragmentFragmentDoc,
    "fragment PageFragment on Page {\n  __typename\n  title\n  content\n  previewRevisionId\n  previewRevisionDatabaseId\n  isPreview\n  isFrontPage\n  uri\n  slug\n  guid\n  modifiedGmt\n  guid\n  databaseId\n  id\n}": types.PageFragmentFragmentDoc,
    "fragment PostTypeSeoFragment on PostTypeSEO {\n  __typename\n  metaDesc\n  readingTime\n  metaKeywords\n  focuskw\n  metaRobotsNofollow\n}": types.PostTypeSeoFragmentFragmentDoc,
    "fragment SubHeroFragment on Page_Hero_subHeroImages3 {\n  __typename\n  subHeroImageCta\n  subHeroImageSubCta\n  fieldGroupName\n}": types.SubHeroFragmentFragmentDoc,
    "fragment UserFragment on User {\n  __typename\n  capKey\n  databaseId\n  id\n  email\n  username\n  url\n  uri\n  slug\n  name\n  lastName\n  nicename\n  nickname\n  jwtUserSecret\n  jwtAuthExpiration\n  jwtRefreshToken\n  isJwtAuthSecretRevoked\n  description\n}": types.UserFragmentFragmentDoc,
    "mutation Login($input: LoginInput!) {\n  login(input: $input) {\n    ...LoginPayloadFragment\n    user {\n      ...UserFragment\n      avatar {\n        ...AvatarFragment\n      }\n    }\n  }\n}": types.LoginDocument,
    "fragment SubmissionConfirmationFields on SubmissionConfirmation {\n  message\n  pageId\n  queryString\n  type\n  url\n  __typename\n}\n\nfragment GfEntryToFormFieldConnectionEdgeFields on GfEntryToFormFieldConnectionEdge {\n  cursor\n  __typename\n}\n\nfragment GfEntryFields on GfEntry {\n  dateCreated\n  userAgent\n  __typename\n  ip\n  formId\n  isSubmitted\n  sourceUrl\n  id\n  createdById\n  createdByDatabaseId\n  dateCreatedGmt\n}\n\nfragment FormFieldFields on FormField {\n  databaseId\n  displayOnly\n  inputType\n  layoutGridColumnSpan\n  layoutSpacerGridColumnSpan\n  pageNumber\n  type\n  visibility\n  __typename\n}\n\nfragment GfFormFields on GfForm {\n  cssClass\n  databaseId\n  dateCreated\n  description\n  title\n  nextFieldId\n  __typename\n}\n\nfragment FieldErrorFields on FieldError {\n  id\n  message\n  __typename\n}\n\nmutation ContactSubmission($input: SubmitGfFormInput!) {\n  submitGfForm(input: $input) {\n    clientMutationId\n    confirmation {\n      ...SubmissionConfirmationFields\n    }\n    errors {\n      ...FieldErrorFields\n    }\n    __typename\n    entry {\n      ...GfEntryFields\n      form {\n        ...GfFormFields\n      }\n      formFields {\n        __typename\n        edges {\n          ...GfEntryToFormFieldConnectionEdgeFields\n          node {\n            ...FormFieldFields\n          }\n        }\n      }\n    }\n  }\n}": types.SubmissionConfirmationFieldsFragmentDoc,
    "query Home($id: ID!, $idType: PageIdType!) {\n  page(idType: $idType, id: $id) {\n    ...PageFragment\n    seo {\n      ...PostTypeSeoFragment\n    }\n    featuredImage {\n      ...NodeWithFeaturedImageToMediaItemConnectionEdgeFragment\n      node {\n        ...MediaItemFragment\n        mediaDetails {\n          ...MediaDetailsFragment\n        }\n      }\n    }\n    hero {\n      ...HeroFragment\n      subHeroImages3 {\n        ...SubHeroFragment\n        subHeroImage {\n          ...MediaItemFragment\n          mediaDetails {\n            ...MediaDetailsFragment\n          }\n        }\n      }\n      heroImage {\n        ...MediaItemFragment\n        mediaDetails {\n          ...MediaDetailsFragment\n        }\n      }\n    }\n    about {\n      ...AboutFragment\n      aboutimage {\n        ...MediaItemFragment\n        mediaDetails {\n          ...MediaDetailsFragment\n        }\n      }\n    }\n  }\n}": types.HomeDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = graphql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function graphql(source: string): unknown;

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "fragment AboutFragment on Page_About {\n  __typename\n  fieldGroupName\n  abouttextarea\n}"): (typeof documents)["fragment AboutFragment on Page_About {\n  __typename\n  fieldGroupName\n  abouttextarea\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "fragment AvatarFragment on Avatar {\n  __typename\n  width\n  height\n  default\n  foundAvatar\n  size\n  url\n  scheme\n  forceDefault\n}"): (typeof documents)["fragment AvatarFragment on Avatar {\n  __typename\n  width\n  height\n  default\n  foundAvatar\n  size\n  url\n  scheme\n  forceDefault\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "fragment HeroFragment on Page_Hero {\n  __typename\n  fieldGroupName\n  subCta\n  cta\n}"): (typeof documents)["fragment HeroFragment on Page_Hero {\n  __typename\n  fieldGroupName\n  subCta\n  cta\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "fragment LoginPayloadFragment on LoginPayload {\n  __typename\n  authToken\n  refreshToken\n  clientMutationId\n}"): (typeof documents)["fragment LoginPayloadFragment on LoginPayload {\n  __typename\n  authToken\n  refreshToken\n  clientMutationId\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "fragment MediaDetailsFragment on MediaDetails {\n  __typename\n  width\n  height\n}"): (typeof documents)["fragment MediaDetailsFragment on MediaDetails {\n  __typename\n  width\n  height\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "fragment MediaItemFragment on MediaItem {\n  __typename\n  altText\n  uri\n  title\n  sourceUrl\n  databaseId\n  id\n  srcSet\n  slug\n}"): (typeof documents)["fragment MediaItemFragment on MediaItem {\n  __typename\n  altText\n  uri\n  title\n  sourceUrl\n  databaseId\n  id\n  srcSet\n  slug\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "fragment NodeWithFeaturedImageToMediaItemConnectionEdgeFragment on NodeWithFeaturedImageToMediaItemConnectionEdge {\n  __typename\n  cursor\n}"): (typeof documents)["fragment NodeWithFeaturedImageToMediaItemConnectionEdgeFragment on NodeWithFeaturedImageToMediaItemConnectionEdge {\n  __typename\n  cursor\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "fragment PageFragment on Page {\n  __typename\n  title\n  content\n  previewRevisionId\n  previewRevisionDatabaseId\n  isPreview\n  isFrontPage\n  uri\n  slug\n  guid\n  modifiedGmt\n  guid\n  databaseId\n  id\n}"): (typeof documents)["fragment PageFragment on Page {\n  __typename\n  title\n  content\n  previewRevisionId\n  previewRevisionDatabaseId\n  isPreview\n  isFrontPage\n  uri\n  slug\n  guid\n  modifiedGmt\n  guid\n  databaseId\n  id\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "fragment PostTypeSeoFragment on PostTypeSEO {\n  __typename\n  metaDesc\n  readingTime\n  metaKeywords\n  focuskw\n  metaRobotsNofollow\n}"): (typeof documents)["fragment PostTypeSeoFragment on PostTypeSEO {\n  __typename\n  metaDesc\n  readingTime\n  metaKeywords\n  focuskw\n  metaRobotsNofollow\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "fragment SubHeroFragment on Page_Hero_subHeroImages3 {\n  __typename\n  subHeroImageCta\n  subHeroImageSubCta\n  fieldGroupName\n}"): (typeof documents)["fragment SubHeroFragment on Page_Hero_subHeroImages3 {\n  __typename\n  subHeroImageCta\n  subHeroImageSubCta\n  fieldGroupName\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "fragment UserFragment on User {\n  __typename\n  capKey\n  databaseId\n  id\n  email\n  username\n  url\n  uri\n  slug\n  name\n  lastName\n  nicename\n  nickname\n  jwtUserSecret\n  jwtAuthExpiration\n  jwtRefreshToken\n  isJwtAuthSecretRevoked\n  description\n}"): (typeof documents)["fragment UserFragment on User {\n  __typename\n  capKey\n  databaseId\n  id\n  email\n  username\n  url\n  uri\n  slug\n  name\n  lastName\n  nicename\n  nickname\n  jwtUserSecret\n  jwtAuthExpiration\n  jwtRefreshToken\n  isJwtAuthSecretRevoked\n  description\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation Login($input: LoginInput!) {\n  login(input: $input) {\n    ...LoginPayloadFragment\n    user {\n      ...UserFragment\n      avatar {\n        ...AvatarFragment\n      }\n    }\n  }\n}"): (typeof documents)["mutation Login($input: LoginInput!) {\n  login(input: $input) {\n    ...LoginPayloadFragment\n    user {\n      ...UserFragment\n      avatar {\n        ...AvatarFragment\n      }\n    }\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "fragment SubmissionConfirmationFields on SubmissionConfirmation {\n  message\n  pageId\n  queryString\n  type\n  url\n  __typename\n}\n\nfragment GfEntryToFormFieldConnectionEdgeFields on GfEntryToFormFieldConnectionEdge {\n  cursor\n  __typename\n}\n\nfragment GfEntryFields on GfEntry {\n  dateCreated\n  userAgent\n  __typename\n  ip\n  formId\n  isSubmitted\n  sourceUrl\n  id\n  createdById\n  createdByDatabaseId\n  dateCreatedGmt\n}\n\nfragment FormFieldFields on FormField {\n  databaseId\n  displayOnly\n  inputType\n  layoutGridColumnSpan\n  layoutSpacerGridColumnSpan\n  pageNumber\n  type\n  visibility\n  __typename\n}\n\nfragment GfFormFields on GfForm {\n  cssClass\n  databaseId\n  dateCreated\n  description\n  title\n  nextFieldId\n  __typename\n}\n\nfragment FieldErrorFields on FieldError {\n  id\n  message\n  __typename\n}\n\nmutation ContactSubmission($input: SubmitGfFormInput!) {\n  submitGfForm(input: $input) {\n    clientMutationId\n    confirmation {\n      ...SubmissionConfirmationFields\n    }\n    errors {\n      ...FieldErrorFields\n    }\n    __typename\n    entry {\n      ...GfEntryFields\n      form {\n        ...GfFormFields\n      }\n      formFields {\n        __typename\n        edges {\n          ...GfEntryToFormFieldConnectionEdgeFields\n          node {\n            ...FormFieldFields\n          }\n        }\n      }\n    }\n  }\n}"): (typeof documents)["fragment SubmissionConfirmationFields on SubmissionConfirmation {\n  message\n  pageId\n  queryString\n  type\n  url\n  __typename\n}\n\nfragment GfEntryToFormFieldConnectionEdgeFields on GfEntryToFormFieldConnectionEdge {\n  cursor\n  __typename\n}\n\nfragment GfEntryFields on GfEntry {\n  dateCreated\n  userAgent\n  __typename\n  ip\n  formId\n  isSubmitted\n  sourceUrl\n  id\n  createdById\n  createdByDatabaseId\n  dateCreatedGmt\n}\n\nfragment FormFieldFields on FormField {\n  databaseId\n  displayOnly\n  inputType\n  layoutGridColumnSpan\n  layoutSpacerGridColumnSpan\n  pageNumber\n  type\n  visibility\n  __typename\n}\n\nfragment GfFormFields on GfForm {\n  cssClass\n  databaseId\n  dateCreated\n  description\n  title\n  nextFieldId\n  __typename\n}\n\nfragment FieldErrorFields on FieldError {\n  id\n  message\n  __typename\n}\n\nmutation ContactSubmission($input: SubmitGfFormInput!) {\n  submitGfForm(input: $input) {\n    clientMutationId\n    confirmation {\n      ...SubmissionConfirmationFields\n    }\n    errors {\n      ...FieldErrorFields\n    }\n    __typename\n    entry {\n      ...GfEntryFields\n      form {\n        ...GfFormFields\n      }\n      formFields {\n        __typename\n        edges {\n          ...GfEntryToFormFieldConnectionEdgeFields\n          node {\n            ...FormFieldFields\n          }\n        }\n      }\n    }\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query Home($id: ID!, $idType: PageIdType!) {\n  page(idType: $idType, id: $id) {\n    ...PageFragment\n    seo {\n      ...PostTypeSeoFragment\n    }\n    featuredImage {\n      ...NodeWithFeaturedImageToMediaItemConnectionEdgeFragment\n      node {\n        ...MediaItemFragment\n        mediaDetails {\n          ...MediaDetailsFragment\n        }\n      }\n    }\n    hero {\n      ...HeroFragment\n      subHeroImages3 {\n        ...SubHeroFragment\n        subHeroImage {\n          ...MediaItemFragment\n          mediaDetails {\n            ...MediaDetailsFragment\n          }\n        }\n      }\n      heroImage {\n        ...MediaItemFragment\n        mediaDetails {\n          ...MediaDetailsFragment\n        }\n      }\n    }\n    about {\n      ...AboutFragment\n      aboutimage {\n        ...MediaItemFragment\n        mediaDetails {\n          ...MediaDetailsFragment\n        }\n      }\n    }\n  }\n}"): (typeof documents)["query Home($id: ID!, $idType: PageIdType!) {\n  page(idType: $idType, id: $id) {\n    ...PageFragment\n    seo {\n      ...PostTypeSeoFragment\n    }\n    featuredImage {\n      ...NodeWithFeaturedImageToMediaItemConnectionEdgeFragment\n      node {\n        ...MediaItemFragment\n        mediaDetails {\n          ...MediaDetailsFragment\n        }\n      }\n    }\n    hero {\n      ...HeroFragment\n      subHeroImages3 {\n        ...SubHeroFragment\n        subHeroImage {\n          ...MediaItemFragment\n          mediaDetails {\n            ...MediaDetailsFragment\n          }\n        }\n      }\n      heroImage {\n        ...MediaItemFragment\n        mediaDetails {\n          ...MediaDetailsFragment\n        }\n      }\n    }\n    about {\n      ...AboutFragment\n      aboutimage {\n        ...MediaItemFragment\n        mediaDetails {\n          ...MediaDetailsFragment\n        }\n      }\n    }\n  }\n}"];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;