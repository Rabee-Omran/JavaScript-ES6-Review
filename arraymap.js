const names = ["rabee", "ali", "sami"];


//old
const items = [];
for(i = 0;i<names.length; i++){
    let list = "<li> "+names[i]+" </li>";
    items.push(list);
} 
console.log(items);


//new
// const items2 = names.map((name)=>{
//     return "<li> "+name+" </li>";
// });

//new ==> literal template
const items2 = names.map((name)=>{
    return `<li>${name}</li>`;
});


console.log(items2);
