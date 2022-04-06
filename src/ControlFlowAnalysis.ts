export {}

// <If Statements> 

//// typeof - for primitives
let input: string | number;
if (typeof input === "string") {
    let length = input.length; // input is string
    console.log("Input is string");
} else {
    let double = input * 2; // input is number
    console.log("Input is number");
}

//// instanceof - for classes
let param: number | number[];
if (param instanceof Array) {
    param.push(10);
    console.log("param is array");
} else {
    param += 10;
}

//// “property” in object - for objects
let something: string | {error: string} = {error: "Wrong input"};
if ("error" in something) {
    console.log("Something is object: ", something.error);
}

//// type-guard functions - for anything
let output: number | number[];
if (Array.isArray(output)) {
    console.log("output is an array", output.length);
} else {
    console.log("output is a number", output * 100);
}

//// Expression
let value: string | number;
let valueLength = typeof(value) === "string" && value.length || value;

//// Discriminated Unions
type Responses = { status: 200, data: any } | { status: 301, to: string } | { status: 400, error: number };
function getResponse(type): Responses {
    if (type === 1) return { status: 200, data: 100 };
    if (type === 2) return { status: 301, to: "me" };
    return { status: 400, error: -1 }
}
const response = getResponse(Math.random() * 10);
switch(response.status) {
    case 200:
        response.data
        break;
    case 301: 
        response.to;
        break;
    case 400: 
        response.error;
        break;
}

//// Assertion Functions
class Resp {};
class SuccessResponse extends Resp {data: string};
class ErrorResponse extends Resp {errorCode: number};
function assertResponse(obj: any): asserts obj is SuccessResponse {
    if (!(obj instanceof SuccessResponse)) {
        throw new Error("Not a success!");
    }
}
let resp: Resp;
assertResponse(resp); // If resp is not SuccessResposne -> throw a error here
resp.data; // Response is SuccessResponse

//// Assignment

////// Narrowing types using ‘as const’ 
const data1 = {name: "Phuc Anh"}; // Type of name is string
const data2 = {name: "Batman"} as const; // Type of name is "Batman"

////// Tracks through related variables 
function createResp(num): SuccessResponse | ErrorResponse {
    return num > 0.5 ? {data: "AAAAAAAA"} : {errorCode: 404};
}
let respA: Resp = createResp(1);
const isSuccessResponse = respA instanceof SuccessResponse;
if (isSuccessResponse) {
    (respA as SuccessResponse).data; //
}

////// Re-assignment updates types
let data: string | number;
data; // string | number
data = "Hello"; // string
data; // string
