import React, { useEffect, useState, useContext } from "react";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import ApexAutoMoversService from "../../service/ApexAutoMoversService";
import Grid from "@material-ui/core/Grid";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import StepContent from "@material-ui/core/StepContent";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import { KeyboardDatePicker } from "@material-ui/pickers";
import AAMContext from '../../context/AAMContext';
import LinearProgress from '@material-ui/core/LinearProgress';
import PlacesAutocomplete, {
  geocodeByAddress, getLatLng
} from "react-places-autocomplete";
import { Typography } from "@material-ui/core";

const getSteps = () => {
  return ["Location Info", "Vehicle Details", "Confirm", "Quote Confirmation Number"];
};
const service = new ApexAutoMoversService();

const VehicleSection = () => {
  const [vehYear, setVehYear] = useState("");
  const [vehMake, setVehMake] = useState("");
  const [vehModel, setVehModel] = useState("");
  const [vehicleModels, setVehicleModels] = useState([]);
  const [vehicleMakes, setVehicleMakes] = useState([]);
  const [originCity, setOriginCity] = useState("");
  const [destinationCity, setDestinationCity] = useState("");
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [selectedDate, setSelectedDate] = useState(new Date());

  const context = useContext(AAMContext);
  const { setLogisticsData, setVehData, setUserData, setOriginCoordinates,
    setDestinationCoordinates, toggleQuoteGenerated } = context;

  const steps = getSteps();
  const [activeStep, setActiveStep] = useState(0);

  const handleNext = (stepname) => {
    if (stepname === 'logistics') {


      let newSelectedDate = selectedDate.toDateString()

      setLogisticsData({
        originCity, destinationCity, 'selectedDate': newSelectedDate
      })
    } else if (stepname === 'vehData') {
      setVehData({ vehYear, vehMake, vehModel })
    }
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleGenerateQuote = () => {
    setUserData({
      fullName, email, phoneNumber
    });


    toggleQuoteGenerated()
    handleNext()
  }

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  useEffect(() => {
    const assignVehicleMakes = async () => {
      let makes = [];
      try {
        let response = await service.getVehMake(vehYear);
        response.data.map((x) => {
          return makes.push(x.make);

        });
        setVehicleMakes(makes);
      } catch (error) {
        console.error(error);
      }
    };
    if (vehYear !== "") assignVehicleMakes();
  }, [vehYear]);

  useEffect(() => {
    const assignVehicleModels = async () => {
      let models = [];
      try {
        let response = await service.getVehModel(vehYear, vehMake);
        response.data.map((x) => models.push(x.model));
        setVehicleModels(models);
      } catch (err) {
        console.error(err);
      }
    };
    if (vehMake !== "" && vehYear !== "") assignVehicleModels();
  }, [vehMake, vehYear]);

  const handleYearChange = (event) => {
    setVehYear(event.target.value);
    setVehicleMakes([]);
    setVehicleModels([]);
    setVehMake("");
    setVehModel("");
  };

  const handleOriginChange = (value) => {
    setOriginCity(value)
  }

  const handleSelectOriginChange = async (value) => {
    setOriginCity(value)
    geocodeByAddress(value)
      .then(results => getLatLng(results[0]))
      .then(latLng => {
        setOriginCoordinates(latLng)
      })
      .catch(error => console.error('Error', error));
  }

  const handleDestinationChange = value => {
    setDestinationCity(value)
  }



  const handleSelectDestinationChange = async (value) => {
    setDestinationCity(value)
    geocodeByAddress(value)
      .then(results => getLatLng(results[0]))
      .then(latLng => {
        setDestinationCoordinates(latLng)
      })
      .catch(error => console.error('Error', error));

  }

  const getStepContent = (step) => {
    switch (step) {
      case 0:
        return (
          <Grid container justify="center" alignItems="center">
            <PlacesAutocomplete
              value={originCity}
              onSelect={handleSelectOriginChange}
              onChange={handleOriginChange}
              debounce={1000}
            >
              {({
                getInputProps,
                suggestions,
                getSuggestionItemProps,
                loading
              }) => (
                  <Grid item xs={12} style={{ margin: "1%" }} align="center">
                    <FormControl>
                      <TextField
                        {...getInputProps()}
                        style={styles.textfields}
                        required
                        variant="outlined"
                        label="Origin City"
                        size="small"
                        name='originCity'
                      />
                      {loading && <LinearProgress />}
                      {suggestions.map((suggestion, index) => {
                        let style = suggestion.active ? { backgroundColor: 'white', cursor: 'pointer' }
                          : { backgroundColor: 'lightblue', cursor: 'pointer' };
                        return (
                          <div {...getSuggestionItemProps(suggestion, { style })} key={index}>
                            {suggestion.description}
                          </div>
                        )
                      })}
                    </FormControl>
                  </Grid>
                )}
            </PlacesAutocomplete>
            <PlacesAutocomplete
              value={destinationCity}
              onSelect={handleSelectDestinationChange}
              onChange={handleDestinationChange}
              debounce={1000}
            >
              {({
                getInputProps,
                suggestions,
                getSuggestionItemProps,
                loading
              }) => (
                  <Grid item xs={12} style={{ margin: "1%" }} align="center">
                    <FormControl>
                      <TextField
                        {...getInputProps()}
                        style={styles.textfields}
                        required
                        variant="outlined"
                        label="Destination City"
                        size="small"
                        name='destinationCity'
                      />
                      {loading && <LinearProgress />}
                      {suggestions.map((suggestion, index) => {
                        let style = suggestion.active ? { backgroundColor: 'white', cursor: 'pointer' }
                          : { backgroundColor: 'lightblue', cursor: 'pointer' };
                        return (
                          <div {...getSuggestionItemProps(suggestion, { style })} key={index}>
                            {suggestion.description}
                          </div>
                        )
                      })}
                    </FormControl>
                  </Grid>
                )}
            </PlacesAutocomplete>
            <Grid item xs={12} align="center">
              <KeyboardDatePicker
                disableToolbar
                autoOk
                variant="inline"
                disablePast
                format="MM/dd/yyyy"
                margin="normal"
                label="Pick Up Date"
                value={selectedDate}
                onChange={handleDateChange}
                KeyboardButtonProps={{
                  "aria-label": "change date",
                }}
              />
            </Grid>
            <Grid align="center">
              <Button
                disabled={originCity.length < 6 || destinationCity.length < 6}
                variant="contained"
                color="primary"
                onClick={() => handleNext('logistics')}
              >
                Next
              </Button>
            </Grid>
          </Grid>
        );

      case 1:
        return (
          <div>
            <Grid
              container
              direction="column"
              alignItems="center"
              justify="center"
            >
              <Grid item xs={12} style={styles.item}>
                <FormControl style={styles.formControl}>
                  <InputLabel>Year</InputLabel>
                  <Select
                    value={vehYear || ""}
                    onChange={(e) => handleYearChange(e)}
                  >
                    {years.map((x, index) => {
                      return (
                        <MenuItem key={index} value={x}>
                          {x}
                        </MenuItem>
                      );
                    })}
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12} tyle={styles.item}>
                <FormControl
                  style={styles.formControl}
                  disabled={vehYear === ""}
                >
                  <InputLabel>Make</InputLabel>
                  <Select
                    value={vehMake}
                    onChange={(e) => setVehMake(e.target.value)}
                  >
                    {vehYear !== "" &&
                      vehicleMakes.map((x, index) => {
                        return (
                          <MenuItem key={index} value={x}>
                            {x}
                          </MenuItem>
                        );
                      })}
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12} tyle={styles.item}>
                <FormControl
                  style={styles.formControl}
                  disabled={vehMake === ""}
                >
                  <InputLabel>Model</InputLabel>
                  <Select
                    value={vehModel}
                    onChange={(e) => setVehModel(e.target.value)}
                  >
                    {vehYear !== "" &&
                      vehMake !== "" &&
                      vehicleModels.map((x, index) => {
                        return (
                          <MenuItem key={index} value={x}>
                            {x}
                          </MenuItem>
                        );
                      })}
                  </Select>
                </FormControl>
              </Grid>
            </Grid>
            <Grid container justify="space-between">
              <Grid item>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={handleBack}
                >
                  Back
                </Button>
              </Grid>
              <Grid item>
                <Button
                  disabled={vehMake === "" || vehModel === ""}
                  variant="contained"
                  color="primary"
                  onClick={() => handleNext('vehData')}
                >
                  Next
                </Button>
              </Grid>
            </Grid>
          </div>
        );

      case 2:
        return (
          <div>
            <Grid container direction="column">
              <Grid item style={{ margin: "1%" }} align="center">
                <TextField
                  style={styles.textfields}
                  required
                  variant="outlined"
                  label="Full Name"
                  value={fullName}
                  size="small"
                  onChange={(e) => setFullName(e.target.value)}
                />
              </Grid>
              <Grid item style={{ margin: "1%" }} align="center">
                <TextField
                  style={styles.textfields}
                  required
                  variant="outlined"
                  label="E-mail"
                  value={email}
                  size="small"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </Grid>
              <Grid item style={{ margin: "1%" }} align="center">
                <TextField
                  style={styles.textfields}
                  required
                  variant="outlined"
                  label="Phone Number"
                  value={phoneNumber}
                  size="small"
                  onChange={(e) => setPhoneNumber(e.target.value)}
                />
              </Grid>
            </Grid>
            <Grid container justify="space-between">
              <Grid item>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={handleBack}
                >
                  Back
                </Button>
              </Grid>
              <Grid item>
                <Button
                  disabled={
                    fullName === "" || email === "" || phoneNumber === ""
                  }
                  variant="contained"
                  color="primary"
                  onClick={handleGenerateQuote}
                >
                  Generate Quote
                </Button>
              </Grid>
            </Grid>
          </div>
        );
      case 3: return (<div>
        <Grid container >
          <Grid item xs={12}>
            <Typography variant='h5' align='center'>
              {/* // youre going to display a confirmatio number that comes back from the back end that the end user can ref  */}
              <b> Thank You for Choosing Apex Auto Movers!</b>
            </Typography>
            <Typography variant='h6' align='center'>
              Confirmation Number: <b>12343423</b>

            </Typography>
          </Grid>
        </Grid>

      </div>

      );
      default:
        return "unknown step";
    }
  };

  return (
    <Grid container>
      <Grid item style={styles.stepperHeader} xs={12} align="center">
        <p style={styles.cardHeader}>Get a Quote Now</p>
      </Grid>
      <Grid item xs={12}>
        <Stepper
          activeStep={activeStep}
          orientation="vertical"
          style={styles.container}
        >
          {steps.map((label, index) => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
              <StepContent>{getStepContent(index)}</StepContent>
            </Step>
          ))}
        </Stepper>
      </Grid>
    </Grid>
  );
};

