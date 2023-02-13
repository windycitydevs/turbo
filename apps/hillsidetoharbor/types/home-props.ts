export type HomeProps = {
  data: {
    page: {
      title: string;
      content: string |null;
      previewRevisionId: string |null;
      previewRevisionDatabaseId: string |null;
      isPreview: boolean;
      isFrontPage: boolean;
      uri: string;
      slug: string;
      modifiedGmt: string;
      databaseId: number;
      id: string;
      seo: {
        metaDesc: string;
        readingTime: number;
        metaKeywords: string;
        __typename: string;
        focuskw: string;
        metaRobotsNofollow: string;
      };
      featuredImage: {
        node: {
          __typename: string;
          altText: string;
          uri: string;
          description: string | null;
          title: string;
          slug: string;
          mediaDetails: {
            width: number;
            height: number;
            __typename: string;
          };
        };
      };
      hero: {
        __typename: string;
        fieldGroupName: string;
        subCta: string;
        cta: string;
        subHeroImages3: {
          __typename: string;
          subHeroImageCta: string;
          subHeroImageSubCta: string;
          subHeroImage: {
            __typename: string;
            altText: string;
            uri: string;
            description: string |null;
            title: string;
            slug: string;
            mediaDetails: {
              width: number;
              height: number;
              __typename: string;
            };
          };
        }[];
        heroImage: {
          __typename: string;
          altText: string;
          uri: string;
          description: string | null;
          title: string;
          slug: string;
          mediaDetails: {
            width: number;
            height: number;
            __typename: string;
          };
        };
      };
    };
  };
};
