"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// <primitives: number, string, boolean>
let name = "Batman";
let age = 29;
let isAdmin = true;
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
let atlas = [1, "icons.png", "icon.plist"];
console.log("Atlas: ", atlas[0], atlas[1], atlas[2]);
let position = [100, 200];
console.log("Position: ", position[0], position[1]);
// <Enum>
var TextureType;
(function (TextureType) {
    TextureType[TextureType["SPRITE"] = 0] = "SPRITE";
    TextureType[TextureType["ATLAS"] = 1] = "ATLAS";
    TextureType[TextureType["FONT"] = 2] = "FONT";
    TextureType[TextureType["AUDIO"] = 3] = "AUDIO";
})(TextureType || (TextureType = {}));
; // {0, 1, 2, 3}
var ItemType;
(function (ItemType) {
    ItemType[ItemType["COIN"] = 100] = "COIN";
    ItemType[ItemType["GEM"] = 200] = "GEM";
    ItemType["UNKNOW"] = "UNKNOWN";
})(ItemType || (ItemType = {}));
;
// <Any>
let value;
value = 10;
value = "A String";
value = true;
// <union types>
var id; // id can be a number or string
id = 100;
id = "id_100";
// id = false; // error
// <Literial types>
// role can only be "ADMIN" or "USER" => this is union type of 2 value "ADNIM" and "USER"
let role = "ADMIN";
// role = "UNKNOWN"; // Error
