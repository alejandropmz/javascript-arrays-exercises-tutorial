function sumTheElements(){

	arr = [2,13,34,5];
	

	let total = 0;
	for (let i in arr){
		total = total + arr[i]
	}
	return total
}

console.log(sumTheElements())
