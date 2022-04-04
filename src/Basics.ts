export {}


// <core-types>

// primitives: number, string, boolean

let name: string = "Batman";
let age: number = 29;
let isAdmin: boolean = true;

// object
let me = {
    name: "Phuc Anh",
    age: 25,
    isAdmin: true
};
console.log("My name is:", me.name);

// Array
let janna = {
    name: "Janna",
    age: 29,
    isAdmin: true,
    hobbies: ["Gym, Game, Music"]
};
for (const hobby of janna.hobbies) {
    console.log("Janny likes " + hobby);
}

// Tuple
let atlas: [number, string, string] = [1, "icons.png", "icon.plist"];
console.log("Atlas: ", atlas[0], atlas[1], atlas[2]);
// console.log("Atlast: ", atlas[3]); // Error

// enum
enum TextureType {SPRITE, ATLAS, FONT, AUDIO}; // {0, 1, 2, 3}
enum ItemType {COIN = 100, GEM = 200, UNKNOW = 'UNKNOWN'};

// any
let value: any;
value = 10;
value = "A String";
value = true;

// union types
var id: number|string; // id can be a number or string
id = 100;
id = "id_100";
// id = false; // error

// literial types

// role can only be "ADMIN" or "USER" => this is union type of 2 value "ADNIM" and "USER"
var role: "ADMIN" | "USER";
role = "ADMIN";
// role = "UNKNOWN"; // Error

// --------------------------------------------------------------------------------------------

// <Type alias> - used to create new type (think of types like variable)

// with primitive types
type MissingNo = 404;
let errorCode: MissingNo = 404;
type UserInput = String;
let input: UserInput = "123456";

// object types
type Point = {x: number, y: number};
let position: Point = {x: 100, y: 200};
type Person = {name: string, id: number, age: number, hobbies: string[]};
let bro: Person = {name: "PA", id: 1, age: 25, hobbies: ["Games", "Gym", "Learning"]};

// tuples
type Transform = [
    location: Point,
    scale: Number
];
let trans: Transform = [{x: 100, y: 200}, 100];

// union
type Size = "small" | "medium" | "large";
let size: Size = "small";

// intersection
type Location = {x: number} & {y: number}; // {x: number, y: number}
let myLocation: Location = {x: 1000, y: 20000};


// type indexing: extract and name a type from a subset of another type
type Response = {data: {error: number, json: string}, id: number};
type ResposneData = Response["data"];
let myData: ResposneData = {error: 0, json: "{value: 100}"};

// type from value: Re-use type from a value
const message = {id: 100, message: "Hello"};
type Message = typeof message;
let myMessage: Message = {id: 1, message: "Not now!!!"};

// type from function return - reuse function return type

const createFish = () => {return {id: 1, name: "Nemo"}};
type Fish = ReturnType<typeof createFish>; // type Fish = {id: number, name: string};

// types from module

// mapped types

// conditional types

// template union types

// ---------------------------------------------------------------------------------------
