var array=['1', '2', '3' ,'4', '5'];
var new_array=[]
var len=array.length
var i=0
if (len%2==0){
    while (i<len){
        var a=array[i]+array[i+1]
        var b=Number(a)
        new_array.push(b)
        i=i+2
    }
    console.log(new_array)
    
}
else{
    while(i<len-1){
        var a=array[i]+array[i+1]
        var b=Number(a)
        new_array.push(b)
        i=i+2

    }
    console.log(new_array)

}
