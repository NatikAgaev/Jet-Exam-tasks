let str = prompt("Write a text with small and big letters", "HeLo");

function swapCase(string) {
    let arr = [];
    for(let i = 0; i < string.length; i++) {
        if(string[i].toLowerCase() == string[i]) {
            arr.push(string[i].toUpperCase());
        } else {
            arr.push(string[i].toLowerCase());
        }
    }
    return arr.join("");
}

console.log(swapCase(str));