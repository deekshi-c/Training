// var employee ={
//     id: 1,
//     show : function(){
//        setTimeout(function() { console.log(this.id)},1000);
//     }
// }; output undefined due to absence of arrow
var employee = {
    id: 1,
    show: function () {
        setTimeout(() => console.log(this.id), 1000);
    }
};
employee.show();
//# sourceMappingURL=this.js.map