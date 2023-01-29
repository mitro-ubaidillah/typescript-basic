var Greeter = /** @class */ (function () {
    function Greeter(otherName) {
        this.name = "world";
        if (otherName !== undefined) {
            this.name = otherName;
        }
    }
    return Greeter;
}());
var g = new Greeter();
// g.name = "not okay";
console.log(g.name);
