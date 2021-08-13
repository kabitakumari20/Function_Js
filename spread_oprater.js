// how to add element in array-----------------
// let a=[1,2,3]
// let c=[...a,"kabita"]
// console.log(c)


// marge more than two array----------------------
// let a=[1,2,3,4]
// let b=[5,6,7,8]
// let c=[9,10,11]
// let d=[...a,...b,...c]
// console.log(d)


// how to copy array-------------------
// var a=[1,2,3]
// let b=[...a,"kavita"]
// b[0]="manvi"
// console.log(b)
// console.log(a)


// with string-----------------------------------
// let a=[..."manvi",..."ujala",1,2]
// console.log(a)

// with function sprated oprater----------------------

function num(a,b,c,d){
    
    e=a+b+c
    console.log(e)

}
let array=[1,2,3]
num(...array)