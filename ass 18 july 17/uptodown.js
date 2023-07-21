function convertCase() {
    const inputText = document.getElementById('inputText').value;
    const convertedText = toggleCase(inputText);
    document.getElementById('output').innerText = convertedText;
  }
  
  function toggleCase(str) {
    let convertedStr = '';
  
    for (let i = 0; i < str.length; i++) {
      const char = str.charAt(i);
  
      if (char === char.toUpperCase()) {
        convertedStr += char.toLowerCase();
      } else {
        convertedStr += char.toUpperCase();
      }
    }
  
    return convertedStr;
  }
  