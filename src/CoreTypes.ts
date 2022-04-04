export {}

// <primitives: number, string, boolean>
let name: string = "Batman";
let age: number = 29;
let isAdmin: boolean = true;

// <object>
let me = {
    name: "Phuc Anh",
    age: 25,
    isAdmin: true
};
console.log("My name is:", me.name);

// <Array>
let janna = {
    name: "Janna",
    age: 29,
    isAdmin: true,
    hobbies: ["Gym, Game, Music"]
};
for (const hobby of janna.hobbies) {
    console.log("Janny likes " + hobby);
}

// <Tuple>
let atlas: [number, string, string] = [1, "icons.png", "icon.plist"];
console.log("Atlas: ", atlas[0], atlas[1], atlas[2]);
let position: [x: number, y: number] = [100, 200];
console.log("Position: ", position[0], position[1]);

// <Enum>
enum TextureType {SPRITE, ATLAS, FONT, AUDIO}; // {0, 1, 2, 3}
enum ItemType {COIN = 100, GEM = 200, UNKNOW = 'UNKNOWN'};

// <Any>
let value: any;
value = 10;
value = "A String";
value = true;

// <union types>
var id: number|string; // id can be a number or string
id = 100;
id = "id_100";
// id = false; // error

// <Literial types>
// role can only be "ADMIN" or "USER" => this is union type of 2 value "ADNIM" and "USER"
let role: "ADMIN" | "USER" = "ADMIN";
// role = "UNKNOWN"; // Error