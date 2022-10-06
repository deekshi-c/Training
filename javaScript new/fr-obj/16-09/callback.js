const a = [
    { title : 'one', body: 'afjh '},
    { title : 'two', body: 'hfhf'}
];
 
function get(){
    setTimeout(() => {
        let output ='';
        a.forEach((a,index) => {
            output += ` ${a.title}\n`;
        });
        console.log(output);
    }, 1000);
}

function add(b,fun){
    setTimeout( () => {
        a.push(b);
        fun();
    },2000)
}
 
// get();

add({ title:'three', body:'hqhq'},get);
