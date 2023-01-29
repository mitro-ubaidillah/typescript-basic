class Car {
    protected brand: string;
    protected speed: number;
    protected price: number;

    constructor(brand: string, speed: number, price: number) {
        this.brand = brand;
        this.speed = speed;
        this.price = price;
    }

    setBrand(brand: string): void {
        this.brand = brand;
    };

    setSpeed(speed: number): void {
        this.speed = speed;
    };

    setPrice(price: number): void {
        this.price = price;
    };

    setName(brand: string): void {
        this.brand = brand;
    };

    getBrand(): string {
        return this.brand;
    };

    getSpeed(): number {
        return this.speed;
    };

    getPrice(): string {
        return `$${this.price}`;
    };

    getName(): string {
        return this.brand;
    };

    move(): void {
        console.log(`${this.brand} berjalan dengan kencang`);
    };
}


export class Bugatti extends Car {
    private model: string;

    constructor(speed: number, price: number, model: string) {
        super('Bugatti', speed, price);
        this.model = model;
    }

    // overriding
    move(): void {
        console.log(`${this.getName()} berjalan dengan kecepatan ${this.getSpeed()} mph`);
    }

    getName(): string {
        return `${this.brand} ${this.model}`;
    }
}

export class McLaren extends Car {
    private model: string;

    constructor(speed: number, price: number, model: string) {
        super('McLaren', speed, price);
        this.model = model;
    }

    // overriding
    move(): void {
        console.log(`${this.getName()} berjalan dengan kecepatan ${this.getSpeed()} mph`);
    }

    getName(): string {
        return `${this.brand} ${this.model}`;
    }
}

export class Koenigsegg extends Car {
    private model: string;

    constructor(speed: number, price: number, model: string) {
        super('Koenigsegg', speed, price);
        this.model = model;
    }

    // overriding
    move(): void {
        console.log(`${this.getName()} berjalan dengan kecepatan ${this.getSpeed()} mph`);
    }

    getName(): string {
        return `${this.brand} ${this.model}`;
    }
}

export class Hennessey extends Car {
    private model: string;

    constructor(speed: number, price: number, model: string) {
        super('Hennessey', speed, price);
        this.model = model;
    }

    // overriding
    move(): void {
        console.log(`${this.getName()} berjalan dengan kecepatan ${this.getSpeed()} mph`);
    }

    getName(): string {
        return `${this.brand} ${this.model}`;
    }
}

const ferrari = new Car('Ferrari', 220, 10000);
ferrari.setSpeed(500);
ferrari.move();
console.log(ferrari.getSpeed());