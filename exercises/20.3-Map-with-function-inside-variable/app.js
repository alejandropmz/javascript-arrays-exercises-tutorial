let names = ['Alice','Bob','Marry','Joe','Hilary','Stevia','Dylan'];
let newArray = []

let prepender = function(name){
	return 'My name is: '+name;
};

//your code here

newArray.push(names.map(prepender))

console.log(newArray)

