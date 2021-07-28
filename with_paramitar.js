function add(a,b, symbol){
    if(symbol == "+"){
        c = b+a
        return c
    }
}
function sub(a,b,symbol){
    if (symbol=="-"){
        c=a-b
        return c
    }
}
function multi(a,b,symbol){
    if (symbol=="*"){
        c=a*b
        return c
    }
}
console.log(add(12,10, "+"))
console.log(sub(15,5,"-"))
console.log(multi(5,6,"*"))
