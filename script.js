import DjangoProgrammer,{work} from "./module/django_programmer.js";

// named export --> import {}
// default export --> import ...

const dj_programmer = new DjangoProgrammer("Rabee","syria");
console.log(dj_programmer.name);
console.log(dj_programmer.address);

