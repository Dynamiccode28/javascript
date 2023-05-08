let variable = "Adarsh";
let size = variable.length;
console.log(variable);
console.log(size);

//Template literals
let boy1 = "Abhi";
let boy2 = "Adi";
let sentence = `${boy1} is a friend of ${boy2}`;
console.log(sentence);

//Escape sequence character
let fruit = "Man'go"; //'\'--->escape sequence character also '\n','\t'
console.log(fruit);

let candidate = "Adarsh's \nportfolio";
console.log(candidate);

/*NOTE: strings are immutable. WWwhen any method performs operation over string it will return new string*/

//string methods to manipulate strings
//1.LENGTH
console.log("Adarsh".length);

//2.To_UPPERCASE
console.log("adarsh".toUpperCase());

//3.to_LOWERCASE
console.log("ADARSH".toLowerCase());

//4.slice
console.log("Adarsh".slice(1, 4)); //indexing start from 0---slice will print chat 1 to 3
console.log("Adarsh".slice(1)); //print entire string from given index

//5.Replace
console.log("adarsh".replace("dars", "his"));

//6. Trim
console.log("   Adrsh    ".trim());
console.log("   Adrsh    ".trimEnd());

//7. concat
console.log("Ayush".concat(" is brother of Adarsh"));

//8.split
console.log("Addars".split(""));

//9.substring
console.log("Adarsh dhangar".substring(0, 6)); //second index is excluded
console.log("Adarsh dhangar".substring(0)); //second index is excluded

//10. Repeat
console.log("Adarsh ".repeat(3));

//11.includes
console.log("adarsh".includes("ars"));
