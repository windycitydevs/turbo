const queryParamHandler = (props: string | string[] | undefined) =>
  typeof props !== "undefined" ? (Array.isArray(props) ? props[0] : props) : "";

export default queryParamHandler;
