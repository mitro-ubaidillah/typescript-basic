"use strict";
exports.__esModule = true;
var Car_1 = require("./Car");
var venom = new Car_1.Hennessey(270, 1200000, 'Venom GT');
var chiron = new Car_1.Bugatti(304, 3800000, 'Chiron Super Sport 300+');
venom.move();
chiron.move();
