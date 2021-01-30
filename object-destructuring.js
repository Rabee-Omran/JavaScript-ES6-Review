const example = {
    firstname :'rabee',
    lastname : 'omran',
    age : 22
}

//old
const first_name = example.firstname;
const last_name = example.lastname;
const age2 = example.age;

console.log(first_name,last_name, age2 );

//new
// const {age} = example;
//or
const {age :ch} = example;
console.log( ch );