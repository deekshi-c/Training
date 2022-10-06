export{ };
class Hello {
    constructor(name) {
        this.name = name;
        console.log(this.name + " Here")
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