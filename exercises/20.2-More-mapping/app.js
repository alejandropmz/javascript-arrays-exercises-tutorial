

let myNumbers = [23,234,345,4356234,243,43,56,2];
let newArray = [];

function myFunction(number){ // función independiente que se pueda reutilizar
    return number * 3
}


newArray.push(myNumbers.map(myFunction))

console.log(newArray);


