export {}

class Item {
    private _id: number = 0;
    private _amount: number = 0;

    constructor(id: number = 0) {
        this._id = id;
    };

    get id() {
        return this._id;
    };

    set id(id: number) {
        this._id = id;
    };

    get amount() {
        return this._amount;
    };

    set amount(amount: number) {
        this._amount = amount;
    };
};

let item: Item = new Item(100);
item.amount = 10;

class Profile {
    protected _id: number = 0;
    protected _name: string = "";
    protected _level: number = 0;
    protected _items: Item[] = [];

    constructor(id: number = 0) {
        this._id = id;
    };

    log() {
        console.log("Player %d, name %s, level %d, items %d", this._id, this._name, this._level, this._items.length);
    };

    addItem(id: number, amount: number): void;
    addItem(item: Item): void;
    addItem(idOrItem: number|Item, amount?: number): void {
        if (typeof(idOrItem) === "number") {
            let itemID = idOrItem;
            let item = new Item(itemID);
            item.amount = amount || 0;;
            this._items.push(item);
        } else {
            this._items.push(item);
        }
    };

    getItemLength(): number {
        return this._items.length;
    };

};

interface Playable {
    play: () => void
}

class Player extends Profile implements Playable {
    private readonly _createTime: number = Date.now();
    
    constructor(id: number = 0) {
        super(id);
    };
    
    play() {
        console.log("Player %d is playing!", this._id);
    };
    
    log() {
        super.log();
        console.log("Create time: %d", this._createTime);
    };

    static #privateKey = "private";
    static publicKey = "public";

    static getPrivateKey(): string {
        return this.#privateKey;
    }
};

var player: Player = new Player(1);
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
    constructor(public x: number, public y: number) {};

    log(): void {
        console.log("%d, %d", this.x, this.y);
    }
};

let position: Vec2 = new Vec2(10, 100);
position.log();

// <Generic Class> <Abstract Class> 

abstract class Animal {
    name: string = "";
    type: string = "";
    position: Vec2 = new Vec2(0, 0);
    /**
     *
     */
    constructor() {
        
    };

    abstract move(): void;
};

class Dog extends Animal {
    /**
     *
     */
    constructor() {
        super();
        this.name = "DOG";
        this.type = "GROUND";
    };

    move(): void {
        this.run();
    }

    run(): void {
        console.log("run");
    };
};

class Fish extends Animal {
    /**
     *
     */
     constructor() {
        super();
        this.name = "DOG";
        this.type = "GROUND";
    };

    move(): void {
        this.swim();
    };

    swim(): void {
        console.log("swim");
    };
};

class House<Type> {
    members: Type[] = [];

    /**
     *
     */
    constructor() {
        
    };

    addMember(member: Type): void {
        this.members.push(member);
    }
};

var dogHouse = new House<Dog>();
dogHouse.addMember(new Dog());

var playerHouse = new House<Player>();
playerHouse.addMember(new Player(100));
