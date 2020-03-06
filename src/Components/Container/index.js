import React, { useState } from 'react'
import FormGroup from '@material-ui/core/FormGroup'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Switch from '@material-ui/core/Switch'
import Grid from '@material-ui/core/Grid'
import Select from 'react-select'

import PageAggregate from '../AggregateChart'
import PageIndividual from '../IndividualChart'

import { countryOptions } from '../Data';

const PageContainer = () => {
    const [state, setState] = React.useState(false)
    const [countries, setCountries] = useState([])

    const handleChange = event => {
        setState(event.target.checked);
    }

    const handleCountry = countries => {
        setCountries(countries)
    }

    return (
        <>
            <FormGroup row>
                <h3>Individual</h3> &nbsp;&nbsp;
            <FormControlLabel
                    control={
                        <Switch
                            checked={state}
                            onChange={handleChange}
                            value="state"
                            color="primary"
                        />
                    }
                    label="Aggregate"
                />
            </FormGroup>
            <Grid container spacing={1}>
                <Grid item xs={12}>
                    <Select
                        defaultValue={[countryOptions[2], countryOptions[3]]}
                        value={countries}
                        isMulti
                        name="colors"
                        onChange={handleCountry}
                        options={countryOptions}
                        className="basic-multi-select"
                        classNamePrefix="select"
                    />
                </Grid>
                {state ? (
                    <PageAggregate chartdata={countries} />
                ) : <PageIndividual chartdata={countries} />}
            </Grid>
        </>
    );
}


export default PageContainer