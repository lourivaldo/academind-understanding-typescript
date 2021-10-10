// interface Admin {
//     name: string;
//     privileges: string[];
// };

// interface Employee {
//     name: string;
//     startDate: Date;
// };

// interface ElevatedEmployee extends Admin, Employee {}

// const e1: ElevatedEmployee = {
//     name: "Max",
//     privileges: ['create-server'],
//     startDate: new Date()
// }


type Admin = {
    name: string;
    privileges: string[];
};

type Employee = {
    name: string;
    startDate: Date;
};

type ElevatedEmployee = Admin & Employee;

const e1: ElevatedEmployee = {
    name: "Max",
    privileges: ['create-server'],
    startDate: new Date()
}

type Combinable = string | number;
type Numeric = number | boolean;

type Universal = Combinable & Numeric;

function add(a: Combinable, b: Combinable) {
    if (typeof a === 'string' || typeof b === 'string') {
        return a.toString() + b.toString();
    }
    return a + b;
}

type UnknownEmployee = Employee | Admin;

function printEmployeeInformation(emp: UnknownEmployee) {
    console.log('Name: ' + emp.name);
    if ('privileges' in emp) {
        console.log('Provileges: ' + emp.privileges);
    }
    if ('startDate' in emp) {
        console.log('Start Date: ' + emp.startDate);
    }
}

printEmployeeInformation(e1)
printEmployeeInformation({ name: "Max", startDate: new Date() })

class Car {
    drive() {
        console.log('Driving...');
        
    }
}

class Truck {
    drive() {
        console.log('Driving a Truck...');
        
    }
    loadCargo(amount: number) {
        console.log('Loading cargo...' + amount);
        
    }
}

type Vehicle = Car | Truck;

const v1 = new Car()
const v2 = new Truck()

function useVehicle(vehicle: Vehicle) {
    vehicle.drive();
    // if ('loadCargo' in vehicle) {
    if (vehicle instanceof Truck) {
        vehicle.loadCargo(1000);
    }
}

useVehicle(v1);
useVehicle(v2);

// Discriminated Unions

interface Bird {
    type: 'bird'
    flyingSpeed: number
}

interface Horse {
    type: 'horse'
    runningSpeed: number
}

type Animal = Bird | Horse;

function moveAnimal(animal: Animal) {
    // if ('flyingSpeed' in animal) {
        // console.log('Moving with speed: ' + animal.flyingSpeed);    
    // }
    let speed;
    switch(animal.type) {
        case 'bird':
            speed = animal.flyingSpeed
            break  
        case 'horse':
            speed = animal.runningSpeed
        break   
    }

    console.log('Moving with speed: ' + speed); 
}

moveAnimal({ type: 'bird', flyingSpeed: 10 })


// Type casting

// const paragraph = document.getElementById('message-output') as HTMLParagraphElement
// const userInput = <HTMLInputElement>document.getElementById('user-input')!
// const userInput = document.getElementById('user-input')! as HTMLInputElement;
// userInput.value = 'Hi there!'

const userInput = document.getElementById('user-input');
if (userInput) {
    (userInput as HTMLInputElement).value = 'Hi there!'
}
