let live = document.querySelector(".live");
let result = document.querySelector(".result");
let resetValues = document.querySelector(".reset");
let del = document.querySelector(".del");
let equal = document.querySelector(".equal");
let numbers = document.querySelectorAll(".number");
let operators = document.querySelectorAll(".oper");
console.log(live, result, numbers, operators);
let x = "";
let y = "";
let oper = "";
let operFlag = true;
let turn = "x";
flag = true;
function goLive(n) {
  live.innerText += n.getAttribute("value");
}
function inserValue(n) {
  turn == "x" ? (x += n.getAttribute("value")) : (y += n.getAttribute("value"));
}
let resetFlag = true;
function reset() {
  x = "";
  y = "";
  oper = "";
  operFlag = true;
  turn = "x";
  flag = true;
  live.innerHTML = "&nbsp;";
  result.innerHTML = "&nbsp;";
}

resetValues.addEventListener("click", function () {
  reset();
});

for (let i = 0; i < numbers.length; i++) {
  numbers[i].addEventListener("click", function () {
    if (resetFlag) {
      if (numbers[i].getAttribute("value") == ".") {
        if (flag) {
          flag = false;
          goLive(this);
          inserValue(this);
          console.log(x);
          console.log(y);
        }
      } else {
        goLive(this);
        inserValue(this);
        console.log(x);
        console.log(y);
      }
    } else {
      reset();
      resetFlag = true;
      if (numbers[i].getAttribute("value") == ".") {
        if (flag) {
          flag = false;
          goLive(this);
          inserValue(this);
          console.log(x);
          console.log(y);
        }
      } else {
        goLive(this);
        inserValue(this);
        console.log(x);
        console.log(y);
      }
    }
  });
}
function operFun(n) {
  if (operFlag && x) {
    operFlag = false;
    turn = "y";
    live.innerText += n.getAttribute("value");
    oper = n.getAttribute("value");
  }
}
for (let i = 0; i < operators.length; i++) {
  operators[i].addEventListener("click", function () {
    operFun(this);
    console.log(oper);
  });
}
function finalResult() {
  if (x && y) {
    switch (oper) {
      case "+":
        result.innerText = parseFloat(x) + parseFloat(y);
        break;
      case "-":
        result.innerText = parseFloat(x) - parseFloat(y);
        break;
      case "*":
        result.innerText = parseFloat(x) * parseFloat(y);
        break;
      case "/":
        result.innerText = parseFloat(x) / parseFloat(y);
        break;
      case "%":
        result.innerText = parseFloat(x) % parseFloat(y);
        break;
      default:
        result.innerText = "Error";
        live.innerText = "Error";
    }
  }
}
equal.addEventListener("click", function () {
  finalResult();
  if (x && y) {
    resetFlag = false;
  }
});
