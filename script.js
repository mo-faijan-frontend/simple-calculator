
function calculationM() {
  let inputa = document.getElementById('firstin');
  let a = +inputa.value;
  inputa.value = " ";
  
  let inputb = document.getElementById('secondin');
  let b = +inputb.value;
  inputb.value = " ";

  let multiply = a * b;

  let resulttag = document.getElementById('result');
  
  let finalresult = resulttag.innerHTML = multiply;
}

function calculationA() {
  let inputa = document.getElementById('firstin');
  let a = +inputa.value;
  inputa.value = " ";
  
  let inputb = document.getElementById('secondin');
  let b = +inputb.value;
  inputb.value = " ";

  let multiply = a + b;

  let resulttag = document.getElementById('result');
  
  resulttag.innerHTML = multiply;
}

function calculationS() {
  let inputa = document.getElementById('firstin');
  let a = +inputa.value;
  inputa.value = " ";
  
  let inputb = document.getElementById('secondin');
  let b = +inputb.value;
  inputb.value = " ";

  let multiply = a - b;

  let resulttag = document.getElementById('result');
  
  resulttag.innerHTML = multiply;
}

function calculationD() {
  let inputa = document.getElementById('firstin');
  let a = +inputa.value;
  inputa.value = " ";
  
  let inputb = document.getElementById('secondin');
  let b = +inputb.value;
  inputb.value = " ";

  let multiply = a / b;

  let resulttag = document.getElementById('result');
  
  resulttag.innerHTML = multiply;
}

function del() {
  let abc = document.getElementById('result');
  abc.innerHTML = " ";
}

function equal() {
  let resultvalue = document.getElementById('result');
  let inputvalue = document.getElementById('firstin');
  inputvalue.value = resultvalue.innerHTML;
}
