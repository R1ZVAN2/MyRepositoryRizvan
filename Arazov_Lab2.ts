interface Vehicle {
    start(): void;
    stop(): void;
}

abstract class MotorVehicle implements Vehicle {
    private fuelLevel: number;

    constructor(fuel: number) {
        this.fuelLevel = fuel;
    }

    start(): void {
        console.log("Транспорт запущен");
    }

    stop(): void {
        console.log("Транспорт остановлен");
    }

    abstract getSpeed(): number;
}

class Car extends MotorVehicle {
    getSpeed(): number {
        return 120; 
    }
}

class Motorcycle extends MotorVehicle {
    getSpeed(): number {
        return 90;
    }
}

const car = new Car(50);
const bike = new Motorcycle(30);

car.start();
console.log(`Скорость авто: ${car.getSpeed()}`);

bike.start();
console.log(`Скорость мотоцикла: ${bike.getSpeed()}`);