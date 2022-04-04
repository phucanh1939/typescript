"use strict";
exports.__esModule = true;
// <number, string, boolean>
var name = "Batman";
var age = 29;
var isAdmin = true;
// <object>
// Error example
var catwoman = {
    name: "Cat",
    age: 29,
    isAdmin: true
};
// console.log(catwoman.name); // error here -> batman is an object but TS dont know what that object contains
// This will work normaly as JS
var me = {
    name: "Phuc Anh",
    age: 25,
    isAdmin: true
};
console.log("My name is:", me.name);
// this will also works
var batman = {
    name: "Bruce Wayne",
    age: 29,
    isAdmin: true
};
console.log("Batman's name is: ", batman.name);
// <Array>
var janna = {
    name: "Janna",
    age: 29,
    isAdmin: true,
    hobbies: ["Gym, Game, Music"]
};
for (var _i = 0, _a = janna.hobbies; _i < _a.length; _i++) {
    var hobby = _a[_i];
    console.log("Janny likes " + hobby);
}
var ids = [1, 2, 3];
ids.push(4);
var names = ["Kayn", "Lulu", "Draven"];
// <Tuple>
var atlas = [1, "icons.png", "icon.plist"];
console.log("Atlas: ", atlas[0], atlas[1], atlas[2]);
// console.log("Atlast: ", atlas[3]); // Error
// <Enum>
var TextureType;
(function (TextureType) {
    TextureType[TextureType["SPRITE"] = 0] = "SPRITE";
    TextureType[TextureType["ATLAS"] = 1] = "ATLAS";
    TextureType[TextureType["FONT"] = 2] = "FONT";
    TextureType[TextureType["AUDIO"] = 3] = "AUDIO";
})(TextureType || (TextureType = {}));
; // {0, 1, 2, 3}
var asset = {
    id: 1,
    type: TextureType.ATLAS
};
console.log("Asset type is: ", asset.type);