const years = [
  "1990",
  "1991",
  "1992",
  "1993",
  "1994",
  "1995",
  "1996",
  "1997",
  "1998",
  "1999",
  "2000",
  "2001",
  "2002",
  "2003",
  "2004",
  "2005",
  "2006",
  "2007",
  "2008",
  "2009",
  "2010",
  "2011",
  "2012",
  "2013",
  "2014",
  "2015",
  "2016",
  "2017",
  "2018",
  "2019",
  "2020",
  "2021",
];


const styles = {
  card: {
    maxWidth: "cover",
    margin: "auto",
    backgroundColor: "transparent",
  },
  cardHeader: {
    fontFamily: "Impact, fantasy",
    fontSize: "34px",
    margin: "0%",
    padding: "0%",
  },
  divider: {
    maxWidth: "80%",
    margin: "auto",
    marginBottom: "10%",
  },
  title: {
    margin: "auto",
  },
  item: {
    margin: "3%",
  },
  formControl: {
    margin: "2%",
    minWidth: 120,
  },
  textfields: {
    minWidth: 250,
  },
  container: {
    border: "5px black solid",
    borderRadius: "0px 0px 10px 10px",
    maxWidth: 470,
    backgroundColor: "#343434",
    background:
      "radial-gradient(ellipse at center," +
      "#FFFFFF" +
      " 0," +
      "#3f51b5" +
      " 100%)",
  },
  stepperHeader: {
    maxWidth: 470,
    backgroundColor: "black",
    border: "5px black solid",
    borderRadius: "10px 10px 0px 0px",
  },
};


export default VehicleSection;
