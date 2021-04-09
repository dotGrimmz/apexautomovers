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



}

export default ApexAutoMoversService;