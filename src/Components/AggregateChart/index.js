import React from 'react'
import { Grid } from '@material-ui/core'
import { Line } from 'react-chartjs-2'

import { colorClasses, getID } from '../../Constants'

const PageAggregate = (props) => {
    let exportDatasetHost = []
    let importDatasetHost = []

    let exportDatasetAggregator = []
    let importDatasetAggregator = []
    let sortHost = []

    props.chartdata.map(ch => {
        let data = []
        ch.exports.map((exp, key) => {
            let formattedval = { index: key, value: exp }
            return data.push(formattedval)
        })

        let formattedvalue = {data: data}
        return exportDatasetAggregator.push(formattedvalue)
    })

    
    exportDatasetAggregator.map(exp => {

        let filteredExportHost = []
        let filteredHost = []


        exp.data.map((eex, key) => {
            if (eex.index === key){
                let data = []
                data.push(eex.value)
                let filtered = { key, data }
                filteredHost.push(filtered)
            }
            return filteredExportHost.push(filteredHost)
        })

        // exp.data.map((eex, key) => {
        //     filterdExportHost = exp.data.filter(fv => fv.index === key)
        //     let filteredval = { key, data:filterdExportHost}
        //     return sortHost.push(filteredval)
        // })
        

        return console.log(filteredExportHost)
    })
    
    
    console.log(sortHost)
    props.chartdata.map(ch => {
        let formDataset = {
            label: ch.value,
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
            data: ch.exports
        }
        return exportDatasetHost.push(formDataset)
    })


        let formDataset = {
            label: "combination",
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
            data: props.chartdata.imports
        }
  importDatasetHost.push(formDataset)

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