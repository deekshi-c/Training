const bon = () => 0.5;
let bonus = function (value = 10, b = value * bon()) {
    console.log(value + b);
}


bonus();
bonus(100);
bonus(40);