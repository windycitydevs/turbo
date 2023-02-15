export const extractPropsFromAttrs = (attrs: NamedNodeMap) => {
  return [...attrs].reduce((acc, attr) => {
    const matches = attr.nodeName.match(/^data-([\w-]+)$/);
    if (!matches) {
      return acc;
    }
    //  An attribute named `data-place-name` becomes a prop named `placeName`.
    return {
      ...acc,
      [matches[1].replace(/-./g, (str: string) =>
        str.substring(1).toUpperCase()
      )]: attr.nodeValue
    };
  }, {});
};
