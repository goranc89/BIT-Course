var a = 17;
var day;

switch (a) {
    case 1:
    case 2:
    case 3:
    case 4:
    case 5:
        day = 'weekday';
        break;
    case 6:
    case 7:
        day = 'weekend';
        break;
    default:
        day = 'Input must be between 1 to 7';
}
console.log(day);