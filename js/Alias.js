"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let errorCode = 404;
let input = "123456";
let position = { x: 100, y: 200 };
let bro = { name: "PA", id: 1, age: 25, hobbies: ["Games", "Gym", "Learning"] };
let trans = [{ x: 100, y: 200 }, 100];
let size = "small";
let myLocation = { x: 1000, y: 20000 };
let myData = { error: 0, json: "{value: 100}" };
// type from value: Create type from a value
const message = { id: 100, message: "Hello" };
let myMessage = { id: 1, message: "Not now!!!" };
// type from function return - Create type from function return type
const createFish = () => { return { id: 1, name: "Nemo" }; };
let cat = { name: "Bobby", canFly: false };
var someone = {
    name: (newValue) => (console.log(newValue)),
    bio: (newValue) => (console.log(newValue)),
};
someone.name("Pianta");
someone.bio("Teemo");
;
;
let num = 100;
