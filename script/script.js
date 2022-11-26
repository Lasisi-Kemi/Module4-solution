var person = ["Joseph", "Aremu", "Solomon", "Kemi", "Janet", "Samuel", "Olayinka", "John"];

for (var names = 0; names < person.length; names++){

    var workersName = person[names];
    
    if (workersName.substr(0,1).toUpperCase() === 'J') {
        console.log("Goodbye " + workersName);
    } else {
        console.log("Hello " + workersName);
    }
}