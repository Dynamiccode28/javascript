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