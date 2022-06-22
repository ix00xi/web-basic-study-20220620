main();

function main() {
    loadJsonFile();
}

function loadJsonFile() {
    fetch("../json/user.json")
    .then(result => {
        console.log(result);
    });
    
}