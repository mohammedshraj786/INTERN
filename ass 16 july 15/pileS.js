function searchWord() 
        {
          const paragraph = document.getElementById("myParagraph");
          const searchInput = document.getElementById("searchInput");
          const searchTerm = searchInput.value.trim();
  
          const found = new RegExp(`\\b${searchTerm}\\b`, "gi");
          const matches = paragraph.textContent.match(found);
  
          var result=document.createElement('h2');
          if (matches)
{
  result.textContent= "the entered word is found";
}
else{
    result.textContent="the word is not found";
}
document.getElementById("console").appendChild(result);
        }