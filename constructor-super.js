class Programmer{
    constructor(name){
        this.name = name;
        
    }
    skills(){
                console.log("programmer");
            };
} 

class DjangoProgrammer extends Programmer{
    constructor(name,address){
        super(name);
        this.address = address;
    }
    dj(){
        console.log("Django")
    }
}

const dj_programmer = new DjangoProgrammer("Rabee","syria");
console.log(dj_programmer.name);
console.log(dj_programmer.address);

