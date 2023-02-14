import { SafeNumber } from "./wp-types";

export type MediaDetailsProps = {
  __typename: "MediaDetails";
  width: SafeNumber;
  height: SafeNumber;
};

export type MediaItemProps = {
  __typename: "MediaItem";
  altText: string;
  uri: string;
  title: string;
  sourceUrl: string;
  databaseId: number;
  id: string;
  srcSet: string;
  slug: string;
  mediaDetails: MediaDetailsProps;
};

export type SeoProps = {
  __typename: "PostTypeSEO";
  metaDesc: string;
  readingTime: number;
  metaKeywords: string;
  focuskw: string;
  metaRobotsNofollow: string;
};

export type SubHeroImageCPTUIProps = {
  __typename: "Page_Hero_subHeroImages3";
  subHeroImageCta: string;
  subHeroImageSubCta: string;
  fieldGroupName: string;
  subHeroImage: MediaItemProps;
};

export type FeaturedImageProps = {
  __typename: "NodeWithFeaturedImageToMediaItemConnectionEdge";
  cursor: string;
  node: MediaItemProps;
};

export type HeroCPTUIProps = {
  __typename: "Page_Hero";
  fieldGroupName: string;
  subCta: string;
  cta: string;
  subHeroImages3: Array<SubHeroImageCPTUIProps>;
  heroImage: MediaItemProps;
};

export type HomePageProps = {
  __typename: "Page";
  title: string;
  content: string | null;
  previewRevisionId: string | null;
  previewRevisionDatabaseId: null;
  isPreview: boolean;
  isFrontPage: boolean;
  uri: string;
  slug: string;
  guid: string;
  modifiedGmt: string;
  databaseId: number;
  id: string;
  seo: SeoProps;
  featuredImage: FeaturedImageProps;
  hero: HeroCPTUIProps;
};

export type HomeProps = {
  page: HomePageProps;
};

export type HomePagePropsMappedLoose = {
  [P in keyof HomeProps["page"]]: HomeProps["page"][P];
};

export type HomePagePropsSelector<T extends keyof HomePagePropsMappedLoose> = {
  [P in keyof HomePagePropsMappedLoose[T]]: HomePagePropsMappedLoose[T][P];
};
