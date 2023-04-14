//Conditional statement
//if statement
//if .....else statement

let a= prompt("tell me whats your age : ")
a = parseInt(a)
if(a>0){
    alert("Valid age")
}
else{
    alert("invalid age")
}

//if....elseif...else statement
if(a<15)
{
    alert("you are not allowed in party")
}
else if(15<a<50){
    alert("show me your invitation")
}
else{
    alert("invalid entry")
}

//ternary operator
console.log("you can ",(a<18 ? "not drive":"drive"))