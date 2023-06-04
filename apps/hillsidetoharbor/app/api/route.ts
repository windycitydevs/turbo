import { NextResponse, userAgent, type NextRequest } from "next/server";

export const runtime = "edge";

export async function GET(request: NextRequest) {
  const { headers, nextUrl: url } = request;
  const ua = userAgent({ headers });
  const lat = headers.get("x-vercel-ip-latitude") || "0.0000";
  const lng = headers.get("x-vercel-ip-longitude") || "0.0000";
  const ip = headers.get("x-real-ip") || "0.0.0.0";
  const city = headers.get("x-vercel-ip-city") || "unknown";
  const UA = ua.ua;
  const email = url.searchParams.get("email") || null;
  const firstName = url.searchParams.get("firstName") || null;
  const lastName = url.searchParams.get("lastName") || null;
  const phoneNumber = url.searchParams.get("phoneNumber") || null;
  const message = url.searchParams.get("message") || null;
  const submissionTimestamp = url.searchParams.get("timestamp");
  if (
    email &&
    firstName &&
    lastName &&
    phoneNumber &&
    message &&
    submissionTimestamp
  ) {
    const res = await fetch(process.env.WORDPRESS_API_URL ?? "", {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${
          process.env.WORDPRESS_AUTH_REFRESH_TOKEN ?? ""
        }`
      },
      method: "POST",
      body: JSON.stringify({
        query: /* GraphQL */ `
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
        variables: {
          input: {
            clientMutationId: `${lastName},${firstName}`,
            id: "1",
            entryMeta: {
              createdById: 1,
              dateCreatedGmt: new Date(Date.now()).toISOString().split(/T/)[0],
              ip: ip,
              userAgent: UA
            },
            fieldValues: [
              { id: 1, nameValues: { first: firstName, last: lastName } },
              { id: 2, emailValues: { value: email } },
              {
                id: 3,
                value: message.concat(
                  `\n \n ------------------------------- \n\n timestamp: ${submissionTimestamp} \n\n city: ${city} \n\n geocoordinates: [${lat}, ${lng}] \n\n useragent: ${UA}`
                )
              },
              { id: 4, value: phoneNumber }
            ]
          }
        }
      })
    });
    const data = await res.json();
    return NextResponse.json(data);
  }
}

// export { Handler as GET, Handler as POST };
