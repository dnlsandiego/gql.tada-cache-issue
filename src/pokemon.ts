import { FragmentOf, graphql, readFragment } from '../graphql';

export const PokemonItemFragment = graphql(`
  fragment PokemonItem on Pokemon {
    id
  }
`);

const PokemonsQuery = graphql(`
  query Pokemons ($limit: Int = 10) {
    pokemons(limit: $limit) {
      id
      ...PokemonItem
    }
  }
`, [PokemonItemFragment]);

const PersistedQuery = graphql.persisted(
  "sha256:fc073da8e9719deb51cdb258d7c35865708852c5ce9031a257588370d3cd42f3",
  PokemonsQuery,
);