class Base {
    x = 4;
}

class Derived extends Base {
    constructor() {
        super();
        console.log(this.x);
    }
}

const trial = new Derived();
trial.x;