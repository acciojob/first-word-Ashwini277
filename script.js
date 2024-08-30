function firstWord(str) {
    // Trim the string to remove leading and trailing spaces
    str = str.trim();

    // Find the index of the first space in the string
    const firstSpaceIndex = str.indexOf(' ');

    // If there's no space, return the entire string
    if (firstSpaceIndex === -1) {
        return str;
    }

    // Return the substring from the start to the first space
    return str.slice(0, firstSpaceIndex);
}

window.onload = function() {
    const inputString = prompt("Please enter a sentence:");
    const result = firstWord(inputString);
    alert(result);
};
