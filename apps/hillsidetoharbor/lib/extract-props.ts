export const extractPropsFromAttrs = (attrs: NamedNodeMap) => {
  return [...attrs].reduce((acc, attr) => {
    const matches = attr.nodeName.match(/^data-([\w-]+)$/);

    if (!matches) {
      return acc;
    }

    return {
      ...acc,
      [matches[1].replace(/-./g, (str: string) =>
        str.substring(1).toUpperCase()
      )]: attr.nodeValue
    };
  }, {});
};
