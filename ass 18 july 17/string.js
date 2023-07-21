function checkInput() {
    var input = document.getElementById('input').value;
    console.log(input);
    var numbers = /^[0-9]+$/;
  if(input.match(numbers)){
    document.getElementById('result').innerText = 'The input is a number.';
  }
  else{
    document.getElementById('result').innerText = 'The input is a string.';
  }
  }
  
  
  
  
  
  
  