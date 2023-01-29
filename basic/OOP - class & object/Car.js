var Car = /** @class */ (function () {
    function Car() {
    }
    Car.prototype.getBrand = function () {
        return this.brand;
    };
    ;
    Car.prototype.getSpeed = function () {
        return this.speed;
    };
    ;
    Car.prototype.getPrice = function () {
        return "$".concat(this.price);
    };
    ;
    Car.prototype.getName = function () {
        return this.brand;
    };
    ;
    Car.prototype.move = function () {
        console.log("".concat(this.brand, " berjalan dengan kencang"));
    };
    ;
    return Car;
}());
var ferrari = new Car();
ferrari.brand = 'Ferrari';
ferrari.speed = 220;
ferrari.price = 1000000;
console.log(ferrari.getSpeed());
ferrari.move();
console.log(ferrari.price);
