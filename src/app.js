/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  let excuseElement = document.getElementById("excuse");
  excuseElement.innerHTML = generateExcuse();
  //write your code here
  console.log("Hello and lie to me!");
};

function generateExcuse() {
  let who = ["I", "My father", "Antonio", "The cat"];
  let action = ["can not", "like to", "got crushed", "drive"];
  let what = ["with js", "go", "dancing in the monnlight", "the car"];
  let when = ["Today", "When was a child", "Tomorrow", "In the future"];

  let randomWho = who[Math.floor(Math.random() * who.length)];
  let randomAction = action[Math.floor(Math.random() * action.length)];
  let randomWhat = what[Math.floor(Math.random() * what.length)];
  let randomWhen = when[Math.floor(Math.random() * when.length)];
  let excuse =
    randomWho + " " + randomAction + " " + randomWhat + " " + randomWhen;
  return excuse;
}
