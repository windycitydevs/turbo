import * as dotenv from "dotenv";
dotenv.config();

const config = {
  schema: [
    {
      [`${process.env.WORDPRESS_API_URL ?? ""}`]: {
        headers: {
          Authorization: `Bearer ${
            process.env.WORDPRESS_AUTH_REFRESH_TOKEN ?? ""
          }`
        }
      }
    }
  ],
  documents: ["ui/**/*.tsx", "app/**/*.tsx", "graphql/**/*.graphql"],
  generates: {
    "./gql/": {
      preset: "client"
    }
  }
};

export default config;
