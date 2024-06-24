function createProject(desc, progLang, gitUrl, devStatus) {
  return {
    description: desc,
    programingLanguage: progLang,
    gitRepository: gitUrl,
    developmentStatus: devStatus,
    printRepository() {
      return gitUrl;
    },
    isJavaScript: function () {
      return progLang == "Java Script";
    },
    isInDevelopment() {
      return devStatus;
    },
  };
}
var project = createProject(
  "firstProject",
  "Java Script",
  "https://github.com/jovanath",
  true
);
console.log(project);
project.printRepository();
console.log(project.printRepository());
project.isJavaScript();
console.log(project.isJavaScript());
project.isInDevelopment();
console.log(project.isInDevelopment());
