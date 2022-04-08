"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// <If Statements> 
//// typeof - for primitives
let input = Math.random() < 0.5 ? "str" : 10;
if (typeof input === "string") {
    let length = input.length; // input is string
    console.log("Input is string");
}
else {
    let double = input * 2; // input is number
    console.log("Input is number");
}
//// instanceof - for classes
let param = Math.random() < 0.5 ? 100 : [10, 20];
if (param instanceof Array) {
    param.push(10);
    console.log("param is array");
}
else {
    param += 10;
}
//// “property” in object - for objects
let something = { error: "Wrong input" };
if ("error" in something) {
    console.log("Something is object: ", something.error);
}
//// type-guard functions - for anything
let output = Math.random() < 0.5 ? 100 : [10, 20];
;
if (Array.isArray(output)) {
    console.log("output is an array", output.length);
}
else {
    console.log("output is a number", output * 100);
}
//// Expression
let value = Math.random() < 0.5 ? "str" : 10;
;
let valueLength = typeof (value) === "string" && value.length || value;
function getResponse(type) {
    if (type === 1)
        return { status: 200, data: 100 };
    if (type === 2)
        return { status: 301, to: "me" };
    return { status: 400, error: -1 };
}
const response = getResponse(Math.random() * 10);
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
class Resp {
}
;
class SuccessResponse extends Resp {
    constructor() {
        super(...arguments);
        this.data = "";
    }
}
;
class ErrorResponse extends Resp {
    constructor() {
        super(...arguments);
        this.errorCode = 0;
    }
}
;
function assertResponse(obj) {
    if (!(obj instanceof SuccessResponse)) {
        throw new Error("Not a success!");
    }
}
let resp = new Resp();
assertResponse(resp); // If resp is not SuccessResposne -> throw a error here
resp.data; // Response is SuccessResponse
//// Assignment
////// Narrowing types using ‘as const’ 
const data1 = { name: "Phuc Anh" }; // Type of name is string
const data2 = { name: "Batman" }; // Type of name is "Batman"
////// Tracks through related variables 
function createResp(num) {
    return num > 0.5 ? { data: "AAAAAAAA" } : { errorCode: 404 };
}
let respA = createResp(1);
const isSuccessResponse = respA instanceof SuccessResponse;
if (isSuccessResponse) {
    respA.data; //
}
////// Re-assignment updates types
let data;
data = Math.random() < 0.5 ? "str" : 10;
; // string | number
data = "Hello"; // string
data; // string
