/* Question
Fix the code to gen Title caps.

Code:

var arr = [“guvi”, “geek”, “zen”, “fullstack”];
(function() {
 for (var i = 0; i <= arr.length; i++) {
 console.log(arr[0][i].toUpperCase() + arr[i].substr(1));
 }
})();
*/

//fixed code
let arr = ["guvi", "geek", "zen", "fullstack"];
(function() {
 for (let i = 0; i < arr.length; i++) {
 console.log(arr[i][0].toUpperCase() + arr[i].substring(1));
 }
})();