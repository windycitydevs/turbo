import { Inspector, type UI } from "@windycitydevs/ui";
import type { RequestCookie } from "next/dist/server/web/spec-extension/cookies";
import { cookies, draftMode, headers } from "next/headers";

type PossibleDataTypes = {
  readonly cookies: typeof cookies;
  readonly headers: typeof headers;
};

const headerCookieObj = {
  headers: "headers",
  cookies: "cookies"
} as const;

type HandleVariedDataTypes<
  T = (typeof headerCookieObj)[keyof typeof headerCookieObj]
> = T extends (typeof headerCookieObj)["headers"]
  ? {
      [P in keyof UI.Helpers.RemoveFields<
        PossibleDataTypes,
        "cookies"
      >]: UI.Helpers.RemoveFields<PossibleDataTypes, "cookies">[P];
    }
  : {
      [P in keyof UI.Helpers.RemoveFields<
        PossibleDataTypes,
        "headers"
      >]: UI.Helpers.RemoveFields<PossibleDataTypes, "headers">[P];
    };

function switchItUp<
  T extends (typeof headerCookieObj)[keyof typeof headerCookieObj]
>(determinant: T, val: HandleVariedDataTypes<T>) {
  switch (headerCookieObj[determinant]) {
    case headerCookieObj["headers"]: {
      return Array.from(
        Object.entries(
          (val as HandleVariedDataTypes<"headers">).headers().entries()
        )
      ).map(val => {
        return { [val[0]]: val[1] } as const satisfies {
          readonly [x: string]: any;
        };
      }) satisfies {
        readonly [x: string]: any;
      }[];
    }
    case headerCookieObj["cookies"]: {
      return Array.from(
        Object.entries(
          (val as HandleVariedDataTypes<"cookies">).cookies().getAll()
        )
      ).map(val => {
        return { [val[0]]: val[1] } as const;
      }) satisfies {
        readonly [x: string]: RequestCookie;
      }[];
    }
    default: {
      return [""];
    }
  }
}

const HooksServer = () => {
  return (
    <div className='overflow-x-auto rounded-xl px-2 py-4 text-sm text-white [color-scheme:dark]'>
      <Inspector Component='pre' variant='white'>
        {JSON.stringify(
          {
            cookies: switchItUp("cookies", { cookies: () => cookies() }),
            useHeaders: switchItUp("headers", { headers: () => headers() }),
            usePreviewData:
              Array.from(
                Object.entries(draftMode().isEnabled ? draftMode() : {})
              ).map(val => val) ?? {}
          },
          null,
          2
        )}
      </Inspector>
    </div>
  );
};

export default HooksServer;
