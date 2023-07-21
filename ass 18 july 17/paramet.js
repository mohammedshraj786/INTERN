function parameterizeString() {
    var inputString = document.getElementById('inputString').value;
    var parameterizedString = stringParameterize(inputString);
    document.getElementById('result').textContent = ("parameterizedString:    " +      parameterizedString);
}
function stringParameterize(str) {
    // Convert to lowercase and replace non-alphanumeric characters with a hyphen
    return str.toLowerCase().replaceAll(" ", "-");
}
