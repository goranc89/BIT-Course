var a = 12;
var month;

switch (a) {
    case 1:
        month = 'January';
        break;
    case 2:
        month = 'February';
        break;
    case 3:
        month = 'Mart';
        break;
    case 4:
        month = 'April';
        break;
    case 5:
        month = 'May';
        break;
    case 6:
        month = 'Jun';
        break;
    case 7:
        month = 'July';
        break;
    case 8:
        month = 'August';
        break;

    case 9:
        month = 'September';
        break;

    case 10:
        month = 'October';
        break;

    case 11:
        month = 'November';
        break;

    case 12:
        month = 'December';
        break;

    default:
        month = 'Input must be between 1 to 12';
}
console.log(month);
