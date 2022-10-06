setTimeout(function () {
        console.log("log");
    }, 5000);

function x(y) {
        console.log("A function");
        y();
    }

function y() {
        console.log("B ");
    }

    x(y);