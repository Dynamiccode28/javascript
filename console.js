console.log(console)
console.error("This is an error")//hielighted in red help to find errors
console.assert(5>58)//false so assertion failed
console.assert(2<3)//run without an error
console.clear()//clearour the console

obj={a:1,b:2,c:3,d:4,e:5}
console.log(obj)
console.table(obj)//represent object in the form of table

console.warn("This is warning")//yellow heighlighted text

console.time("a")//how much time taken by load
console.time("Forloop")
for(let i=0;i<3;i++){
    console.log(i)
}
console.timeEnd("Forloop")//time taken by for loop to execute
