let upper = (a) => a.toUpperCase();
let lower = (a) => a.toLowerCase();
let check =(a,b) => a.includes(b);
let slice =(a,b,c) => a.slice(b,c);
let b = prompt("Enter the String ");
let ch=+prompt(`*1 Upper Case
*2 Lower case
*3 Find string
*4 Slice
Enter the choice`);
switch (ch){
    case 1: alert(upper(b));
            break;
    case 2: alert(lower(b));
            break;
    case 3: let fin =prompt("Enter string");
            alert(check(b,fin));
            break;
    case 4: let start =+prompt("Enter the start index");
            let stop =+prompt("Enter the end index");
           alert(slice(b,start,stop));
            break;
}