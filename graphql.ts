import { initGraphQLTada } from 'gql.tada';
import { JsonObject } from 'type-fest';
import type { introspection } from './src/graphql-env.d.ts';

export const graphql = initGraphQLTada<{
  introspection: introspection;
  scalars: {
    DateTime: string;
    JSON: JsonObject;
  };
}>();

export { readFragment } from 'gql.tada';
export type { FragmentOf, ResultOf, VariablesOf } from 'gql.tada';
