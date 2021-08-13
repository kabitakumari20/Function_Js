function bouns(){
    var readlineSync=require("readline-sync");
    var slary=readlineSync.questionInt("enter the slary=")
    var year=readlineSync.questionInt("enter the year=")
    if (year>5){
        var a=slary/5
        console.log(a , "this is the bouns")
    }
    else{
        console.log("no bonus")
    }
}
bouns()
