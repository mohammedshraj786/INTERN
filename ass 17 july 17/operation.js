function modulus()
{
   var value1= document.getElementById("number1");
    var value2=document.getElementById("number2");
    var modulus1=parseInt(value1.value);
    var modulus2=parseInt(value2.value);

    
    var result=(modulus1 % modulus2);
    console.log(result);
    var final=document.createElement('h2');
    document.getElementById('console').innerText = ("Modulus for this number is:"+ result);
    

}


function divison()
{
   var value1= document.getElementById("number1");
    var value2=document.getElementById("number2");
    var modulus1=parseInt(value1.value);
    var modulus2=parseInt(value2.value);

    
    var result=(modulus1 / modulus2);
    console.log(result);
    var final=document.createElement('h2');
    document.getElementById('console').innerText = ("Divison for this number is:"+ result);
    

}

function multiply()
{
   var value1= document.getElementById("number1");
    var value2=document.getElementById("number2");
    var modulus1=parseInt(value1.value);
    var modulus2=parseInt(value2.value);

    
    var result=(modulus1 * modulus2);
    console.log(result);
    var final=document.createElement('h2');
    document.getElementById('console').innerText = ("Multiplication for this number is:"+ result);
    

}