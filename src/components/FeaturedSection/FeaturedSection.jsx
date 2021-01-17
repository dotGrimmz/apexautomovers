import React, { useState, useCallback, useRef } from "react";
import GridItem from "../Grid/GridItem";
import GridContainer from "../Grid/GridContainer";
import featuresStyle from "../../assets/jss/featuresStyle";
import { makeStyles } from "@material-ui/core/styles";
import {
  GoogleMap,
  useLoadScript,
  Marker,
  InfoWindow,
} from "@react-google-maps/api";

const useStyles = makeStyles(featuresStyle);
const libraries = ["places"];
const FeaturedSection = (props) => {
  const classes = useStyles();
  const [map, setMap] = useState(null);
  const mapRef = useRef();
  const onLoad = useCallback(function callback(map) {
    const bounds = new window.google.maps.LatLngBounds();
    map.fitBounds(bounds);
    setMap(map);
  }, []);

  const onUnmount = useCallback(function callback(map) {
    setMap(null);
  }, []);

  const { isLoaded, loadError } = useLoadScript({
    id:
      "https://maps.googleapis.com/maps/api/js?key=AIzaSyDZztUmOUlMh9YRZTEQ3jkJeTCt8tt0AYw&libraries=places",
    googleMapsApiKey: "AIzaSyDu9B4XTCAWCnbjRQLcoJXJg-iRzvRwT1A",
    libraries,
  });

  const mapContainerStyle = {
    width: "400px",
    height: "400px",
    border: "2px solid darkblue",
  };

  const center = {
    lat: 26.27932,
    lng: -80.247231,
  };
  return (
    <div className="cd-section">
      <div className={classes.container}>
        <div className={classes.features3}>
          <GridContainer>
            <GridItem xs={12} sm={6}>
              <div className={classes.phoneContainer}>
                {isLoaded ? (
                  <>
                    {/* <h1>
                      AAM{" "}
                      <span role="img" aria-label="road">
                        🛣
                      </span>
                    </h1> */}
                    <GoogleMap
                      mapContainerStyle={mapContainerStyle}
                      center={center}
                      zoom={10}
                      //   onLoad={onLoad}
                      //   onUnmount={onUnmount}
                      onClick={(e) => console.log(e)}
                    >
                      {/* Child components, such as markers, info windows, etc. */}
                      <></>
                    </GoogleMap>
                  </>
                ) : (
                  <></>
                )}
              </div>
            </GridItem>
            <GridItem xs={12} sm={6} md={6}>
              <h2 className={classes.title}>
                The Fastest &amp; Easiest Way to Ship Your Vehicle
              </h2>
            </GridItem>
            {/* <GridItem xs={12} sm={6} md={6}>
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
            </GridItem> */}
          </GridContainer>
        </div>
      </div>
    </div>
  );
};

export default FeaturedSection;
