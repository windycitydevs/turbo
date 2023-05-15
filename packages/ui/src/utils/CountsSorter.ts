/**
 * `keySort` defaults to "ASC" (A-Z)
 *
 * `valSort` defaults to "DESC" (10 precedes 1 precedes -1)
 *
 * First, sort alphabetically using the localeCompare method
 *
 * This ensures that any keys having equivalent values are ordered from A-Z
 *
 * Then, sort by value, making key-val pairs with higher counts come before those with lower ones
 *
 */

const CountsSorter = ({
  counter,
  keySort,
  valSort
}: {
  counter: Record<string, number> | Readonly<Record<string, number>>;
  keySort?: "ASC" | "DESC";
  valSort?: "ASC" | "DESC";
}) =>
  Object.fromEntries(
    Object.entries(counter)
      .sort(([aStr, _aNum], [bStr, _bNum]) =>
        keySort === "DESC"
          ? bStr.localeCompare(aStr) - aStr.localeCompare(bStr)
          : aStr.localeCompare(bStr) - bStr.localeCompare(aStr)
      )
      .sort(([_aStr, aNum], [_bStr, bNum]) =>
        valSort === "ASC" ? aNum - bNum : bNum - aNum
      )
  ) satisfies Record<string, number> | Readonly<Record<string, number>>;

export default CountsSorter;
