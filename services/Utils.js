export default class Utils {
    static getImagePath(base, imageType) {
        switch (imageType) {
            case 'Rain':
            case 'Drizzle':
                base = base.replace("**", "rain");
            break;
            case 'Clouds':
                base = base.replace("**", "cloudy");
            break;
            case 'Thunderstorm':
                base = base.replace("**", "thunderstorm");
            break;
            case 'Snow':
                base = base.replace("**", "snow");
            break;
            case 'Clear':
                base = base.replace("**", "sun");
            break;
        }
        return base;
    }
}