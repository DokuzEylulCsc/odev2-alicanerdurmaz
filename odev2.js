function convertToRoman(num) {
  if (num > 3999 || num < 1) {
    document.getElementById("outputRoman").innerHTML = "please enter a number between \n1 - 3999";
    return;
  }
  const digits = {
    M: 1000,
    CM: 900,
    D: 500,
    CD: 400,
    C: 100,
    XC: 90,
    L: 50,
    XL: 40,
    X: 10,
    IX: 9,
    V: 5,
    IV: 4,
    I: 1
  };

  let romanNumber = "";
  for (let i in digits) {
    while (num >= digits[i]) {
      romanNumber += i;
      num -= digits[i];
    }
  }
  document.getElementById("outputRoman").innerHTML = romanNumber;
  return romanNumber;
}

function convertToNumber(romanNum) {
  let decimalNumber = 0;

  var decimal = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
  var roman = ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"];
  for (var i = 0; i <= decimal.length; i++) {
    while (romanNum.indexOf(roman[i]) === 0) {
      decimalNumber += decimal[i];
      romanNum = romanNum.replace(roman[i], "");
    }
  }

  document.getElementById("outputNumber").innerHTML = decimalNumber.toString();
  return decimalNumber;
}

document.getElementById("btnNumberToRoman").addEventListener("click", function() {
  let result = document.getElementById("number").value;
  convertToRoman(result);
});

document.getElementById("btnRomanToNumber").addEventListener("click", function() {
  let result = document.getElementById("roman").value.toUpperCase();
  convertToNumber(result);
});
