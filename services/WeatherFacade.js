export default class WeatherFacade {
    static BASE_URL = "http://api.openweathermap.org";
    static API_KEY = "<YOUR-API-KEY...>";
    static UNITS = "metric";
    static async callGeoLocalisatorXname(name) {
        const response = await fetch(`${this.BASE_URL}/geo/1.0/direct?q=${name}&appid=${this.API_KEY}`);
        const answer = await response.json();
        return {
            lat: answer[0].lat,
            lon: answer[0].lon,
            name: answer[0].name,
        };
    }

    static async callWeatherXname(name) {
        const geoCall = await this.callGeoLocalisatorXname(name);
        const weatherCall = await fetch(`${this.BASE_URL}/data/2.5/onecall?lat=${geoCall.lat}&lon=${geoCall.lon}&appid=${this.API_KEY}&units=${this.UNITS}`);
        let response = await weatherCall.json();
        response.current.city = geoCall.name;
        return response;
   }
}