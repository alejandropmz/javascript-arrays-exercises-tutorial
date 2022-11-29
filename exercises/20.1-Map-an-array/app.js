let arrayOfCelsiusValues = [-2,34,56,-10];

let arrayOfFahrenheitValues = arrayOfCelsiusValues.map(function(value){ // Recorre cada elemento del arreglo
	// el cual a la vez va cambiando
	
	return value*9/5 + 32
	
});

console.log(arrayOfFahrenheitValues);