
  

export default function run(text) {
  const convertation = (strochka, num) => {

  
        if (strochka === "" || num > strochka.length) {
  return null;

  }
   else
   {

    return strochka.slice(-num).split("").reverse().join("");
  }
}
  return convertation(text, 4);
}