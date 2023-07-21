function swapText() {
    const inputText = document.getElementById("inputText").value;
    const swappedText = swap(inputText);
    document.getElementById("output").textContent = swappedText;
}

function swap(text) {
    let result = "";
    let i = 0;

    while (i < text.length) {
        if (i + 2 < text.length) 
        {
            // Swap the first two letters and keep the third letter
            result += text[i + 1] + text[i] + text[i + 2];
        } 
        else if (i + 1 < text.length) 
        {
            // If only one letter left, add it to the result
            result += text[i] + text[i + 1];
        } 
        else 
        {
            // If the last letter, add it to the result
            result += text[i];
        }
        i += 3; // Move to the next group of three letters
    }

    return result;
}
