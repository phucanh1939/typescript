export {}

// Class Decorator
function component(target: Function) {
    target.prototype.id = 100;
};

// Decorator factory
/**
 * Used to pass parameter to Decorator
 * @param idOrName 
 * @returns 
 */
function factory(idOrName: number|string) {
    return (target: Function & typeof Package) => {
        if (typeof idOrName === "string") {
            target.prototype.name = idOrName;
        } else {
            target.prototype.id = idOrName;
        }
        
    };
};

// Method Decorator
/**
 * Method Decorator function
 * @param target The class instance
 * @param key Name of method
 * @param propertyDescriptor the method it self 
 */
function method(target: Object, key: string, propertyDescriptor: PropertyDescriptor) {
    console.log("target", target);
    console.log("key", key);
    // Override the method
    var func = propertyDescriptor.value;
    propertyDescriptor.value = function (...args: any[]) {
        func();
        console.log(`Hello ${args}`);
    }
};

// Property Decorator
function property(target: Object, propertyName: string) {
    let value: number;
    const getter = () => {
        console.log("Getting Value", propertyName, value);
        return value;
    };
    const setter = (num: number) => {
        console.log("Setting value", propertyName, num);
        value = num;
    };

    Object.defineProperty(target, propertyName, {
        get: getter,
        set: setter,
    })
};

// Parameter decorator
/**
 * 
 * @param target The class
 * @param propertyName method name
 * @param index index of param
 */
function param(target: Object, propertyName: string, index: number) {
    console.log("param", propertyName, index);
}

@component
@factory(100)
@factory("AAAAAAAAA")
class Package {

    @property
    id: number = 0;

    @property
    name: string = "";

    constructor() {
        
    }

    @method
    log() {
        console.log("Package logging...");
    }

    doSomething(@param x: number, @param y: number) {
        console.log("doSomehting", x, y);
    }
};


let pack = new Package();
pack.log();
pack.id = 200;
pack.name = "NEW";
