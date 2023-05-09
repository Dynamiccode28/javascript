let arr=[2,5,8,9,7,6]//represent like obj it 0:2,1:5......
for(let i=0;i<arr.length;i++){
    console.log(arr[i])
}

//for each loop
arr.forEach((element)=>{
    console.log(element*element)
})

//array.from
let n=`Adarsh`
let arr1=Array.from(n)
console.log(arr1)

//for...of loop
for(let i of arr){
    console.log(i)
}

//for..in loop
for(let item in arr){
    console.log(arr[item])
}