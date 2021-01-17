import React from "react";
import GridItem from "../Grid/GridItem";
import GridContainer from "../Grid/GridContainer";
import featuresStyle from "../../assets/jss/featuresStyle";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(featuresStyle);

const FeaturedSection = (props) => {
  const classes = useStyles();
  return (
    <div className="cd-section">
      <div className={classes.container}>
        <div className={classes.features3}>
          <GridContainer>
            <GridItem xs={12} sm={6}>
              <div className={classes.phoneContainer}>
                this is where the map will go
                {/* <img src={iphone} alt="..." /> */}
              </div>
            </GridItem>
            <GridItem xs={12} sm={6} md={6}>
              <h2 className={classes.title}>
                The Fastest &amp; Easiest Way to Ship Your Vehicle
              </h2>
            </GridItem>
            <GridItem xs={12} sm={6} md={6}>
              <h2 className={classes.title}>
                The Fastest &amp; Easiest Way to Ship Your Vehicle
              </h2>
            </GridItem>
            <GridItem xs={12} sm={6} md={6}>
              <h2 className={classes.title}>
                The Fastest &amp; Easiest Way to Ship Your Vehicle
              </h2>
            </GridItem>
            <GridItem xs={12} sm={6} md={6}>
              <h2 className={classes.title}>
                The Fastest &amp; Easiest Way to Ship Your Vehicle
              </h2>
            </GridItem>
            <GridItem xs={12} sm={6} md={6}>
              <h2 className={classes.title}>
                The Fastest &amp; Easiest Way to Ship Your Vehicle
              </h2>
            </GridItem>
          </GridContainer>
        </div>
      </div>
    </div>
  );
};

export default FeaturedSection;
