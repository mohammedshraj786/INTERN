function convertFirstLetter() {
    const inputText = document.getElementById('inputText').value;
    const words = inputText.split(' ');
  console.log(words);
    const convertedWords = words.map(function(word) 
    {
      return word.charAt(0).toUpperCase() + word.slice(1);
    });
  
    const convertedText = convertedWords.join(' ');
    document.getElementById('output').innerText = convertedText;
  }
  