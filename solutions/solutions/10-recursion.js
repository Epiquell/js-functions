function sequenceSum(start, ocon) {
 if (start > ocon){


       return NaN;

  }

    else{



         if (start === ocon){
            return start;

          }   

          else{
            return start + sequenceSum(start + 1, ocon);
          }
      }
    }
  
export default sequenceSum;
  