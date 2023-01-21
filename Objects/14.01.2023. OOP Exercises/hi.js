"use strict";
(function () {
  console.log("Hi");
  try {
  } catch (error) {
    console.log("An error occurred: " + error);
  }
})();

(function () {
  "use strict";
  try {
    console.log("Hi");
  } catch (error) {
    console.error(error);
  }
})();
