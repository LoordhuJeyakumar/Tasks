/* 

let login = 'Employee';
let message = (login == 'Employee') ? :
  (login == 'Director') ? 'Greetings' :
  (login == '') ? 'No login' :
  '';
console.log(message); */


let login = 'Employee';
let message = (login == 'Employee') ? 'Welcom Employee':  (login == 'Director') ? 'Greetings Director' :
  (login == '') ? 'No login' :
  '';
console.log(message);