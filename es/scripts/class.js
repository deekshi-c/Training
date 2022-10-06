"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Hello {
    constructor(name) {
        this.name = name;
        console.log(this.name + " Here");
    }
    static methstatic() {
        console.log("Static");
    }
    getName() {
        console.log("prototype  " + this.name);
    }
}
let q = new Hello("Harry");
Hello.methstatic();
q.getName();
//# sourceMappingURL=class.js.map