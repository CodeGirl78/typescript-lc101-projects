import { Payload } from './Payload';

export class Astronaut {
    // properties and methods
    massKg: number;
    material: string;
    constructor (massKg: number, material: string) {
        this.massKg = massKg;
        this.material = material;
    }
 }