var number;
var randomNumbers;
function Submit()
{
     number =document.getElementById('number').value;
    console.log("Input Number:",number,typeof(number));
    compare(number,randomNumbers);
}
document.addEventListener('DOMContentLoaded', function() {
    
    randomNumbers = generateRandomNumbers();
    console.log(randomNumbers,typeof(randomNumbers));
  });


  function generateRandomNumbers() {
    var numbers = [];
    
    while (numbers.length < 4) {
      var randomNumbers = Math.floor(Math.random() * 9) + 1; // Generate a random number between 1 and 10
      
      if (numbers.indexOf(randomNumbers) === -1) {
        numbers.push(randomNumbers);
      }
    }
    
    return numbers;
  }

function compare(number,randomNumbers)
{

var num = number;
var num2 = randomNumbers;

var num1 = Array.from(String(num),Number);
console.log(num1);



var bulls = 0;
var cows = 0;



for (var i = 0; i < num1.length; i++)
 {
  if (num1[i] == num2[i])
 {
    bulls++;
  } 
  else if (num1.includes(num2[i])) 
  {
 cows++;
  }
}

console.log("Bulls: " + bulls);
console.log("Cows: " + cows);
if (bulls === 4)
{
    console.log("hyy you won the game");
}
else
{
  console.log("try again");
}
var result=document.createElement('h2');

if(bulls==4){
  result.textContent="Bulls: " + bulls + "  cows: "+  cows + "     Hyy you win the game!";}
  else{
result.textContent="Bulls: " + bulls +    "  cows: "+  cows +    "      try again";
  }

document.getElementById("console").appendChild(result);


}







