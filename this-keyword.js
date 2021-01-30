

const perosn ={
    name:"Rabee",
    programs(){

        //this for ==> refer to obj(person)
       
        console.log(this);
    },
}
perosn.programs();

// prog ==> refer  to window
//bind ==> put person ,not window
const prog = perosn.programs.bind(perosn);
prog();