const add = () => {
      let num1 = Number(document.getElementById('operator1').value);
      let num2 = Number(document.getElementById('operator2').value);
      let sum = num1 + num2;
			document.querySelector("#text2").innerHTML = "Addition";
      document.getElementById('result').innerHTML = sum;
    }
    const subtract = () => {
      let num1 = Number(document.getElementById('operator1').value);
      let num2 = Number(document.getElementById('operator2').value);
      let sum = num1 - num2;
			document.querySelector("#text2").innerHTML = "Subtraction";
      document.getElementById('result').innerHTML = sum;
    }
    const multiply = () => {
      let num1 = Number(document.getElementById('operator1').value);
      let num2 = Number(document.getElementById('operator2').value);
      let sum = num1 * num2;
			document.querySelector("#text2").innerHTML = "Multiplication";
      document.getElementById('result').innerHTML = sum;
    }
    const divide = () => {
      let num1 = Number(document.getElementById('operator1').value);
      let num2 = Number(document.getElementById('operator2').value);
      let sum = num1 / num2;
			document.querySelector("#text2").innerHTML = "Division";
      document.getElementById('result').innerHTML = sum;
    }
    const modulo = () => {
      let num1 = Number(document.getElementById('operator1').value);
      let num2 = Number(document.getElementById('operator2').value);
      let sum = num1 % num2;
			document.querySelector("#text2").innerHTML = "Remainder";
      document.getElementById('result').innerHTML = sum;
    }