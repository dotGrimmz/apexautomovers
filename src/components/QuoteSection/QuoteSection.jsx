import React, { useEffect, useContext } from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Avatar from '@material-ui/core/Avatar';
import shipping from '../../images/shipping.jpg'
import AAMContext from '../../context/AAMContext';
import QuotePanel from './QuotePanel';
import Typography from '@material-ui/core/Typography';





const QuoteSection = props => {
    const { quoteSectionRef } = props;
    const context = useContext(AAMContext);
    const { originCoordinates, destinationCoordinates, logisticsData, vehData } = context;
    let directionsService;
    let directionsDisplay;


    useEffect(() => {
        // how we will render the map
        // will need to wrap in a try catch, and finally set loaders and spinners the whole nine
        // might even move service calls into another file

        const calcRoute = (x, y) => {
            let request = {
                origin: x,
                destination: y,
                travelMode: window.google.maps.TravelMode.DRIVING
            };
            directionsService.route(request, (response, status) => {
                if (status === 'OK') {
                    directionsDisplay.setDirections(response)
                }
            })

        }
        const initMap = (o, d) => {
            let originData = new window.google.maps.LatLng(o.lat, o.lng);
            let destinationData = new window.google.maps.LatLng(d.lat, d.lng);
            let directionsMap = new window.google.maps.Map(document.querySelector('#directions-map'), {
                zoom: 7,
                center: originData
            })
            directionsService = new window.google.maps.DirectionsService;
            directionsDisplay = new window.google.maps.DirectionsRenderer;
            directionsDisplay.setMap(directionsMap);
            calcRoute(originData, destinationData)

        }
        initMap(originCoordinates, destinationCoordinates)

    }, [])





    const styles = {
        //figure out how to make the corners transparent

        container: {
            borderRadius: "10px 10px 0px 0px",
            backgroundColor: "#343434",
            background:
                "radial-gradient(ellipse at center," +
                "#585858" +
                " 0," +
                "#232323" +
                " 100%)",

            width: "100%",
            minHeight: "450px",
            margin: "auto",
            overflow: 'transparent',
        },
        mapStyle: {
            width: "400px",
            height: "400px",
            border: "2px solid darkblue",
            borderRadius: '5px 20px 5px'
        },
        mapContainerStyle: {
            padding: '1%',
        },
        infoContainer: {
            backgroundImage: `url(${shipping})`,
            backgroundSize: '600px',
            boxShadow: "1px 3px 1px #000000",

            height: '475px',
            width: '400px',
            minHeight: '400px',
            minWidth: '400px'
        },
        infoWrapper: {
            opacity: '75%',
            backgroundColor: 'black',
            minHeight: '475px',
            minWidth: '400px'

        },
        avatar: {
            width: '100px',
            height: '100px',
            boxShadow: "1px 3px 1px #000000",
            background: "radial-gradient(ellipse at center," +
                "lightblue " +
                " 0," +
                "#3f51b5" +
                " 100%)",

        },
        price: {
            color: 'white'
        },
        avatarContainer: {
            padding: '1%'
        },
        rate: {
            fontSize: '6px'
        },
        text: {
            color: 'white',
            fontSize: '9px'
        },
        priceWrapper: {
            paddingBottom: '4%'
        },
        small: {
            fontWeight: '400px',
            color: 'grey',
            paddingRight: '1%',
        }

    }







    return (
        <div style={styles.container} ref={quoteSectionRef}>
            <Grid container justify='center' spacing={2} alignItems='center'>
                <Grid item xs={12} md={6} align='center'>
                    <Paper style={styles.infoContainer} elevation={2}>
                        <Paper style={styles.infoWrapper}>
                            <Grid container justify='center' alignItems='center'>

                                <Grid item xs={12} style={styles.avatarContainer}>
                                    <Typography variant='h4' style={styles.price}>
                                        <small style={styles.small}>$</small>
                                        245
                                   </Typography>

                                </Grid>
                                <Grid item xs={12} style={styles.priceWrapper}>
                                    <Typography variant='caption' style={styles.text}>
                                        Shipping Rate
                                    </Typography>
                                </Grid>
                                <Grid item xs={12} >
                                    <QuotePanel />

                                </Grid>
                            </Grid>
                        </Paper>
                    </Paper>
                </Grid>
                <Grid item xs={12} md={6} align='center' style={styles.mapContainerStyle}>
                    <article id='directions-map' style={styles.mapStyle} />

                </Grid>
            </Grid>


        </div>
    )

}








export default QuoteSection