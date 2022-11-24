var a = 13;
var season;

switch (a) {
    case 1:
    case 2:
        season = 'Winter';
        break;
    case 3:
    case 4:
    case 5:
        season = 'Spring';
        break;
    case 6:
    case 7:
    case 8:
        season = 'Summer';
        break;
    case 9:
    case 10:
    case 11:
        season = 'autumn';
        break;
    case 12:
        season = 'Winter';
        break;
    default:
        season = 'Input must be between 1 to 12';
}
console.log(season);