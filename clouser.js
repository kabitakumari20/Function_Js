// function add(){
//     let a=20;
//     function b(){
//         let c=30;
//         console.log(a+c)
//     }
//     return b()
// }
// const main=add()



// const outerfun=(a)=>{
//     var b=10;
//     const innerfun=(c)=>{
//         let sum=a+b+c;
//         return (sum)
//     }
//     // innerfun(4);
//     return innerfun(4)
// } 
// const num=outerfun(5)
// console.log(num)
// // num()
// // console.log(b)



// var readlineSync=require("readline-sync");
// let num=readlineSync.questionInt("enter the num=");
// if (num>0){
//     console.log("nagative")
// }
// else if (num<0){
//     console.log("positive")
// }
// else{
//     console.log("zero")
// }



// function fristname(){
//     let name="manvi";
//     function lastname(){
//         let name1="mahi"
//         return name+name1
//     }
//     return lastname()
// }
// const main=fristname();
// console.log(main)



function myFunction() {
    let a = 4;
    function secFun(c){
        return a * a+c;
    }
    return secFun(4)
    
}
console.log(myFunction())