var readlineSync=require("readline-sync");
function add(num1,num2,operator){
	var num1=readlineSync.questionInt("Enter the first value :")
	var num2=readlineSync.questionInt("Enter the second value :")
	var operator=readlineSync.question("Enter the oprater :")

	var sum=0
	sum=num1+num2
	console.log(sum)

}
add();


// ----------------------------------------------------------------

var readlineSync=require("readline-sync");
function add(num1,num2,operator){
	
	var sum=0
	sum=num1+num2
	console.log(sum)
}
add(readlineSync.questionInt("Enter the first value :"),readlineSync.questionInt("Enter the second value :"),readlineSync.question("Enter the oprater :"));

// -----------------------------------------------------


// -----------------------------------------------------
function add(a,b){
    c=a+b
    return c
}
function sub(a,b){
    c=a-b
    return c
}
function multi(a,b){
    c=a*b
    return c
}
function div(a,b){
    c=a/b
    return c
}

console.log(add(3,4))
console.log(sub(9,4))
console.log(mul(3,4))
console.log(div(3,4))

    


