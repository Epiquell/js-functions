import _ from 'lodash';
const old = (users, count = 1) => {
    const sort = users.sort((a, b) => {


      const a1 = new Date(a.birthday);


      const b1 = new Date(b.birthday);

      return a1 - b1;
    });   
  
    return sort.slice(0, count);
  };
  
  export default old;