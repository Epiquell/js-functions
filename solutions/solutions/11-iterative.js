const smallestDivisor = (num) => {


      if (num < 1){

        return NaN;
      }

      if (num === 1){
        return 1;

      }
          let div = 2;

        
          while (num % div !== 0){
            div += 1;
          }


          return div;
        };
export default smallestDivisor;
  