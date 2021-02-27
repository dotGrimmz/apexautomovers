import React, { useEffect, useState } from "react";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import InputLabel from "@material-ui/core/InputLabel";
import Divider from "@material-ui/core/Divider";
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
    backgroundColor: "grey",
    border: "5px black solid",
    borderRadius: "0px 0px 10px 10px",
    maxWidth: 470,
  },
  stepperHeader: {
    maxWidth: 470,
    backgroundColor: "black",
    border: "5px black solid",
    borderRadius: "10px 10px 0px 0px",
  },
};

const getSteps = () => {
  return ["Location Info", "Vehicle Details", "Confirmation"];
};

const VehicleSection = () => {
  const service = new ApexAutoMoversService();

  const [vehYear, setVehYear] = useState("");
  const [vehMake, setVehMake] = useState("");
  const [vehModel, setVehModel] = useState("");
  const [vehicleModels, setVehicleModels] = useState([]);
  const [vehicleMakes, setVehicleMakes] = useState([]);
  const [originZip, setOriginZip] = useState("");
  const [destinationZip, setDestinationZip] = useState("");
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [selectedDate, setSelectedDate] = useState(new Date());

  const steps = getSteps();

  // fix the icon buttons in the form area
  // complete step 3
  // style the drop downs. theyre currently hideous

  // https://material-ui.com/components/steppers/#stepper
  const [activeStep, setActiveStep] = useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
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
          makes.push(x.make);
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
  }, [vehMake]);

  const handleYearChange = (event) => {
    setVehYear(event.target.value);
    setVehicleMakes([]);
    setVehicleModels([]);
    setVehMake("");
    setVehModel("");
  };

  const getStepContent = (step) => {
    switch (step) {
      case 0:
        return (
          <Grid container justify="center" alignItems="center">
            <Grid item xs={12} style={{ margin: "1%" }} align="center">
              <FormControl>
                <TextField
                  style={styles.textfields}
                  required
                  variant="outlined"
                  label="Pick up Location Zip Code"
                  value={originZip}
                  size="small"
                  onChange={(e) => setOriginZip(e.target.value)}
                />
              </FormControl>
            </Grid>
            <Grid item xs={12} style={{ margin: "1%" }} align="center">
              <TextField
                style={styles.textfields}
                required
                variant="outlined"
                label="Pick up Destination Zip Code"
                value={destinationZip}
                size="small"
                onChange={(e) => setDestinationZip(e.target.value)}
              />
            </Grid>
            <Grid item xs={12} align="center">
              <KeyboardDatePicker
                disableToolbar
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
                disabled={originZip == "" || destinationZip == ""}
                variant="contained"
                color="primary"
                onClick={handleNext}
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
                  disabled={vehMake == "" || vehModel == ""}
                  variant="contained"
                  color="primary"
                  onClick={handleNext}
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
                  onClick={() => console.log("quote generated")}
                >
                  Generate Quote
                </Button>
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

export default VehicleSection;
