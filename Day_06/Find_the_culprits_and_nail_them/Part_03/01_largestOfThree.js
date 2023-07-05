/* Question
Fix the code to get the largest of three.

Code:

aa = (f,s,t) => {
 let f,s,t;
 console.log(f,s,t);
 if(f>s &&f>t){
 console.log(f)}
 else if(s>f && s>t){
 console.log(s)}
 else{
 console.log(t)}
}
aa(1,2,3);
*/

aa = (f, s, t) => {
    //let f,s,t;  //already we get those valus as argument so this code no need
    console.log(f, s, t);
    if (f > s && f > t) {
        console.log(f)
    }
    else if (s > f && s > t) {
        console.log(s)
    }
    else {
        console.log(t)
    }
}
aa(1, 2, 3);