import { gql } from 'apollo-boost';

export const GET_COUNTRIES = gql`
{
    countrycodes{
        name
        id
        ISO
        region
    }
}
`

export const GET_STARSHIPS = gql`
{
    allStarships{
      starships{
        name
        passengers
      }
    }
}
`