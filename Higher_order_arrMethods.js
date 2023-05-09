let arr=[24,88,21]
//map creates an array by performing some operations on each array element
//map(value,index,array)-->Map definition(does not modify existing original array)
let a=arr.map((val,ind)=>{
    console.log(val,ind)
    return val+1//new array created with this returned values
})
console.log(a)

//Filter method -->does not modify existing original array
let arr2=[8,9,7,15,25,3,4,65]
let a2=arr2.filter((a)=>{
    return a<10;
})
console.log(a2)//new array of elements returned


//Reduce method--->reduces an arrayto single value
let ar3=[2,3,4,5,1]
let res=ar3.reduce((i,j)=>//2+3=5,5+4=9,9+5=14,14+1=15
{
return i+j
})
console.log(res)

