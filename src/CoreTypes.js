"use strict";
exports.__esModule = true;
// <primitives: number, string, boolean>
var name = "Batman";
var age = 29;
var isAdmin = true;
// <object>
var me = {
    name: "Phuc Anh",
    age: 25,
    isAdmin: true
};
console.log("My name is:", me.name);
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
// <Tuple>
var atlas = [1, "icons.png", "icon.plist"];
console.log("Atlas: ", atlas[0], atlas[1], atlas[2]);
var position = [100, 200];
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
var value;
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
var role = "ADMIN";
// role = "UNKNOWN"; // Error
