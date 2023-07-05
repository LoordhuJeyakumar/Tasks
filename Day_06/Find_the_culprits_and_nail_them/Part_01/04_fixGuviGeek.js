/* Question Fix the below to alert Guvi geek
let admin=9, fname=10.5; 
fname = "Guvi";
lname = "geek"
admin = fname+lname;
alert( admin ); // "Guvi geek" */

// Fixed code
let admin=9, fname=10.5, lname=10; 
fname = "Guvi";
lname = "geek";
admin = `${fname} ${lname}`;
alert( admin ); // "Guvi geek"
