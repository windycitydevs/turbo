import { buildHTTPExecutor } from "@graphql-tools/executor-http";
import type { MaybeAsyncIterable } from "@graphql-tools/utils/typings/executor";
import type { TypedDocumentNode } from "@graphql-typed-document-node/core";
import {
  Kind,
  type ASTNode,
  type ExecutionResult,
  type OperationDefinitionNode
} from "graphql";
import useSWR, { type Key } from "swr";

const executor = buildHTTPExecutor({
  endpoint: process.env.WORDPRESS_API_URL ?? ""
});

const isOperationDefinition = (def: ASTNode): def is OperationDefinitionNode =>
  def.kind ===
  (Kind.OPERATION_DEFINITION satisfies (typeof Kind)["OPERATION_DEFINITION"]);

export function useGraphQL<
  TResult,
  TVariables extends Record<string, any> = Record<string, any>
>(
  document: TypedDocumentNode<TResult, TVariables>,
  ...[variables]: TVariables extends Record<string, never> ? [] : [TVariables]
) {
  return useSWR(
    [
      // This logic can be customized as desired
      document.definitions.find(isOperationDefinition)?.name,
      variables
    ] as const,
    async ({ key, variables }: { key?: Key; variables?: TVariables }) =>
      executor({
        document: document,
        variables: variables
      }) satisfies Promise<MaybeAsyncIterable<ExecutionResult<TResult>>>
  );
}
