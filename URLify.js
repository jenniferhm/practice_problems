// Cracking the Coding Interview Question: 1.3: URLify

function URLify(str, length) {
  let count = 0;
  let arr = str.split("");
  
  for (let i = 0; i < arr.length; i++) {
      if(count === length) {
          break;
      }        
      if(arr[i] === " ") {
          arr[i] = "%20";
      }
      count++;
  }

  arr = arr.slice(0,count);
  return arr.join("");
}

module.exports = URLify;