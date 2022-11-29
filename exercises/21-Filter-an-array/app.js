let allNames = ["Romario","Boby","Roosevelt","Emiliy", "Michael", "Greta", "Patricia", "Danzalee"];
let resultingNames = [];

let newArray = allNames.filter(function(word){ // función de filtrado de palabra word
    if (word[0] == "R"){ // condición que si la primera letra de ese parametro es R entonces...
    return resultingNames.push(word) // Esa palabra completa se anexa al nuevo arreglo
    }
})


console.log(resultingNames);