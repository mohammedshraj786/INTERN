function temptables()
{
    var number=parseInt(document.getElementById("number").value);
    var fresult="";

    for(var i=1;i<=10;i++)
    {
        fresult=fresult + "<h4>" + number + "X" + i + "=" + i *number + "</h4>";
    }
    document.getElementById("output").innerHTML=fresult;
}