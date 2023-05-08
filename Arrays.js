let marks=[45,69,89,80,null,"Not present"]
console.log(marks)
console.log(marks[0])
console.log("length of marks array : ",marks.length)
console.log(marks[6])//not available -->print UNDEFINED

marks[6]=10//adding new elements
marks[0]=34//changing element at given index
console.log(marks)
console.log(typeof(marks))//Object

//printing using for_loop
for(let i=0;i<marks.length;i++){
    console.log(marks[i])
}