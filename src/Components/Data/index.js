import React from 'react'
import { useQuery } from '@apollo/react-hooks'
import Alert from '@material-ui/lab/Alert';
import IconButton from '@material-ui/core/IconButton';
import Collapse from '@material-ui/core/Collapse';
import CloseIcon from '@material-ui/icons/Close';

import { GET_COUNTRIES } from '../Queries'
import Page404 from '../404'
import PageLoading from '../Loading'
import styles from '../../Styles/main.module.scss'

export let countryOptions = []
let rawHost = []

const PageData = () => {
    const [open, setOpen] = React.useState(true);
    const getCountries = useQuery(GET_COUNTRIES)
    if (getCountries.loading) return <PageLoading />
    if (getCountries.error) return <Page404 />
    if (getCountries.data) {
        const { countrystores } = getCountries.data
        countrystores.map((country => {
            let formattedvalue = { value: country.reporterCountry.name, label: country.reporterCountry.name, exports: country.VExport, imports: country.VImport, years: country.year }
            return rawHost.push(formattedvalue)
        })
        )

        countrystores.reduce((item, current) => {
            const x = item.find(item => item.reporterCountry.name === current.reporterCountry.name);
            if (!x) {
                return item.concat([current]);
            } else {
                return item;
            }
        }, []).map((country) => {
            let filterdHost = rawHost.filter(raw => raw.value === country.reporterCountry.name)
            let edata = []
            filterdHost.map(fth => {
                return edata.push(fth.exports)
            })
            let idata = []
            filterdHost.map(fth => {
                return idata.push(fth.imports)
            })

            let years = []
            filterdHost.map(fth => {
                return years.push(fth.years)
            })

            let formattedvalue = { value: country.reporterCountry.name, label: country.reporterCountry.name, imports: idata, exports: edata, years }
            return countryOptions.push(formattedvalue)
        });

        return (
            <div className={styles.alertContainer}>
                <Collapse in={open}>
                    <Alert
                        action={
                            <IconButton
                                aria-label="close"
                                color="inherit"
                                size="small"
                                onClick={() => {
                                    setOpen(false);
                                }}
                            >
                                <CloseIcon fontSize="inherit" />
                            </IconButton>
                        }
                    >
                        {countryOptions.length ? countryOptions.length : 0} countries in list
              </Alert>
                </Collapse>
            </div>
        )
    }

}

export default PageData
