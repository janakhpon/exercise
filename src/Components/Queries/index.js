import { gql } from 'apollo-boost';

export const GET_COUNTRIES = gql`
{
  countrystores(where: {year_gt: 2009}){
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
