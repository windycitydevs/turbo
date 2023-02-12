/**
 * @description
 * prototype property infers and constrains relationships between
 * the constructor function and the instance side of class types.
 *
 * @example
 * ```ts
 *
 class BeeKeeper {
  hasMask = true;
}
class ZooKeeper {
  nametag = "Mikle";
}
class Animal {
  numLegs = 4;
}
class Bee extends Animal {
  keeper: BeeKeeper = new BeeKeeper();
}
class Lion extends Animal {
  keeper: ZooKeeper = new ZooKeeper();
}
function createInstance<A extends Animal>(c: new () => A): A {
  return new c();
}
createInstance(Lion).keeper.nametag;
createInstance(Bee).keeper.hasMask;
 * ```
 * This powers the [Mixins](https://www.typescriptlang.org/docs/handbook/mixins.html) design pattern
*/

export function create<Type>(c: { new (): Type }): Type {
  return new c();
}

export function createInstance<Type, NewTypeInstance extends Type>(
  c: new () => NewTypeInstance
): NewTypeInstance {
  return new c();
}
