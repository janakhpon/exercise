import React from 'react'
import { Grid } from '@material-ui/core'
import { Line } from 'react-chartjs-2'

import { getMergedArray, getFormDataSet, LineDataCap, listofyears } from '../../Constants'

const PageAggregate = (props) => {
    let exportDatasetHost = []
    let importDatasetHost = []
    let labelfromprops = []
    let exportDatasetAggregator = []
    let importDatasetAggregator = []
    let years = []
    props.chartdata.map(ch => {
        let data = []
        labelfromprops.push(ch.value)
        ch.exports.map((exp) => {
            return data.push(exp)
        })
        return exportDatasetAggregator.push(data)
    })

    props.chartdata.map(ch => {
        let data = []
        ch.imports.map((exp) => {
            return data.push(exp)
        })
        return importDatasetAggregator.push(data)
    })

    years = listofyears(props.chartdata)
    let expdata = getMergedArray(exportDatasetAggregator)
    let impdata = getMergedArray(importDatasetAggregator)
    let formDataset = getFormDataSet(labelfromprops, expdata)
    let formDataset1 = getFormDataSet(labelfromprops, impdata)
    exportDatasetHost.push(formDataset)
    importDatasetHost.push(formDataset1)
    let exportdata = LineDataCap(years, exportDatasetHost)
    let importdata = LineDataCap(years, importDatasetHost)

    const options = { maintainAspectRatio: true }
    return (
        <>
            <Grid container spacing={1}>
                <Grid item xs={12}>
                    <h1>Used Aggregate</h1>
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

export default PageAggregate