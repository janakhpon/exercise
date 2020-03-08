export const colorClasses = ['red', 'green', 'blue', 'magenta', 'orange', 'yellow', 'deeppink', 'darkcyan', 'darkblue', 'springgreen', 'gold', 'crimson', 'indigo', 'navy', 'tomato', 'saddlebrown', 'rebeccapurple', 'olive', 'lime', 'mediumorchid', 'darkvoilet', 'mediumspringgreen', 'greenyellow', 'olivedrab', 'coral', 'palevoiletred']

export let getID = () => {
    return Math.floor((Math.random() * 26) + 1)
}

export const getMergedArray = (a) => {
    let b = []

    for (let i = 0; i < a[0].length; i++) {
        let count = 0
        for (let j = 0; j < a.length; j++) {
            count += a[j][i]
        }
        b.push(count)
    }
    return b
}

export const getFormDataSet = (a, b) => {
    let formDataset = {
        label: a,
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

    return formDataset
}

export const LineDataCap = (labels, datasets) => {
    let data = {
        labels,
        datasets
    }
    return data
}

export const getImportDataset = (a) => {
    let b = []
    a.map(ch => {
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
            data: ch.imports
        }
        return b.push(formDataset)
    })

    return b
}

export const getExportDataset = (a) => {
    let b = []
    a.map(ch => {
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
        return b.push(formDataset)
    })

    return b
}


export const listofyears = (a) => {
    let b = []
    let c = []
    a.map(ch => {
        let dyears = []
        ch.years.map((year) => {
            return dyears.push(year)
        })

        return b.push(dyears)
    })

    b.map(years => {
        let host = []
        years.map(year => {
            return host.push(year)
        })

        return c = host
    })

    return c
}