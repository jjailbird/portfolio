const span = document.querySelector("span");
let count = 0;

setInterval(() => {
  count++;
  span.innerText = count;
}, 1000);

function resetCount() {
  count = 0;
  span.innerText = count;
}

function makeFunc() {
  var name = "Mozilla";
  function displayName() {
    alert(name);
  }

  displayName();
}

var myFunc = makeFunc();
