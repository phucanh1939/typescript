"use strict";
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _a, _Player_privateKey;
Object.defineProperty(exports, "__esModule", { value: true });
class Item {
    constructor(id = 0) {
        this._id = 0;
        this._amount = 0;
        this._id = id;
    }
    ;
    get id() {
        return this._id;
    }
    ;
    set id(id) {
        this._id = id;
    }
    ;
    get amount() {
        return this._amount;
    }
    ;
    set amount(amount) {
        this._amount = amount;
    }
    ;
}
;
let item = new Item(100);
item.amount = 10;
class Profile {
    constructor(id = 0) {
        this._id = 0;
        this._name = "";
        this._level = 0;
        this._items = [];
        this._id = id;
    }
    ;
    log() {
        console.log("Player %d, name %s, level %d, items %d", this._id, this._name, this._level, this._items.length);
    }
    ;
    addItem(idOrItem, amount) {
        if (typeof (idOrItem) === "number") {
            let itemID = idOrItem;
            let item = new Item(itemID);
            item.amount = amount || 0;
            ;
            this._items.push(item);
        }
        else {
            this._items.push(item);
        }
    }
    ;
    getItemLength() {
        return this._items.length;
    }
    ;
}
;
class Player extends Profile {
    constructor(id = 0) {
        super(id);
        this._createTime = Date.now();
    }
    ;
    play() {
        console.log("Player %d is playing!", this._id);
    }
    ;
    log() {
        super.log();
        console.log("Create time: %d", this._createTime);
    }
    ;
    static getPrivateKey() {
        return __classPrivateFieldGet(this, _a, "f", _Player_privateKey);
    }
}
_a = Player;
_Player_privateKey = { value: "private" };
Player.publicKey = "public";
;
var player = new Player(1);
var publicKey = Player.publicKey;
var privateKey = Player.getPrivateKey();
player.addItem(1, 100);
player.addItem(new Item(2));
player.addItem(new Item(100));
player.log();
// <Parameter properties> 
class Vec2 {
    /**
     *
     */
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
    ;
    log() {
        console.log("%d, %d", this.x, this.y);
    }
}
;
let position = new Vec2(10, 100);
position.log();
// <Generic Class> <Abstract Class> 
class Animal {
    /**
     *
     */
    constructor() {
        this.name = "";
        this.type = "";
        this.position = new Vec2(0, 0);
    }
    ;
}
;
class Dog extends Animal {
    /**
     *
     */
    constructor() {
        super();
        this.name = "DOG";
        this.type = "GROUND";
    }
    ;
    move() {
        this.run();
    }
    run() {
        console.log("run");
    }
    ;
}
;
class Fish extends Animal {
    /**
     *
     */
    constructor() {
        super();
        this.name = "DOG";
        this.type = "GROUND";
    }
    ;
    move() {
        this.swim();
    }
    ;
    swim() {
        console.log("swim");
    }
    ;
}
;
class House {
    /**
     *
     */
    constructor() {
        this.members = [];
    }
    ;
    addMember(member) {
        this.members.push(member);
    }
}
;
var dogHouse = new House();
dogHouse.addMember(new Dog());
var playerHouse = new House();
playerHouse.addMember(new Player(100));
