var club = "FC Porto";
var result = "";

switch (club) {
  case "Torino":
  case "Milan":
  case "Juventus":
    result = "Seria A";
    break;
  case "Fullham":
  case "Brighton":
    result = "Premier League";
    break;
  default:
    result = "Don't know";
    break;
}
console.log(result);
