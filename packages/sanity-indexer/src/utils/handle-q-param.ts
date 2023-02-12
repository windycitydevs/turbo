export const handleQParam = (handleEnumerable: string | string[]) =>
  Array.isArray(handleEnumerable) ? handleEnumerable[0] : handleEnumerable;

export const qParamConditional = (props: string | string[] | undefined) =>
  typeof props !== "undefined" ? (Array.isArray(props) ? props[0] : props) : "";
