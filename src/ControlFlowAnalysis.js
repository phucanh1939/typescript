"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
// <If Statements> 
//// typeof - for primitives
var input;
if (typeof input === "string") {
    var length_1 = input.length; // input is string
    console.log("Input is string");
}
else {
    var double = input * 2; // input is number
    console.log("Input is number");
}
//// instanceof - for classes
var param;
if (param instanceof Array) {
    param.push(10);
    console.log("param is array");
}
else {
    param += 10;
}
//// “property” in object - for objects
var something = { error: "Wrong input" };
if ("error" in something) {
    console.log("Something is object: ", something.error);
}
//// type-guard functions - for anything
var output;
if (Array.isArray(output)) {
    console.log("output is an array", output.length);
}
else {
    console.log("output is a number", output * 100);
}
//// Expression
var value;
var valueLength = typeof (value) === "string" && value.length || value;
function getResponse(type) {
    if (type === 1)
        return { status: 200, data: 100 };
    if (type === 2)
        return { status: 301, to: "me" };
    return { status: 400, error: -1 };
}
var response = getResponse(Math.random() * 10);
switch (response.status) {
    case 200:
        response.data;
        break;
    case 301:
        response.to;
        break;
    case 400:
        response.error;
        break;
}
//// Assertion Functions
var Resp = /** @class */ (function () {
    function Resp() {
    }
    return Resp;
}());
;
var SuccessResponse = /** @class */ (function (_super) {
    __extends(SuccessResponse, _super);
    function SuccessResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return SuccessResponse;
}(Resp));
;
var ErrorResponse = /** @class */ (function (_super) {
    __extends(ErrorResponse, _super);
    function ErrorResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return ErrorResponse;
}(Resp));
;
function assertResponse(obj) {
    if (!(obj instanceof SuccessResponse)) {
        throw new Error("Not a success!");
    }
}
var resp;
assertResponse(resp); // If resp is not SuccessResposne -> throw a error here
resp.data; // Response is SuccessResponse
//// Assignment
////// Narrowing types using ‘as const’ 
var data1 = { name: "Phuc Anh" }; // Type of name is string
var data2 = { name: "Batman" }; // Type of name is "Batman"
////// Tracks through related variables 
function createResp(num) {
    return num > 0.5 ? { data: "AAAAAAAA" } : { errorCode: 404 };
}
var respA = createResp(1);
var isSuccessResponse = respA instanceof SuccessResponse;
if (isSuccessResponse) {
    respA.data; //
}
////// Re-assignment updates types
var data;
data; // string | number
data = "Hello"; // string
data; // string
