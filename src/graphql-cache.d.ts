/* eslint-disable */
/* prettier-ignore */
import type { TadaDocumentNode, $tada } from 'gql.tada';

declare module 'gql.tada' {
 interface setupCache {
    "\n  query Pokemons ($limit: Int = 10) {\n    pokemons(limit: $limit) {\n      id\n      ...PokemonItem\n    }\n  }\n":
      TadaDocumentNode<{}, { limit?: number | null | undefined; }, { fragment: "Pokemons"; on: unknown; masked: true; }>;
  }
}
