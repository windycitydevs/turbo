import cn from "clsx";
import { useMemo, type FC } from "react";
import { highlight } from "sugar-high";
import type UI from "../../typedefs/namespace";

const Snippet: FC<UI.TSX.JSXSelect<"pre">> = ({
  children,
  className,
  ...props
}) => {
  const __html = useMemo(
    () => (children ? highlight(children.toString()!) : ""),
    [children]
  );
  return (
    <pre
      className={cn(
        "border-accents-2 bg-accents-1 font-gotham overflow-x-auto rounded-md border p-6",
        className
      )}
      {...props}>
      <code dangerouslySetInnerHTML={{ __html }} />
    </pre>
  );
};

export default Snippet;
