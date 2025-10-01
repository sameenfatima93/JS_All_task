//____head and tails task__________________

// var toss = Math.floor(Math.random() * 2);

// if (toss === 0) {
//     console.log("Tail");
// } else {
//     console.log("Head");
// }

//_________with function_____________

function task(){
var toss = Math.floor(Math.random() * 2)
if (toss === 0) {
    return "head";
}else{
   return "tail";
}
}
console.log(" result " + task()) 