var age=function(){
    var readlineSync=require("readline-sync");
    var age1=readlineSync.questionInt("enter the  age1=");
    var age2=readlineSync.questionInt("enter the  age2=");
    var age3=readlineSync.questionInt("enter the  age3=");

    if(age1>age2 && age1>age3){
        console.log("age1, is grater tahn")
    }
    else if (age2>age1 && age2>age3){
        console.log("age2 is grater tahn")
    }
    else if (age3>age1 && age3>age2){
        console.log("age3,is grater than")
    }
    else{
        console.log("all are equal")
    }
}
age()
