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

function add(b){
    return new Promise((resolve,reject) => {
    setTimeout( () => { 
        a.push(b);
        const err = true ;
        if(!err) resolve();
        else reject("error occured");
    },2000)
})
}

add({ title:'three', body:'hqhq'})
.then(get)
.catch(err => console.log(err));
