import React from "react";
import Grid from "@material-ui/core/Grid";
import InfoArea from "./InfoArea";
import LocalShippingIcon from "@material-ui/icons/LocalShipping";
import cars from "../../images/carsontruckbed.jpg";

const ServiceSection = (props) => {
  const { serviceSectionRef } = props;
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
    image: {
      borderRadius: "10px",
      boxShadow: "1px 2px 2px 1px  #000000",
      height: "auto",
      maxWidth: "100%",
    },
    imageContainer: {
      margin: "auto",
    },
    container: {
      padding: "5%",
    },
    divider: {
      maxWidth: "80%",
      margin: "auto",
      color: "red",
    },
  };


  return (
    <Grid
      container
      justify="center"
      align="center"
      style={styles.container}
      inputprops={{ 'id': 'services-section' }}
      ref={serviceSectionRef}
    >
      <Grid container justify="center">
        <Grid item xs={12}>
          <h2 style={styles.title} >Your life will be much easier</h2>
          <h5>
            This is the paragraph where you can write more details about your
            product. Keep you user engaged by providing meaningful information.
          </h5>
        </Grid>
      </Grid>
      <Grid container justify="center">
        <Grid item xs={12} md={12} lg={3}>
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
            description={"go out like im ruadsfasd"}
          />
        </Grid>
        <Grid item xs={12} md={12} lg={6} style={styles.imageContainer}>
          <img alt='carsloaded' src={cars} style={styles.image} />
        </Grid>
        <Grid item xs={12} md={12} lg={3} style={styles.edgesRight}>
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
            right
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
            right
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
