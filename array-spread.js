const array_1 = [1, 2, 3];
const array_2 = [4, 5, 6];

//merge arrays
const arrays = array_1.concat(array_2);
console.log(arrays);
// or
const arrays2 = [...array_1, 'add here',...array_2]; 
console.log(arrays2);


const obj1 = {
    name :"rabee"
};
const obj2 = {
    name2:"rabee2"
};
const objects = {...obj1, ...obj2, country: "Syria"}
console.log(objects)