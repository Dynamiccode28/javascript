let number=Math.floor((Math.random()*100)+1);

for(let choice=0;choice<100;choice++){
  let a=prompt("Enter a number : ")
  a=Number.parseInt(a);
  if(a>number)
    console.log("number you entered is greater than secret number")

  else if(a<number)
    console.log("number you entered is smaller than secret number")

  else{
    console.log("CONGRATULATIONS! You guessed it")
    console.log("guessed at choice number ",choice+1)
    let score=100-choice;
    console.log("you score is "+score)
    break
  }
}
console.log("The random number is "+number)