import _ from 'lodash';

// BEGIN
export default function calculateAverage(...args) {
    let a,b,c;
    if (args.length === 0) {
        return null;
      } 
    a=args.reduce((acc, number) => acc + number, 0);;
    b=a/args.length;
    return b;
}

// END