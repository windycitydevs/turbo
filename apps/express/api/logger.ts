import winston from "winston";

export type RemoveFields<T, P extends keyof T = keyof T> = {
  [S in keyof T as Exclude<S, P>]: T[S];
};

const LoggerService = <
  T extends
    | RemoveFields<winston.LoggerOptions, "level" | "transports">
    | undefined
>(props?: {
  options?: T;
}) =>
  winston.createLogger({
    level: "debug",
    format: winston.format.prettyPrint({ colorize: true, depth: 4 }),
    transports: new winston.transports.Console(),
    ...props?.options
  });

export default LoggerService;
