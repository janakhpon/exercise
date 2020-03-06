import React, { useEffect } from 'react'
import { useQuery } from '@apollo/react-hooks'

import { GET_COUNTRIES } from '../Queries'
import Page404 from '../404'
import PageLoading from '../Loading'

export let countryOptions = [
    { value: 'USA', label: 'USA', exports: 650, imports: 1200, data: [65, 51, 80, 81, 56, 55, 40, 60, 65, 69, 70, 86] },
    { value: 'UAE', label: 'UAE', exports: 200, imports: 3400, data: [64, 59, 80, 81, 56, 55, 40, 60, 65, 69, 70, 86] },
    { value: 'UK', label: 'UK', exports: 300, imports: 2200, data: [63, 59, 82, 81, 56, 55, 40, 60, 65, 69, 70, 86] },
    { value: 'USSR', label: 'USSR', exports: 400, imports: 6200, data: [62, 49, 70, 71, 46, 55, 42, 63, 65, 79, 80, 76] },
    { value: 'JP', label: 'JP', exports: 2300, imports: 1200, data: [67, 49, 76, 71, 46, 55, 42, 63, 65, 79, 80, 76] },
    { value: 'SG', label: 'SG', exports: 800, imports: 7800, data: [61, 49, 79, 71, 46, 55, 42, 63, 65, 79, 80, 76] },]

const PageData = () => {
    const getCountries = useQuery(GET_COUNTRIES)
    if (getCountries.loading) return <PageLoading />
    if (getCountries.error) return <Page404 />
    if (getCountries.data) {
        const { countrycodes } = getCountries.data
        countrycodes.map((country => {
            let formattedvalue = { value: country.name, label: country.name }
            return countryOptions.push(formattedvalue)
        })
        )
        return <></>
    }

}

export default PageData
