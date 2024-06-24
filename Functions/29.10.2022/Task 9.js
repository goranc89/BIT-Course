9. Write a function that replaces spaces in a string with provided separator. If separator is not provided,
use “-” (dash) as the default separator.
    "My random string", "_" -> "My_random_string"
    "My random string", "+" -> "My+random+string"
    "My random string" -> "My-random-string"
*/

function spaces (sentence, separator){
    var newSentence = "";
    if (separator === undefined){
        separator = "-"
    }
    for (var i = 0; i < sentence.length; i++){
        if(sentence[i] === " "){
            newSentence += separator;
        }else {
            newSentence += sentence[i];
        }
    }
    return newSentence;
}

console.log(spaces("My random string", "*"));