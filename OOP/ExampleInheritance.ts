import { Bugatti, Hennessey } from "./Car";

const venom = new Hennessey(270, 1200000, 'Venom GT');
const chiron = new Bugatti(304, 3800000, 'Chiron Super Sport 300+');

venom.move();
chiron.move();