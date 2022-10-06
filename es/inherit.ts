class Aa {
    constructor(name) {
        console.log(name + " Parent");
    }
    getD() {
        return 20;
    }
}

class Bb extends Aa {
    constructor(name) {
        super(name);
        console.log(name + " child");
    }
    getD() {
        return super.getD();
    }

}

let ee = new Bb("halland");
console.log(ee.getD());
