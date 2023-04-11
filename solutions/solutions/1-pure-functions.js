// BEGIN
export default function isPrime(number) {
    var a,b,j;
    a="yes";
    b="no";
    if (number <= 1) {
        console.log('no');
        return false;
      }
    j=Math.sqrt(number);
    for(let i=2;i<=j;i++){
        if(number %i === 0){
            console.log(b);
            return false;
        }
    }
    console.log(a);
    return true;
    /*if(number%2==0){
        return */
    }
// END