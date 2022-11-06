function sumTheElements(){

	arr = [2,13,34,5];

	let total = 0;
	//your code here

	for (let i = 0; i < arr.lenght; i++){
		total = total + arr[i];
	}

	return total;
}

console.log(sumTheElements())