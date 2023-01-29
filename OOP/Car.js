"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
exports.Hennessey = exports.Koenigsegg = exports.McLaren = exports.Bugatti = void 0;
var Car = /** @class */ (function () {
    function Car(brand, speed, price) {
        this.brand = brand;
        this.speed = speed;
        this.price = price;
    }
    Car.prototype.setBrand = function (brand) {
        this.brand = brand;
    };
    ;
    Car.prototype.setSpeed = function (speed) {
        this.speed = speed;
    };
    ;
    Car.prototype.setPrice = function (price) {
        this.price = price;
    };
    ;
    Car.prototype.setName = function (brand) {
        this.brand = brand;
    };
    ;
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
var Bugatti = /** @class */ (function (_super) {
    __extends(Bugatti, _super);
    function Bugatti(speed, price, model) {
        var _this = _super.call(this, 'Bugatti', speed, price) || this;
        _this.model = model;
        return _this;
    }
    // overriding
    Bugatti.prototype.move = function () {
        console.log("".concat(this.getName(), " berjalan dengan kecepatan ").concat(this.getSpeed(), " mph"));
    };
    Bugatti.prototype.getName = function () {
        return "".concat(this.brand, " ").concat(this.model);
    };
    return Bugatti;
}(Car));
exports.Bugatti = Bugatti;
var McLaren = /** @class */ (function (_super) {
    __extends(McLaren, _super);
    function McLaren(speed, price, model) {
        var _this = _super.call(this, 'McLaren', speed, price) || this;
        _this.model = model;
        return _this;
    }
    // overriding
    McLaren.prototype.move = function () {
        console.log("".concat(this.getName(), " berjalan dengan kecepatan ").concat(this.getSpeed(), " mph"));
    };
    McLaren.prototype.getName = function () {
        return "".concat(this.brand, " ").concat(this.model);
    };
    return McLaren;
}(Car));
exports.McLaren = McLaren;
var Koenigsegg = /** @class */ (function (_super) {
    __extends(Koenigsegg, _super);
    function Koenigsegg(speed, price, model) {
        var _this = _super.call(this, 'Koenigsegg', speed, price) || this;
        _this.model = model;
        return _this;
    }
    // overriding
    Koenigsegg.prototype.move = function () {
        console.log("".concat(this.getName(), " berjalan dengan kecepatan ").concat(this.getSpeed(), " mph"));
    };
    Koenigsegg.prototype.getName = function () {
        return "".concat(this.brand, " ").concat(this.model);
    };
    return Koenigsegg;
}(Car));
exports.Koenigsegg = Koenigsegg;
var Hennessey = /** @class */ (function (_super) {
    __extends(Hennessey, _super);
    function Hennessey(speed, price, model) {
        var _this = _super.call(this, 'Hennessey', speed, price) || this;
        _this.model = model;
        return _this;
    }
    // overriding
    Hennessey.prototype.move = function () {
        console.log("".concat(this.getName(), " berjalan dengan kecepatan ").concat(this.getSpeed(), " mph"));
    };
    Hennessey.prototype.getName = function () {
        return "".concat(this.brand, " ").concat(this.model);
    };
    return Hennessey;
}(Car));
exports.Hennessey = Hennessey;
var ferrari = new Car('Ferrari', 220, 10000);
ferrari.setSpeed(500);
ferrari.move();
console.log(ferrari.getSpeed());
