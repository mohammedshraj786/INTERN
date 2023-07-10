function  template()
{
    var mark1=parseInt(document.getElementById("mark1").value);

    var mark2=parseInt(document.getElementById("mark2").value);
    
    var mark3=parseInt(document.getElementById("mark3").value);
    
    var mark4=parseInt(document.getElementById("mark4").value);
    
    var mark5=parseInt(document.getElementById("mark5").value);

const total=mark1+mark2+mark3+mark4+mark5;

if(total>450)
{
    alert("You scored grade A - Congratulations");
}
else if(total>300 && total<450)
{
    console.log(total);
    alert("You scored grade B - Good Job");
}
else if(total>250 && total<300)
{

    alert("You scored grade C - You can do better");
}
else{
    alert("Need to work hard");
}




}