/**
 * Map query parameters when making api calls with ease
 *
 * @example
 * ```ts
 * const mappingParams = mapParams([["Authorization", "Bearer " + process.env.SANITY_API_TOKEN ?? ""], ["dataset", "prod-takeda-oncology"]])
 * ```
 * Logging `mappingParams` to the console outputs:
 * ```bash
 * "Authorization=Bearer%2080766227467c318d8b587de85013bf5a04bf0183b332e6b8908de001b608bf76&dataset=prod-takeda-oncology"
 * ```
 *
 */
export const mapParams = (params: (string | undefined)[][]) =>
  params
    .reduce<string[]>((arr, [k, v]) => {
      if (v) arr.push(`${k}=${encodeURIComponent(v)}`);
      return arr;
    }, [])
    .join("&");
