function hideEmail() {
    const inputEmail = document.getElementById("inputEmail").value;
    const atIndex = inputEmail.indexOf('@');
    
    if (atIndex === -1) {
        alert("Invalid email address. Please enter a valid email.");
        return;
    }

    const username = inputEmail.slice(0, atIndex);
    const hiddenEmail = hideEmailAddress(username);

    document.getElementById("hiddenEmail").textContent = hiddenEmail;
}

function hideEmailAddress(username) {
    const lengthToShow = 2;
    const hiddenPart = "*".repeat(username.length - lengthToShow);

    return username.slice(0, lengthToShow) + hiddenPart;
}
