let arr = [4,5,734,43,45];

//*****************
// Your code here
// you need to loop 10 times, for example, using a for loop
//*****************

for (let i = 1; i < 11; i++){
    let ranNumber = Math.floor(Math.random() * 10) + 1;

    arr.push(ranNumber);
}

console.log(arr)