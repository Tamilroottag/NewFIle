function adding(a,b) {
  let result = a * b;
  return result;
}
let compare = adding(5,6);
console.log(compare);

let userName = "Ramesh"

console.log(userName); 

let indexEl = document.createElement("input");
indexEl.type = "text";
indexEl.textContent = userName.value;
document.body.appendChild(indexEl)