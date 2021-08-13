var marks=function(){
    
    var readlineSync=require("readline-sync");
    var num=readlineSync.questionInt("enter the num=")
    if (num<=25){
        console.log("f,grate")
    }
    else if (num>25 && num<=45){
        console.log("e grate")
    }
    else if (num>45 && num<=50){
        console.log("d grate")
    }
    else if (num>50 && num<=60){
        console.log("c grate")
    }
    else if (num>60 && num<=80){
        console.log("b grate")
    }
    else if (num>80 && num<=100){
        console.log("a grate")
    }
    else {
        console.log("u are faill")
    }
}
marks()


