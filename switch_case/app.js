//______-task palandrom with function

//___palindrome________mathode one______//


function palandrom() {
var palandrom = document.getElementById("word").value
    var reverse = "";

for (var i = palandrom.length - 1 ; i >= 0 ; i--) {
    reverse += palandrom[i]
}
var result= ""
// console.log(reverse);
if (palandrom === reverse) {
    result +="its a palandrom";

}else{
   result +="it's not a palandrom";

}
document.getElementById("result").innerHTML=result
document.getElementById("word").value =""
}




let input = document.querySelector("input");
let buttons = document.querySelectorAll("button");

let string = "";
let arr = Array.from(buttons);

arr.forEach(button => {
    button.addEventListener("click", (e) => {
        let value = e.target.innerHTML;

        if (value === "=") {
            try {
                string = eval(string); // calculation
                input.value = string;
            } catch {
                input.value = "Error";
                string = "";
            }
        } else if (value === "AC") {
            string = "";
            input.value = "";
        } else if (value === "DEL") {
            string = string.substring(0, string.length - 1);
            input.value = string;
        } else {
            string += value;
            input.value = string;
        }
    });
});

