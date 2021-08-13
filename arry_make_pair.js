// var array=["1","2","3","4","9","6"]
// var count=0
// var len=array.length
// var str=""
// var new_array=[]
// for (var i=0;i<(array.length);i+=1){
//     // console.log(array[i])
//     if (count<2){
//         str=str+array[i]
//         count+=1

//     }
//     if (count>1){
//         str = Number(str)
//         new_array.push(str)
//         count=0
//         str=""
//     }
// }
// // if (len%2==1){
// //     new_array.push(Number (array[len-1]))

// // }
// console.log(new_array)


// var array=["1","2","3","4","9","6",'6']
// var len=array.length
// var new_array=[]
// for (var i=0;i<(array.length);i+=1){
//     if (len%2==0){
//         var a=array[i]+array[i+1]
//         var b=Number(a)
//         new_array.push(b)
//         i+=1
//     }
//     else{
//         var a=array[i]+array[i+1]
//         var b=Number(a)
//         new_array.push(b)
//         i+=1
//     }
// }
// console.log(new_array)


var array=["1","2","3","4","9","6","8","9","5"]
var len=array.length
console.log(len)
var new_array=[]
for (var i=0;i<len-1;i+=1){
    var a=array[i]+array[i+1]
    var b=Number(a)
    new_array.push(b)
    i+=1
}
console.log(new_array)


// var a=[1,2,3,4];
// a[a.length]=5,6,7
// console.log(a)




