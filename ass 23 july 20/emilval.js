function Validate()
{
    var userIP=document.getElementById("email").value;
    console.log(userIP,typeof(userIP));
    // var realIP=JSON.stringify(userIP);
    // console.log(us,typeof(realIP));
    var regx= /^[a-z0-9]+@[a-z]+\.[a-z]{2,3}$/; 
    ;
    if(regx.exec(userIP))
    {
        console.log("Correct");
        document.getElementById("result").innerHTML="Valid E-Mail";
    }
    else{
        console.log("errer");
        document.getElementById("result").innerHTML="INValid E-Mail";
    }
   
}