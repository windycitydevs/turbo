/**
 * @const snakeStomper
 *
 * For non-client use only
 */
export const snakeStomper = (str: string) => {
  return str?.split(/([_])/gim)?.length > 1
    ? str?.replace(/([_])/gim, " ")
    : str;
};

/**
 * @const camelToTxt
 *
 * For non-client use only
 */
export const camelToTxt = (camel: string) => {
  const camelCase = snakeStomper(camel)
    .replace(/([a-z])([A-Z\/0-9])/g, "$1 $2")
    .replace(/([0-9])([A-Z\/a-z])/g, "$1 $2")
    .split(" ");

  return camelCase.join(" ");
};

export default function CaseHelpers() {
  return { camelToTxt, snakeStomper };
}
