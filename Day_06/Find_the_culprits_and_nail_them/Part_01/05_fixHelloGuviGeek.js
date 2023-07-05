/* Question Fix the below to alert hello Guvi geek
let fname=10.5; 
fname = "Guvi";
lname = "geek"
let name = fname+lname;
alert( 'hello ${name}' ); */

//fixed code
let fname=10.5;
let lname=10;
fname = "Guvi";
lname = "geek";
let name = `${fname} ${lname}`;
alert(`hello ${name}`);