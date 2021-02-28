import React from "react";
import Grid from "@material-ui/core/Grid";
import InfoArea from "./InfoArea";
import LocalShippingIcon from "@material-ui/icons/LocalShipping";
import cars from "../../images/carsontruckbed.jpg";

const ServiceSection = () => {
  const styles = {
    title: {
      color: "#3C4858",
      marginTop: "30px",
      minHeight: "32px",
      fontFamily: "Roboto Slab Times New Roman serif",
      fontSize: 66,
      marginBottom: "25px",
      textDecoration: "none",
    },
    edgesLeft: {
      paddingLeft: "5%",
    },
    edgesRight: {
      paddingRight: "5%",
    },
    image: {
      borderRadius: "10px",
      border: "3px solid #000000",
    },
    imageContainer: {
      margin: "auto",
    },
  };
  return (
    <Grid container justify="center" align="center">
      <Grid container justify="center">
        <Grid item xs={12}>
          <h2 style={styles.title}>Your life will be much easier</h2>
          <h5>
            This is the paragraph where you can write more details about your
            product. Keep you user engaged by providing meaningful information.
          </h5>
        </Grid>
      </Grid>

      <Grid container>
        <Grid item xs={12} md={4} style={styles.edgesLeft}>
          <InfoArea
            icon={
              <LocalShippingIcon
                style={{
                  color: "green",
                  fontSize: "40px",
                  marginLeft: "10%",
                }}
              />
            }
            title={"This is going to be easy"}
            description={
              "Booking an order is easy. You are always kept in the loop. asdflkajsdflkasdasdfasdfas dfasdfasdfasdfasdfasdfasdfasdf asdfadsfasdfasdfasdfasdfasdfasd fadsfadsfasdfasdfasdfasdf"
            }
          />
          <InfoArea
            icon={
              <LocalShippingIcon
                style={{
                  color: "green",
                  fontSize: "40px",
                  marginLeft: "10%",
                }}
              />
            }
            title={"This is going to be easy"}
            description={
              "Booking an order is easy. You are always kept in the loop. asdflkajsdflkasdasdfasdfas dfasdfasdfasdfasdfasdfasdfasdf asdfadsfasdfasdfasdfasdfasdfasd fadsfadsfasdfasdfasdfasdf"
            }
          />
        </Grid>

        <Grid item xs={12} md={4} style={styles.imageContainer}>
          <img src={cars} style={styles.image} />
        </Grid>
        <Grid item xs={12} md={4} style={styles.edgesRight}>
          <InfoArea
            icon={
              <LocalShippingIcon
                style={{
                  color: "green",
                  fontSize: "40px",
                  marginLeft: "10%",
                }}
              />
            }
            title={"This is going to be easy"}
            description={
              "Booking an order is easy. You are always kept in the loop. asdflkajsdflkasdasdfasdfas dfasdfasdfasdfasdfasdfasdfasdf asdfadsfasdfasdfasdfasdfasdfasd fadsfadsfasdfasdfasdfasdf"
            }
          />
          <InfoArea
            icon={
              <LocalShippingIcon
                style={{
                  color: "green",
                  fontSize: "40px",
                  marginLeft: "10%",
                }}
              />
            }
            title={"This is going to be easy"}
            description={
              "Booking an order is easy. You are always kept in the loop. asdflkajsdflkasdasdfasdfas dfasdfasdfasdfasdfasdfasdfasdf asdfadsfasdfasdfasdfasdfasdfasd fadsfadsfasdfasdfasdfasdf"
            }
          />
        </Grid>
      </Grid>
    </Grid>
  );
};

export default ServiceSection;
