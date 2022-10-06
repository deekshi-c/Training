let color = function (mess, ...res) {
    console.log(mess);
    console.log(res);
    for (let i in res) {
        console.log(res[i]);
    }
};
let message = "Selected colors";
color(message, "red");
color(message, "red", "blue");
color(message, "red", "blue", "green");
color(message, "red", "blue", "green", "yellow");
//# sourceMappingURL=rest.js.map