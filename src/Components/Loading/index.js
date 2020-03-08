import React from 'react'
import Grid from '@material-ui/core/Grid'

import styles from '../../Styles/main.module.scss'

const PageLoading = () => {
    return (
        <Grid container spacing={1}>
            <Grid item xs={12} className={styles.alertContainer}>
                <h4>Loading ....</h4>
            </Grid>
        </Grid>
    )
}

export default PageLoading