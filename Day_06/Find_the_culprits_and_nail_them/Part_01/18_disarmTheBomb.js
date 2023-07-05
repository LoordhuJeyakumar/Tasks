/*Question Fix the code to disarm the bomb.

let countdown = 100;
while (countdown > 0) {
  countdown--;
  if(countdown == 0)
  {
   console.log("bomb triggered");
  }
}
 */

//fixed code
let countdown = 100;
while (countdown > 0) {
  countdown--;
  if(countdown == 0)
  {
   console.log("bomb triggered");
  }else{
    console.log("bomb disarmed");
  }
  break;

}