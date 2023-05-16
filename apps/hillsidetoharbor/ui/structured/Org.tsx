"use client";
import { getSiteUrl } from "@/lib/env-handler";
import { OrganizationJsonLd } from "next-seo";
// import { safeJsonLdReplacer } from "@/utils/to-json";
// import Script from "next/script";
// import {Organization, OrganizationRole, PostalAddress, ContactPoint,ContactPage } from "schema-dts";

// see work repo Jobs Site apps/vercel/src/components/RIch/JobPosting/job-posting.tsx for an example of
// custom ldjson using safeJsonLdReplacer helper imported from @/utils/to-json
const OrgRichData = () => (
  <OrganizationJsonLd
    useAppDir={true}
    name='Hillside To Harbor'
    url={`${getSiteUrl(process.env.NODE_ENV)}`}
    address={{
      addressCountry: "United States",
      addressLocality: "Knoxville",
      postalCode: "37922",
      streetAddress: "2042 Town Center Blvd #114",
      addressRegion: "TN"
    }}
    email={"contact@hillsidetoharbor.com"}
    telephone={"865-214-6943"}
    contactPoint={[
      {
        contactType: "Phone Number",
        telephone: "+1-865-214-6943",
        areaServed: "US",
        availableLanguages: ["English"]
      }
    ]}
    id={`${getSiteUrl(process.env.NODE_ENV)}#organization`}
    legalName='Hillside To Harbor'
    logo={`${getSiteUrl(process.env.NODE_ENV)}/VerticalWithTextSquare.png`}
    scriptId={"org-rich-context"}
    type={""}
  />
);

export default OrgRichData;
