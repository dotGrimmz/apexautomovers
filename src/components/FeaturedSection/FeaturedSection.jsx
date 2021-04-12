import React, { useState, useCallback, useRef, useEffect } from "react";
import GridItem from "../Grid/GridItem";
import GridContainer from "../Grid/GridContainer";
import featuresStyle from "../../assets/jss/featuresStyle";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import ApexAutoMoversService from "../../service/ApexAutoMoversService";
import PlacesAutocomplete, {
  geocodeByAddress,
  geocodeByPlaceId,
  getLatLng,
} from "react-places-autocomplete";

import {
  GoogleMap,
  useLoadScript,
  Marker,
  InfoWindow,
} from "@react-google-maps/api";

const useStyles = makeStyles(featuresStyle);
// const libraries = ["places"];
const libraries = ["react-places-autocomplete", "places"];
const FeaturedSection = (props) => {
  const classes = useStyles();
  const [origin, setOrigin] = useState("");
  const [destination, setDestination] = useState("");
  const [originPlaceID, setOriginPlaceID] = useState("");
  const [destinationPlaceID, setDestinationPlaceID] = useState("");
  const [loading, setLoading] = useState(false);

  const [center, setCenter] = useState({
    lat: 26.27932,
    lng: -80.247231,
  });
  const [travelData, setTravelData] = useState({
    originLong: null,
    originLat: null,
    destinationLong: null,
    destinationLat: null,
  });
  const [markers, setMarkers] = useState([]);
  const service = new ApexAutoMoversService();

  const handleCalculateDistance = async () => {
    console.log({ ...travelData }, " travel data ");
    try {
      let response = await service.getDirections();
      console.log(response, "calc distance api");
    } catch (err) {
      console.error(err);
      console.log("this failed");
    }
  };

  useEffect(() => {
    const setCenterCoordinates = () => {
      if (
        travelData.originLat &&
        travelData.originLong &&
        travelData.destinationLat &&
        travelData.destinationLong
      ) {
        let centeredLat =
          travelData.originLat > travelData.destinationLat
            ? travelData.originLat + travelData.destinationLat / 2
            : travelData.destinationLat + travelData.originLat / 2;
        let centeredLong =
          travelData.originLong > travelData.destinationLong
            ? travelData.originLong + travelData.destinationLong / 2
            : travelData.originLong + travelData.destinationLong / 2;
        setCenter({
          lat: centeredLat,
          lng: centeredLong,
        });
        console.log("this triggered because we have new long lat points");
      } else {
        setCenter({
          lat: travelData.originLat || 26.27932,
          lng: travelData.originLong || -80.247231,
        });
      }
    };

    setCenterCoordinates();
  }, [travelData]);
  const mapRef = useRef();
  const onMapLoad = useCallback(function callback(map) {
    // const bounds = new window.google.maps.LatLngBounds();
    // map.fitBounds(bounds);
    // setMap(center);
    mapRef.current = map;
  }, []);

  // console.log(center, "center coordinates");

  const handleSetMakers = (lat, long) => {
    setMarkers();
  };

  //   https://maps.googleapis.com/maps/api/directions/json?
  // origin=sydney,au&destination=perth,au
  // &waypoints=via:-37.81223%2C144.96254%7Cvia:-34.92788%2C138.60008
  // &key=YOUR_API_KEY

  const handleOriginValueChange = (value) => {
    setOrigin(value);
  };

  const handleDestinationChange = (value) => {
    setDestination(value);
  };

  const handleOriginSelected = async (value) => {
    setLoading(true);
    setOrigin(value);

    try {
      let originData = await geocodeByAddress(value);
      console.log(originData, "origin  data");
      let originLatLongObj = await getLatLng(originData[0]);
      originLatLongObj.lng = originLatLongObj.lng;
      originLatLongObj.lat = originLatLongObj.lat;
      setTravelData({
        ...travelData,
        originLong: originLatLongObj.lng,
        originLat: originLatLongObj.lat,
      });

      setOriginPlaceID(originData[0].place_id);
    } catch (err) {
      console.error(err);
      console.log("origin selected failed");
    } finally {
      setLoading(false);
    }
  };
  const handleDestinationSelected = async (value) => {
    setLoading(true);
    setDestination(value);
    try {
      let destinationData = await geocodeByAddress(value);
      let destinationLatLongObj = await getLatLng(destinationData[0]);
      destinationLatLongObj.lng = destinationLatLongObj.lng;
      destinationLatLongObj.lat = destinationLatLongObj.lat;
      setTravelData({
        ...travelData,
        destinationLong: destinationLatLongObj.lng,
        destinationLat: destinationLatLongObj.lat,
      });
      setDestinationPlaceID(destinationData[0].place_id[3]);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const onUnmount = useCallback(function callback(map) {
    console.log(center);
    // setMap(center);
  }, []);

  // const { isLoaded, loadError } = useLoadScript({
  //   id:
  //     "https://maps.googleapis.com/maps/api/js?key=AIzaSyDZztUmOUlMh9YRZTEQ3jkJeTCt8tt0AYw&libraries=places",
  //   googleMapsApiKey: "AIzaSyBeupeH0c0gpcNrQiF86VNNIBaUATEuHW8",
  //   libraries,
  // });

  const mapContainerStyle = {
    width: "400px",
    height: "400px",
    border: "2px solid darkblue",
  };

  const isLoaded = true;

  return (
    <div className="cd-section">
      <div className={classes.container}>
        <div className={classes.features3}>
          <GridContainer>
            <GridItem xs={12} md={6}>
              <div>
                {isLoaded ? (
                  <>
                    <GoogleMap
                      mapContainerStyle={mapContainerStyle}
                      center={center}
                      zoom={10}
                      onLoad={onMapLoad}
                      // onUnmount={onUnmount}
                      onClick={(e) => console.log(e)}
                    >
                      {/* Child components, such as markers, info windows, etc. */}

                      {travelData.originLong !== null &&
                        travelData.originLong !== null && (
                          <Marker
                            key={1}
                            position={{
                              lat: travelData.originLat,
                              lng: travelData.originLong,
                            }}
                          />
                        )}
                      {travelData.originLong !== null &&
                        travelData.originLong !== null && (
                          <Marker
                            key={2}
                            position={{
                              lat: travelData.destinationLat,
                              lng: travelData.destinationLong,
                            }}
                          />
                        )}
                      <></>
                    </GoogleMap>
                  </>
                ) : (
                  <></>
                )}
              </div>
            </GridItem>
            <GridItem xs={12} md={6}>
              <h2 className={classes.title}>
                The Fastest &amp; Easiest Way to Ship Your Vehicle
              </h2>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <PlacesAutocomplete
                    value={origin}
                    onChange={handleOriginValueChange}
                    onSelect={handleOriginSelected}
                  >
                    {({
                      getInputProps,
                      suggestions,
                      getSuggestionItemProps,
                      loading,
                    }) => (
                      <>
                        <TextField
                          {...getInputProps()}
                          variant="outlined"
                          label="Origin"
                          name="origin"
                          fullWidth
                        />
                        {loading && <div> ...loading</div>}
                        {suggestions.map((suggestion, index) => {
                          let style = suggestion.active
                            ? {
                                backgroundColor: "lightblue",
                                cursor: "pointer",
                              }
                            : { backgroundColor: "white", cursor: "pointer" };
                          return (
                            <div
                              key={index}
                              onClick={() =>
                                console.log(
                                  suggestion.description,
                                  "suggestion description"
                                )
                              }
                              {...getSuggestionItemProps(suggestion, {
                                style,
                              })}
                            >
                              {suggestion.description}
                            </div>
                          );
                        })}
                      </>
                    )}
                  </PlacesAutocomplete>
                </Grid>
                <Grid item xs={12}>
                  {/* // on select id like the long lat info to be thrown into a
                  marker */}
                  <PlacesAutocomplete
                    value={destination}
                    onChange={handleDestinationChange}
                    onSelect={handleDestinationSelected}
                  >
                    {({
                      getInputProps,
                      suggestions,
                      getSuggestionItemProps,
                      loading,
                    }) => (
                      <>
                        <TextField
                          {...getInputProps()}
                          variant="outlined"
                          label="Destination"
                          name="destination"
                          fullWidth
                        />
                        {loading && <div> ...loading</div>}
                        {suggestions.map((suggestion, index) => {
                          let style = suggestion.active
                            ? {
                                backgroundColor: "lightblue",
                                cursor: "pointer",
                              }
                            : { backgroundColor: "white", cursor: "pointer" };
                          return (
                            <div
                              key={index}
                              onClick={() =>
                                console.log(
                                  suggestion,
                                  "this is the selected suggestion"
                                )
                              }
                              {...getSuggestionItemProps(suggestion, {
                                style,
                              })}
                            >
                              {suggestion.description}
                            </div>
                          );
                        })}
                      </>
                    )}
                  </PlacesAutocomplete>
                </Grid>
                <Grid item xs={12} md={6} align="center">
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={() => handleCalculateDistance()}
                  >
                    Calculate Distance
                  </Button>
                </Grid>
              </Grid>
            </GridItem>
          </GridContainer>
        </div>
      </div>
    </div>
  );
};

export default FeaturedSection;
