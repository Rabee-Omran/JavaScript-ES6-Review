//old
function square(n){
    return n*n
}
console.log(square(5));

//new
 square2 = n => n*n
console.log(square2(5));

//example

const example = [
{firstname: "rabee" ,lastname:"omran" },
{firstname: "rabee2" ,lastname:"omran2" },
{firstname: "rabee3" ,lastname:"omran3" }
];


//old
const justrabee = example.filter(function(el){
    return el.firstname == "rabee";
});
console.log(justrabee[0].firstname);


//new
const justrabee2 = example.filter((el) => el.firstname == "rabee")

console.log(justrabee2[0].firstname);




//this with arrow function

//old
const perosn ={
    programs(){    
        // console.log("obj :" , this);
        var that = this;
        setTimeout(function(){
            console.log("obj :" , that);
        },1000);
    },
}
perosn.programs();


//new
const perosn2 ={
    programs(){      
        setTimeout(()=>{
            console.log("obj :" , this)
        } ,1000);
    },
}
perosn2.programs();



