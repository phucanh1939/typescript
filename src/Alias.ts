export {}

// <Type alias> - used to create new type (think of types like variable)

// Create type from primitive types
type MissingNo = 404;
let errorCode: MissingNo = 404;
type UserInput = String;
let input: UserInput = "123456";

// Create object type
type Point = {x: number, y: number};
let position: Point = {x: 100, y: 200};
type Person = {name: string, id: number, age: number, hobbies: string[]};
let bro: Person = {name: "PA", id: 1, age: 25, hobbies: ["Games", "Gym", "Learning"]};

// Create tuples
type Transform = [
    location: Point,
    scale: Number
];
let trans: Transform = [{x: 100, y: 200}, 100];

// Create union types
type Size = "small" | "medium" | "large";
let size: Size = "small";

// Create type using intersection
type Location = {x: number} & {y: number}; // {x: number, y: number}
let myLocation: Location = {x: 1000, y: 20000};

// type indexing: Create type by extracting from a subset of another type
type Response = {data: {error: number, json: string}, id: number};
type ResposneData = Response["data"];
let myData: ResposneData = {error: 0, json: "{value: 100}"};

// type from value: Create type from a value
const message = {id: 100, message: "Hello"};
type Message = typeof message;
let myMessage: Message = {id: 1, message: "Not now!!!"};

// type from function return - Create type from function return type
const createFish = () => {return {id: 1, name: "Nemo"}};
type Fish = ReturnType<typeof createFish>; // type Fish = {id: number, name: string};

// types from module
// TODO

// mapped types

// conditional types

// template union types
