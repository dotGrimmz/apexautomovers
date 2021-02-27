import axios from "axios";

class ApexAutoMoversService {
  constructor(params) {
    if (params) {
      this.instance = axios.create({
        headers: params.headers
          ? params.headers
          : {
              "Access-Control-Allow-Origin": "*",
              "Content-Type": "multipart/form-data",
            },
      });
    } else this.instance = axios;
  }

  getDirections(originPlaceId, destinationPlaceId) {
    return this.instance.get(`https://maps.googleapis.com/maps/api/directions/json?origin=${originPlaceId}&destination=${destinationPlaceId}&key=AIzaSyDZztUmOUlMh9YRZTEQ3jkJeTCt8tt0AYw`)
  }

 getVehMake(year) {
   return this.instance.get(`https://done.ship.cars/makes/?year=${year}`)
 }

 getVehModel(year, make) {
   return this.instance.get(`https://done.ship.cars/models/?year=${year}&make=${make}`)
 }
  // vehicles/getmodelsformakeyear/make/honda/modelyear/2015?format=json


  // authenticateCredentials(body) {
  //   console.log(body, "reporting body from service in UI");
  //   return this.instance.post("http://localhost:5000/ccb/login", body);
  // }


}

export default ApexAutoMoversService;