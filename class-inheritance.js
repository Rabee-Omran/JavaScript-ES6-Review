class Programmer{
    constructor(name, skill){
        this.name = name;
        this.skill = skill;
    }
    skills(){
                console.log(this.skill);
            };
} 

class DjangoProgrammer extends Programmer{
    dj(){
        console.log("Django")
    }
}

const dj_programmer = new DjangoProgrammer("Rabee","programmer");
console.log(dj_programmer.dj());

