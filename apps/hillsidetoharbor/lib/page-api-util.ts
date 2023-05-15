import { objInference } from "@/types/helpers";
import type { IncomingMessage } from "http";
import type { PreviewData } from "next";

export type Env = {
  [key: string]: string | undefined;
};

export const parseHelper = <T>(args: string) =>
  JSON.parse(args) as ReturnType<typeof objInference<T>>;

export interface EnhancedNextApiRequest<T> extends IncomingMessage {
  /**
   * Object of `query` values from url
   */
  query: Partial<{
    [key: string]: string | string[];
  }>;
  /**
   * Object of `cookies` from header
   */
  cookies: Partial<{
    [key: string]: string;
  }>;
  body: ReturnType<typeof objInference<T>>;
  env: Env;
  preview?: boolean;
  /**
   * Preview data set on the request, if any
   * */
  previewData?: PreviewData;
}
