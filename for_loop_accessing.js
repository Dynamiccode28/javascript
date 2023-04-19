let marks={
    Adarsh:80,
    Ayush:89,
    Kartik:80,
    Sanket:58,
    Tanmay:60
}

//lengthy syntax
for(let i=0;i<Object.keys(marks).length;i++){
    console.log(Object.keys(marks)[i]," : ",marks[Object.keys(marks)[i]])
}


//for_in loop

for(let key in marks){
    console.log(key," : ",marks[key])
}