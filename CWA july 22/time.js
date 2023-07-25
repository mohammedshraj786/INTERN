setInterval(Time,1000)
function Time()
{
    var time=new Date();
    document.getElementById("time").innerHTML=time.toLocaleTimeString();
    console.log(time);
}
setInterval(TIME,1000)
