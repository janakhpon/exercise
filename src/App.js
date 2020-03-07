import React from 'react'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'

import PageContainer from './Components/Container'
import PageData from './Components/Data'

const App = () => {
  return (
    <Container maxWidth="md">
      <Grid container spacing={1}>
        <Grid item xs={12}>
          <h1>Exercise</h1>
        </Grid>
        <Grid item xs={12}>
          <PageData />
        </Grid>
        <Grid item xs={12}>
          <PageContainer />
        </Grid>
      </Grid>
    </Container>
  );
}

export default App