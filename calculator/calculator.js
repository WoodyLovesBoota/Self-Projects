// Get number cell
let numbers = document.querySelectorAll(".number");

// Get arith cell
let plus = document.querySelector("#add");
let minus = document.querySelector("#substract");
let multi = document.querySelector("#multiplier");
let divider = document.querySelector("#divide");
let rootArith = document.querySelector("#root");
let powArith = document.querySelector("#pow");
let reciporal = document.querySelector("#reciporal");
let plusMinus = document.querySelector("#plus-minus");
let spot = document.querySelector("#spot");
let equal = document.querySelector("#equal");
let backspace = document.querySelector("#backspace");
let cancelAll = document.querySelector("#cancel-all");
let cancelNow = document.querySelector("#cancel-now");

// Get result cell
let resultNumber = document.querySelector("#result-num");
let pastNumber = document.querySelector("#past-num");

let result = "";
let now = "";
let past = "";
let tempValue = [];

const calcValue = (num) => {
  let result = 0;
  if (tempValue[1] === "+") result = Number(tempValue[0]) + num;

  tempValue = [];
  tempValue.push(result);
  return result;
};

numbers.forEach((e) => {
  e.addEventListener("click", () => {
    now = now + e.innerHTML;
    resultNumber.innerText = now;
  });
});

// 여기부터 다시
// tempValue 에 저장되는거 생각 다시
// 하나씩 밀리는듯
// equal 도 다시보기
plus.addEventListener("click", () => {
  if (tempValue.length === 0) {
    tempValue.push(now);
    past = now + "+";
    tempValue.push("+");
    pastNumber.innerText = past;
    now = "";
    resultNumber.innerText = "0";
  } else {
    let temp = calcValue(Number(now));
    pastNumber.innerText += now + "+";
    now = "";
    resultNumber.innerText = temp;
    tempValue.push("+");
  }
});

minus.addEventListener("click", () => {});
multi.addEventListener("click", () => {});
divider.addEventListener("click", () => {});

rootArith.addEventListener("click", () => {
  let res = Math.sqrt(Number(now));
  past = "Math.sqrt(" + now + ")";
  now = res.toString();
  pastNumber.innerText = past;
  resultNumber.innerText = now;
});

powArith.addEventListener("click", () => {
  let res = Math.pow(Number(now), 2);
  past = "Math.pow(" + now + ", 2)";
  now = res.toString();
  pastNumber.innerText = past;
  resultNumber.innerText = now;
});

reciporal.addEventListener("click", () => {
  let res = 1 / Number(now);
  now = res.toString();
  resultNumber.innerText = now;
});

plusMinus.addEventListener("click", () => {
  let temp = [...now];
  temp[0] === "-" ? temp.shift() : temp.unshift("-");
  now = temp.join("");
  resultNumber.innerText = now;
});

spot.addEventListener("click", () => {
  let temp = [...now];
  if (temp.indexOf(".") === -1) temp.push(".");
  now = temp.join("");
  resultNumber.innerText = now;
});

equal.addEventListener("click", () => {
  let temp = calcValue(Number(now));
  pastNumber.innerText += now;
  now = "";
  resultNumber.innerText = temp;
});

backspace.addEventListener("click", () => {
  let temp = [...now];
  temp.pop();
  now = temp.join("");

  temp.length === 0
    ? (resultNumber.innerText = "0")
    : (resultNumber.innerText = now);
});

cancelAll.addEventListener("click", () => {
  now = "";
  past = "";
  result = "";
  pastNumber.innerText = "";
  tempValue = [];
  resultNumber.innerText = "0";
});

cancelNow.addEventListener("click", () => {
  now = "";
  resultNumber.innerText = "0";
});
