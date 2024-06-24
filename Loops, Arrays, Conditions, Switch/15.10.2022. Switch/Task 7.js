var city = "Verona";

switch (city) {
    case "Beograd":
    case "Novi Sad":
    case "Nis":
    case "Obrenovac":
    case "Surdulica":
        console.log("Serbia");
        break;
    case "London":
    case "Aberdeen":
    case "Birmminghem":
    case "Liverpool":
    case "Manchester":
        console.log("United Kingdom");
        break;
    case "Sidney":
    case "Perth":
    case "Canberra":
    case "Melbourne":
    case "Brisbane":
        console.log("Australia");
        break;
    case "Paris":
    case "Lyon":
    case "Nice":
    case "Dijon":
    case "Marseille":
        console.log("France");
        break;
    case "Rome":
    case "Milan":
    case "Torino":
    case "Bologna":
    case "Verona":
        console.log("Italy");
        break;
    default:
        console.log("Please choose a different city");
        break;
}
