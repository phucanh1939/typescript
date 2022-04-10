"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
// Class Decorator
function component(target) {
    target.prototype.id = 100;
}
;
// Decorator factory
/**
 * Used to pass parameter to Decorator
 * @param idOrName
 * @returns
 */
function factory(idOrName) {
    return (target) => {
        if (typeof idOrName === "string") {
            target.prototype.name = idOrName;
        }
        else {
            target.prototype.id = idOrName;
        }
    };
}
;
// Method Decorator
/**
 * Method Decorator function
 * @param target The class instance
 * @param key Name of method
 * @param propertyDescriptor the method it self
 */
function method(target, key, propertyDescriptor) {
    console.log("target", target);
    console.log("key", key);
    // Override the method
    var func = propertyDescriptor.value;
    propertyDescriptor.value = function (...args) {
        func();
        console.log(`Hello ${args}`);
    };
}
;
// Property Decorator
function property(target, propertyName) {
    let value;
    const getter = () => {
        console.log("Getting Value", propertyName, value);
        return value;
    };
    const setter = (num) => {
        console.log("Setting value", propertyName, num);
        value = num;
    };
    Object.defineProperty(target, propertyName, {
        get: getter,
        set: setter,
    });
}
;
// Parameter decorator
function param(target, propertyName, index) {
    console.log("param", propertyName, index);
}
let Package = class Package {
    constructor() {
        this.id = 0;
        this.name = "";
    }
    log() {
        console.log("Package logging...");
    }
    doSomething(x, y) {
        console.log("doSomehting", x, y);
    }
};
__decorate([
    property
], Package.prototype, "id", void 0);
__decorate([
    property
], Package.prototype, "name", void 0);
__decorate([
    method
], Package.prototype, "log", null);
__decorate([
    __param(0, param),
    __param(1, param)
], Package.prototype, "doSomething", null);
Package = __decorate([
    component,
    factory(100),
    factory("AAAAAAAAA")
], Package);
;
let pack = new Package();
pack.log();
pack.id = 200;
pack.name = "NEW";
