"use strict";
exports.__esModule = true;
var errorCode = 404;
var input = "123456";
var position = { x: 100, y: 200 };
var bro = { name: "PA", id: 1, age: 25, hobbies: ["Games", "Gym", "Learning"] };
var trans = [{ x: 100, y: 200 }, 100];
var size = "small";
var myLocation = { x: 1000, y: 20000 };
var myData = { error: 0, json: "{value: 100}" };
// type from value: Create type from a value
var message = { id: 100, message: "Hello" };
var myMessage = { id: 1, message: "Not now!!!" };
// type from function return - Create type from function return type
var createFish = function () { return { id: 1, name: "Nemo" }; };
// types from module
// TODO
// mapped types
// conditional types
// template union types
