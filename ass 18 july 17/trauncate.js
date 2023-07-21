function truncateString() {
    const inputText = document.getElementById('inputText').value;
    const inputLevel = document.getElementById('inputLevel').value;
  
    const level = parseInt(inputLevel);
  
    const truncatedStr = text_truncate(inputText, level);
    document.getElementById('output').innerText = truncatedStr;
  }
  
  function text_truncate(str, length, ending = '...') {
    if (length == null || length >= str.length) {
      return str;
    }
  
    const truncatedStr = str.slice(0, length) + ending;
    return truncatedStr;
  }
  