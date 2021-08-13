var readlineSync=require("readline-sync");
var attend=readlineSync.questionInt("enter attend=");
var prastange=attend/5
console.log(prastange)
if (prastange>=75){
    console.log("they will give exam")
}
else {
    console.log("no they will not give exam")
}