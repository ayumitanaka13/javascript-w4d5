class Pet {
    constructor(name, age){
        console.log("IN PET CONSTRUCTOR!")
        this.name = name;
        this.age = age;
    }

    eat(){
        return `${this.name} is eating`; 
    }
}

const pet1 = new Pet('Unagi', 20);
console.log(pet1.eat())

class Cat extends Pet{
    constructor(name, age, livesLeft = 9){
        console.log("IN CAT CONSTRUCTOR!")
        super(name,age);
        this.livesLeft = livesLeft
    }
    meow() {
        return 'NYAAAAAA!!'
    }
}

const cat1 = new Cat('Blackie', 1);
console.log(cat1.meow());