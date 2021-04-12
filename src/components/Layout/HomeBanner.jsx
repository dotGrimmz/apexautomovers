import React from 'react';
import GridContainer from '../Grid/GridContainer';
import GridItem from '../Grid/GridItem';
import VehicleSection from '../VehicleSection/VehicleSection';




const HomeBanner = (props) => {
    const { handleQuoteScrollIntoView } = props;

    return (
        <GridContainer>
            <GridItem xs={12} md={6}>
                <h1 style={styles.title}>
                    Top Rated Vehicle Shipping Services in the South East
              </h1>
                <h4>Why choosing us will save you the most</h4>
                <br />
            </GridItem>
            <GridItem xs={12} md={6} style={{ margin: "auto" }}>
                <VehicleSection handleQuoteScrollIntoView={handleQuoteScrollIntoView} />
            </GridItem>
        </GridContainer>
    )
}

const styles = {
    title: {
        fontFamily: "Impact, fantasy",
        fontSize: "44px",
    },
};

export default HomeBanner