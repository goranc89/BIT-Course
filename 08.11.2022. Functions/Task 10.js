/*The body mass index (BMI) is the ratio of the weight of a person (in kilograms) to the
square of the height (in meters). Write a function that takes two parameters, weight and
height, computes the BMI, and prints the corresponding BMI category:
 Starvation: less than 15
 Anorexic: less than 17.5
 Underweight: less than 18.5
 Ideal: greater than or equal to 18.5 but less than 25
 Overweight: greater than or equal to 25 but less than 30
 Obese: greater than or equal to 30 but less than 40
 Morbidly obese: greater than or equal to 40*/

function BMI(weight, height) {
  index = weight / (height * height);
  let result = "";
  switch (true) {
    case index < 15:
      result = "Starvation";
      break;
    case index < 17.5:
      result = "Anorexic";
      break;
    case index < 18.5:
      result = "Underweight";
      break;
    case index >= 18.5 && index < 25:
      result = "Ideal";
      break;
    case index >= 25 && index < 30:
      result = "Overweight";
      break;
    case index >= 30 && index < 40:
      result = "Obese";
      break;
    case index >= 40:
      result = "Morbildly obese";
      break;
  }
  return result;
}

console.log(BMI(85, 1.85));
