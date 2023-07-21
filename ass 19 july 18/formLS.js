function handleFormSubmit(event)
{
    event.preventDefault();
    
    
    
    
    
    
    const formData=new FormData(event.target);
    const formvalues={};
    formData.forEach((value,key)=>
    {
      
        formvalues[key]=value;
    });
    console.log(formvalues);

    localStorage.setItem('formData',JSON.stringify(formvalues));

    alert("form submitted successfully");


    const storedData = localStorage.getItem('formData');

  if (storedData) 
  {
    const formData = JSON.parse(storedData);
                
                     const displayDiv = document.getElementById('displayData');
                     displayDiv.innerHTML = `<p>First Name: ${formData.fname}</p>
                      <p>Last Name: ${formData.lname}</p>
                      <p>Email: ${formData.email}</p>
                      <p>Gender:${formData.gender}</p>
                      <p>Phone Number:${formData.pno}</p>
                      <p>Address:${formData.address}</p>`;
  }
  console.log(formData);



    
}
document.getElementById("form").onsubmit = handleFormSubmit;




 