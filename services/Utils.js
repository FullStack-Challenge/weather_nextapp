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
            case 'Haze':
                base = base.replace('**', 'wind')
            break;
        }
        return base;
    }

    static covertNumToWeekDay(num) {
        switch (num) {
            case 0:
                return 'Sun';
            case 1:
                return 'Mon';
            case 2:
                return 'Tue';
            case 3:
                return 'Wed';
            case 4:
                return 'Thu';
            case 5:
                return 'Fri';
            case 6:
                return 'Sat';
        }
        return undefined;
    }
}