let num=[3,5,6,78,8]
console.log(num)
console.log(typeof(num))

//to_string method
let a=num.toString()
console.log(typeof(a))
console.log(a)

//Join method
let c=num.join("_")
console.log(c)
console.log(typeof(c))//string

//pop method -->remove last element changesaame array
num.pop()//returns popped element ie.8
console.log(num)

//push method -->returns new array length
let n=num.push(58)
console.log(num, n)


//shift method -->removes first element and return and modify same array
let t=num.shift()
console.log(t)
console.log(num)

//unshift method
let v=num.unshift(8)//return new array length
console.log(v)
console.log(num)

//delete : operator not a method
let arr=[34,5,6,8,20]
console.log(arr.length)
delete arr[0] //does not affect array length
console.log(arr.length)
console.log(arr)

//concat method -->any number of arrays can be concat
let arr1=[10,20,30,40,50]
let arr2=[11,22,33,44]
let newarr=arr.concat(arr1,arr2)
console.log(newarr)

//sort method --alphabetically sorted(consider as str 1 se start hone wale then 2 se then 3 se ....so on)
let v1=[4,1,22,2,3]
v1.sort()
console.log(v1)

let compare=(a,b)=>{
    return a-b//ascending order
    //return b-a -->descending order
}
let v2=[4,1,22,2,3]
v2.sort(compare)
console.log(v2)
//to sort numerically use compare function


//Reverse method
console.log(v2.reverse())

//Splics and slice(IMP)
let v3=[4,1,22,2,3]
let nums=v3.splice(1,2,1024,2048)//deleted item returns
console.log(v3)
console.log(nums)

let array=[3,7,2,1,6,8]
let narr=array.slice(2,5)//return new array index 5 excluded
console.log(array)
console.log(narr)