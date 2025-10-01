//__________sir ghous ahmad task_
/////______making ka game had or tails________________

// var plyer1 = "usman"
// var plyer2 = "Sami"
// var usmanChoice = "had"




//______pasword generator______________

// var str = "abcdefghijklmnopqrstuvwxyz"
// var num = 1234567890
// var specialChr = "%#@*&^!()*&^"
// var capitalLatr = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"

// var password = str + num + specialChr + capitalLatr
// var readyPassword = ""
// var passwordLenght = 10
// for (var i = 0; i < passwordLenght; i++) {
//     var generate = Math.floor(Math.random() * password.length)
//     readyPassword += password[generate]
    
// }
// console.log("generate password : " + readyPassword);

//_____generate password with fucntion________

function ganeratePassword (lenght){
    var str = "sdfnbhjurkjsor"
    var int = 23598760543109
    var specialChre =  "#$^&*&^&%@&^)"
    var capitalStr =  "SDGNVHBKIURHEKDH"

    var allLatter = str + int + specialChre + capitalStr;
    password = ""

    for ( i = 0; i < lenght; i++) {
        var generatePassword = Math.floor(Math.random() * allLatter.length)
        password += allLatter[generatePassword]
        
    }
    return password
}
 console.log("generate : " + ganeratePassword(10));
 
