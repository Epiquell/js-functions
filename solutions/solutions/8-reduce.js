// BEGIN
   // BEGIN
   export default function getgroupby(mass, brand) {

    return mass.reduce((res, A) => {


      if (!res[A[brand]]) {
res[A[brand]] = [];
      }

      
      res[A[brand]].push(A);

      return res;

    }, {});
  };
  
// END