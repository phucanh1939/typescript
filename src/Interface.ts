export {}

interface Flyable {
    fly: () => void;
};

interface Animal {
    eat: () => void;
};

interface FlyableAnimal extends Animal, Flyable {
    height: number,
    name: string
};

interface Bird extends FlyableAnimal {
    nickname: string,
};

interface Dog extends Animal {

};

let bird: Bird = {
    height: 100,
    name: "Anny",
    nickname: "AAAAAAAAA",
    fly: () => {console.log("fly");},
    eat: () => {console.log("eat");}
};

interface Pet<T> {
    info: T,
};

let myBird1: Pet<Bird> = {
    info: bird
};

interface PetWithNickname<T extends {nickname: string}> {
    info: T,
};

let myBird: PetWithNickname<Bird> = {
    info: bird
};