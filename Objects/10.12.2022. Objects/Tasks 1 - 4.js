// 1. Create an object that represents your favourite coffee. Please include coffee name,
// strength, flavour, milk, sugar, … everything you like!

var coffee = {
  name: "espresso",

  intensity: "Mild",

  flavour: "Classic",

  sugar: "Free",

  milk: "No",
};

console.log(coffee);

// 2. Create an object that represents your favourite movie. Please include title, actors,
// director, genre, popularity.

var movie = {
  name: "Dear John",

  genre: "drama",

  actors: "Channing Tatum, Amanda Seyfried",

  director: "Lasse Hallström",

  popularity: "85%",
};

console.log(movie);

// 3. Write a function that creates an object that represents a project. Each project is
// described by: description, programming language, git repository, boolean status that
// says if the project is in development or not. Add a method that prints out the project&#39;s
// repository, a method that checks if the project is written in JavaScript as well as a
// method that checks if the project is in development or not.

function createProject(
  description,
  programmingLanguage,
  gitRepo,
  booleanStatus
) {
  var project = {
    description: "Web shop",
    programmingLanguage: "JS",
    gitRepo: "BIT-PP",
    booleanStatus: function () {
      if (booleanStatus === true) {
        return "The project is finished.";
      } else {
        return "The project is in progress.";
      }
    },

    writtenLanguage: function () {
      if (project.programmingLanguage === "JavaScript") {
        return (
          "Yes, project is written in " + project.programmingLanguage + "."
        );
      } else {
        return "No, project isn't written in JS.";
      }
    },
  };

  return project;
}

var project = createProject(
  "Project solve problem with ...",
  "JavaScript",
  "gitURL",
  false
);
console.log(project);
("console.log(project.writtenLanguage());");
console.log(project.booleanStatus());

// 4. Write a function that creates an object that represents a culinary recipe. Each recipe is
// described by: name, type of cuisine, complexity (value from 1 to 5), list of ingredients,
// preparing time, preparing instruction.
// ○ Add a method that prints out all the ingredients necessary for the meal
// preparation.
// ○ Add a method that checks if a meal can be prepared in under 15 minutes.
// ○ Add a method that changes the type of cuisine to the given value.
// ○ Add a method that delete a given ingredient from the list of ingredients.

function createRecipe(name, cuisine, complex, ingrid, time, instruction) {
  var recipe = {
    name: name,
    typeOfCuisine: cuisine,
    complexity: complex,
    ingridients: ingrid,
    preparingTime: time,
    preparingInstruction: instruction,
    printAllIngridients: function () {
      return recipe.ingridients;
    },
    canBePrepareFor15Min: function () {
      if (recipe.time <= 15) {
        return "Yes, meal can be ready for 15 min.";
      } else {
        return "No, meal can't be finished for 15 min.";
      }
    },
    changeCuisine: function (cuis) {
      return (recipe.typeOfCuisine = cuis);
    },
    deleteIngridient: function (ing) {
      var newIngrid = [];

      for (i = 0; i < recipe.ingridients.length; i++) {
        if (recipe.ingridients[i] !== ing) {
          newIngrid[newIngrid.length] = recipe.ingridients[i];
        }
      }
      recipe.ingridients = newIngrid;
    },
  };
  return recipe;
}

var beanSoup = createRecipe(
  "Bean soup",
  "Serbian",
  "Easy",
  ["Bean", "Water", "Salt", "Meat", "Onion"],
  30,
  "Mix it all and cook"
);

console.log(beanSoup);
console.log(beanSoup.printAllIngridients());
beanSoup.changeCuisine("France");
beanSoup.deleteIngridient("Salt");
console.log(beanSoup);
console.log(beanSoup.printAllIngridients());
console.log(beanSoup.canBePrepareFor15Min());
console.log(createRecipe);
