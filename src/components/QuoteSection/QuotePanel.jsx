import React, { useContext } from 'react'
import Grid from '@material-ui/core/Grid';
import AAMContext from '../../context/AAMContext';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import DirectionsIcon from '@material-ui/icons/Directions';
import Button from '@material-ui/core/Button';



const QuotePanel = () => {

    const context = useContext(AAMContext);
    const { logisticsData, vehData } = context;
    return (
        <Grid container justify='center' alignItems='center'>
            <Grid item xs={12} >
                <Typography variant='subtitle2' style={styles.text} > {logisticsData.originCity}
                </Typography>
            </Grid>
            <Grid item xs={12} >
                <Typography variant='caption' style={styles.text} >Origin
                </Typography>
            </Grid>
            <Grid item xs={12}>
                <Divider style={styles.originDivider} variant='middle' />

            </Grid>
            <Grid item xs={12} >
                <Typography variant='subtitle2' style={styles.text}> {logisticsData.destinationCity}
                </Typography>
            </Grid>
            <Grid item xs={12}>
                <Typography variant='caption' style={styles.text} >Destination
                </Typography>
            </Grid>
            <Grid item xs={12}>
                <Divider style={styles.destinationDivider} variant='middle' />
            </Grid>
            <Grid item xs={12} >
                <Typography variant='subtitle2' style={styles.text}> {logisticsData.selectedDate}
                </Typography>
            </Grid>
            <Grid item xs={12}>
                <Typography variant='caption' style={styles.text} >Pick Up Date
                </Typography>
            </Grid>
            <Grid item xs={12}>
                <Divider style={styles.destinationDivider} variant='middle' />
            </Grid>
            <Grid item xs={12} >
                <Typography variant='subtitle2' style={styles.text}> {vehData.vehYear} {vehData.vehMake} {vehData.vehModel}
                </Typography>
            </Grid>
            <Grid item xs={12}>
                <Typography variant='caption' style={styles.text} >Vehicle Info
                </Typography>
            </Grid>
            <Grid item xs={12}>
                <Divider style={styles.destinationDivider} variant='middle' />
            </Grid>
            <Grid item xs={12} >
                <Typography variant='subtitle2' style={styles.confirmationText}> 12343423
                </Typography>
            </Grid>
            <Grid item xs={12}>
                <Typography variant='caption' style={styles.text} >Confirmation Number
                </Typography>
            </Grid>
            <Grid item xs={12}>
                <Divider style={styles.confirmationDivider} variant='middle' />
            </Grid>
            <Grid item xs={12}>
                <Button
                    variant='contained'
                    endIcon={<DirectionsIcon />} color='primary' >
                    Continue
                    </Button>

            </Grid>
        </Grid >

    )
}

const styles = {

    text: {
        color: "white"
    },
    originDivider: {
        color: 'white',
        backgroundColor: 'white',
        width: '7%',
        marginBottom: '3%'
    },
    destinationDivider: {
        color: 'white',
        backgroundColor: 'white',
        width: '15%',
        marginBottom: '3%'
    },
    confirmationText: {
        color: 'white',
        fontSize: '24px'
    },
    confirmationDivider: {
        color: 'white',
        backgroundColor: 'white',
        width: '24%',
        marginBottom: '3%'
    },
    btn: {
        padding: '2%'
    }
}
export default QuotePanel