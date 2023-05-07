let a=prompt("enter a number upto which you want to compute sum : ")
a=parseInt(a)
let sum=0;
for(let i=0;i<a;i++){
  sum+=(i+1)
}
console.log(sum)

//for in loop
let obj={
  Adarsh:50,shivam:48,
  yash:50,kartik:68,shiv:50
}
//accessing ket:val pairs using for in loop
for(let a in obj){
  console.log(a+" : "+obj[a])
}

//for of loop : iterate over input
for(let i of "ADARSH"){
  console.log(i)
}
