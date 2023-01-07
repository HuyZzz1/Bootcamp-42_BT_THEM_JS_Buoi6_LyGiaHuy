document.getElementById("ex1").onclick = function () {
  let number = +document.getElementById("number").value;
  let result = "";

  for (let i = 2; i <= number; i++) {
    let checkSNT = true;
    for (let j = 2; j <= Math.sqrt(i); j++) {
      if (i % j === 0) {
        checkSNT = false;
        break;
      }
    }
    if (checkSNT) {
      result += i + " ";
    }
  }

  document.getElementById("message").innerHTML = result;
};
