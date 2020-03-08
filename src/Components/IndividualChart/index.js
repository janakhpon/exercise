import React from 'react'
import { Grid } from '@material-ui/core'
import { Line } from 'react-chartjs-2'

import { getImportDataset, getExportDataset, listofyears, LineDataCap } from '../../Constants'

const PageIndividual = (props) => {
    let exportDatasetHost = []
    let importDatasetHost = []
    let years = []
    importDatasetHost = getImportDataset(props.chartdata)
    exportDatasetHost = getExportDataset(props.chartdata)
    years = listofyears(props.chartdata)
    let exportdata = LineDataCap(years, exportDatasetHost)
    let importdata = LineDataCap(years, importDatasetHost)

    const options = { maintainAspectRatio: true }
    return (
        <>
            <Grid container spacing={1}>
                <Grid item xs={12}>
                    <h1>Used Individual</h1>
                </Grid>
                <Grid item xs={12}>
                    <h4>Export</h4>
                    <Line data={exportdata} id="charthere" options={options} />
                </Grid>

                <Grid item xs={12}>
                    <h4>Import</h4>
                    <Line data={importdata} id="charthere" options={options} />
                </Grid>
            </Grid>
        </>
    )
}

export default PageIndividual