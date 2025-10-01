// var subject1 = parseInt(prompt("Enter the marks of subject 1"))
// var subject2 = parseInt(prompt("Enter the marks of subject 2"))
// var subject3 = parseInt(prompt("Enter the marks of subject 3"))
// var subject4 = parseInt(prompt("Enter the marks of subject 4"))

// var totalNum = subject1 + subject2 + subject3 + subject4
// var average = totalNum / 4

// console.log(totalNum,average);

// var result= ""
// if(average >= 50){
//     result += "Congratulations! You passed with an average grade of "+ average + "."
// }else{
//     result += "Unfortunetely You failed with an average grade of "+ average + "."
// }
// alert(result)

function calculateAverage() {

    var subject1 = parseInt(document.getElementById("subject1").value)
    var subject2 = parseInt(document.getElementById("subject2").value)
    var subject3 = parseInt(document.getElementById("subject3").value)
    var subject4 = parseInt(document.getElementById("subject4").value)

    var totalNum = subject1 + subject2 + subject3 + subject4
    var average = totalNum / 4

    console.log(totalNum, average);

    var result = ""
    if (average >= 50) {
        result += "Congratulations! You passed with an average grade of " + average + "."
    } else {
        result += "Unfortunetely You failed with an average grade of " + average + "."
    }
    document.getElementById("result").innerHTML = result
}





function palindromeChecker() {
    var word = document.getElementById("word").value // ciiviic
    console.log(word);
    
    var isPalindrome = false;

    for (var i = 0; i < (word.length - 1) / 2; i++) {
        // console.log(word[i]);
        // console.log(word.charAt(word.length-1-i));
        var startingLetters = word[i]
        var endingLetters = word.charAt(word.length - 1 - i)

        if (startingLetters === endingLetters) {
            isPalindrome = true
        }
    }
    var statement =""
    if (isPalindrome) {
         statement +="It's a Palindrome!";
         

    } else {
        statement +="It's not a Palindrome!";

    }
        document.getElementById("statement").innerHTML = statement
        document.getElementById("word").value = ""
}