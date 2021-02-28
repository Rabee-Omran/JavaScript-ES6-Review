//not good
// const programmer = {
//     name : "rabee",
//     skills(){
//         console.log("Python, Django");
//     }
// } 
// const programmer2 = {
//     name : "rabee",
//     skills(){
//         console.log("Python, Django");
//     }
// } 
// console.log(programmer.skills())
// console.log(programmer2.skills())

class Programmer{
    constructor(name, skill){
        this.name = name;
        this.skill = skill;
    }
    skills(){
                console.log(this.skill);
            };
} 
const programmer = new Programmer("Rabee","django");
console.log(programmer.skills());
