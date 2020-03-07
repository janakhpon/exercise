import React from 'react'
import { Grid } from '@material-ui/core'
import { Line } from 'react-chartjs-2'

import { colorClasses, getID } from '../../Constants'

const PageAggregate = (props) => {
    let exportDatasetHost = []
    let importDatasetHost = []

    let exportDatasetAggregator = []
    let labelfromprops = []
    let importDatasetAggregator = []
    let sortHost = []

    props.chartdata.map(ch => {
        let data = []
        labelfromprops.push(ch.value)
        ch.exports.map((exp, key) => {
            return data.push(exp)
        })

        let formattedvalue = data
        return exportDatasetAggregator.push(formattedvalue)
    })

    let a = exportDatasetAggregator

    let b = []

    for (let i = 0; i < a[0].length; i++) {
        let count = 0
        for (let j = 0; j < a.length; j++) {
            count += a[j][i]
        }
        b.push(count)
    }


    props.chartdata.map(ch => {
        let data = []
        ch.imports.map((exp, key) => {
            return data.push(exp)
        })

        let formattedvalue = data
        return importDatasetAggregator.push(formattedvalue)
    })

    let c = importDatasetAggregator

    let d = []

    for (let i = 0; i < c[0].length; i++) {
        let count = 0
        for (let j = 0; j < c.length; j++) {
            count += c[j][i]
        }
        d.push(count)
    }

    let formDataset = {
        label: labelfromprops,
        fill: false,
        lineTension: 0.1,
        backgroundColor: 'rgba(75,192,192,0.4)',
        borderColor: `${colorClasses[getID()]}`,
        borderCapStyle: 'butt',
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: 'miter',
        pointBorderColor: `${colorClasses[getID()]}`,
        pointBackgroundColor: '#fff',
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: `${colorClasses[getID()]}`,
        pointHoverBorderColor: 'rgba(220,220,220,1)',
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10,
        data: b
    }

    exportDatasetHost.push(formDataset)


    let formDataset1 = {
        label: labelfromprops,
        fill: false,
        lineTension: 0.1,
        backgroundColor: 'rgba(75,192,192,0.4)',
        borderColor: `${colorClasses[getID()]}`,
        borderCapStyle: 'butt',
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: 'miter',
        pointBorderColor: `${colorClasses[getID()]}`,
        pointBackgroundColor: '#fff',
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: `${colorClasses[getID()]}`,
        pointHoverBorderColor: 'rgba(220,220,220,1)',
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10,
        data: d
    }

    importDatasetHost.push(formDataset1)

    let exportdata = {
        labels: ['2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018'],
        datasets: exportDatasetHost
    };

    let importdata = {
        labels: ['2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018'],
        datasets: importDatasetHost
    };

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