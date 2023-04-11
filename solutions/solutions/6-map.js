// BEGIN
export default function getChildren(users) {    
    let a,b;
    a= (user) => user.children;
    b=  users.map((user) => user.children).flat();
    return b;

    
  }/*a= (user) => user.children;
    b=  a.map((user) => user.children).flat();
    return a;*/
// END