// BEGIN
const Girls = (users) => {
    /*var arr1 = [1, 2, 3, 4];
    let a;
    a=arr1.flat(3);
    console.log(a);*/

   const drugi = users.map(({ friends }) => friends);
    return drugi.flat().filter(({ gender }) => gender === 'female');
  };
  
  export default Girls;
// END