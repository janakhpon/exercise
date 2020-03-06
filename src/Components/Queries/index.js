import { gql } from 'apollo-boost';

export const GET_COUNTRIES = gql`
{
  countrystores(start: 2010){
    VImport
    VExport
    year
    id
    income
    reporterCountry{
      name
      region
    }
  }
}
`
