var xhr=new XMLHttpRequest();
var url='https://data.covid19india.org/state_district_wise.json';
xhr.open('GET',url,true);
xhr.onreadystatechange=function()
{
    if(xhr.readyState===XMLHttpRequest.DONE)
    {
        if(xhr.status===200)
        {
    
    var jsonResponse = JSON.parse(xhr.responseText);

    
    var resultElement = document.getElementById('result');
    resultElement.textContent = JSON.stringify(jsonResponse, null, 2);
            
        }
        else
        {
            console.error('failed',xhr.status);
        }
    }
};
xhr.send();     