class Greeter {
    readonly name: string = "world";

    constructor(otherName?: string) {
        if(otherName !== undefined) {
            this.name = otherName;
        }
    }

    // err() {
    //     this.name = "not oke";
    // }
}

const g = new Greeter();
// g.name = "not okay";
console.log(g.name);
