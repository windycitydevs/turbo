export type Depth<
  Y extends { [record: string | symbol | number]: unknown },
  X extends keyof Y = keyof Y
> = {
  [H in keyof Y[X]]: Y[X][H][keyof Y[X][H]];
};

export type InferDepth<T> = T extends Depth<infer U, infer X> ? U[X] : T;

export const inferObj = <J, T extends InferDepth<J>>(props: T) => props;

export const objInference = <T extends Parameters<typeof inferObj>["0"]>(
  props: T
) => inferObj(props);
