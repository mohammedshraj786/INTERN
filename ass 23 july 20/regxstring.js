function checkInput() 
{
    var input = document.getElementById('input').value;
    console.log(input,typeof(input));
    var regx=/^[A-Z]/;
    if(regx.exec(input))
    {
        console.log("Uppercase");
        document.getElementById('result').innerHTML='The First Letter Is In UpperCase';
    }
    else
    {
        console.log("lowercase");
        document.getElementById("result").innerHTML="The First Letter Is NOT In UpperCase";


    }



}
