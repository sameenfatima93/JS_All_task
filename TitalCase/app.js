//___task_________1st latter capital_______________________
//_______mathode____one_______////////

// var fullName = prompt("enter your first name");
// fullName = fullName.slice(0,1).toUpperCase() + fullName.slice(1).toLowerCase() 
// console.log(fullName); 


//_______mathode____two_______////////

// var myName = "umra "
// var fatherName = "badar"
// myName = myName.slice(0,1).toUpperCase() + myName.slice(1).toLowerCase();
// fatherName = fatherName.slice(0,1).toUpperCase() + fatherName.slice(1).toLowerCase();
// console.log("my ful name is " + myName + fatherName);

//_______mathode____three_______////////

// var userName = "muHeEra"
// var firstChar = userName.slice(0,1).toUpperCase()
// var fullName = firstChar + userName.slice(1).toLowerCase()
// console.log(fullName);
// console.log(userName.length);

//____________mathode_foure______________///////

var fullName = prompt("enter your full name")
var result = ""; // "S"
var temp = "";
for (var i = 0; i < fullName.length; i++) {
    if (i === 0) {
        result += fullName[i].toUpperCase();
    } else if (fullName[i] === " ") {
        temp = fullName[i + 1].toUpperCase();
        result += fullName[i];
    }
    else {
        if (temp) {
            result += temp;
            temp = "";
        } else {

            result += fullName[i];
        }
    }
}
console.log(result);


//_________finding a word in the sentence___________
//____________task mathode____________________

var sentence = "My name is Umra."
var word = prompt("Enter a word to find:")
var flag = false
for(var i=0; i<sentence.length; i++){
    if(sentence.slice(i,i+4).toLowerCase() === word.toLowerCase()){
        console.log("Found");  
        flag = true
        break
    }
  
} 
  if (!flag) {
        console.log("sorry not in the list");
        
        
    }                 





///////__________task_____create the tital case__________________//

// ______mathod__one____________//

// var userInput = prompt("Enter Any Name or Sentance");
// var finalResult = "";
// var flagMathod = true
// for (var i = 0; i < userInput.length; i++) {
//     if(flagMathod){
//         finalResult += userInput[i].toUpperCase();
//         flagMathod = false
//     } else{
//         finalResult += userInput[i].toLowerCase();
//     }
//     if(userInput[i] === " "){
//         flagMathod = true

//     }
    
// }
// console.log(finalResult);

//______mathod__two___________


// var sentence = prompt("Enter a sentence:")// hello world
// var words = sentence.split(" ") // ["hello", "world"]
// // console.log(words);
// var titleCaseWords = []

// for (var i = 0; i < words.length; i++) {

//     var firstChar = words[i].slice(0, 1) //h
//     var otherChar = words[i].slice(1) //ello
//     firstChar = firstChar.toUpperCase()  //H
//     otherChar = otherChar.toLowerCase() //ello
//     titleCaseWords.push(firstChar + otherChar)

// }
// console.log(titleCaseWords);




////_______mathode___three____________//

// var fullName = prompt("enter your full name")
// var result = "";
// var temp = "";
// for (var i = 0; i < fullName.length; i++) {
//     if (i === 0) {
//         result += fullName[i].toUpperCase();
//     } else if (fullName[i] === " ") {
//         temp = fullName[i + 1].toUpperCase();
//         result += fullName[i];
//     }
//     else {
//         if (temp) {
//             result += temp;
//             temp = "";
//         } else {

//             result += fullName[i];
//         }
//     }
// }
// console.log(result);
