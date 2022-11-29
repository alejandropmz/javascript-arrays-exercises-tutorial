let allNames = ["Romario","Boby","Roosevelt","Emiliy", "Michael", "Greta", "Patricia", "Danzalee"];
let resultingNames = [];

let firstR = allNames.filter(function(word){
    if (word[0].toLowerCase == "R"){
        return resultingNames.push(allNames[word])
    }
})

console.log(resultingNames);