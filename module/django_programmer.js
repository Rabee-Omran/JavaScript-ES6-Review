import {Programmer} from "./programmer.js";

export function work(){};

export default class DjangoProgrammer extends Programmer{
    constructor(name,address){
        super(name);
        this.address = address;
    }
    dj(){
        console.log("Django")
    }
}