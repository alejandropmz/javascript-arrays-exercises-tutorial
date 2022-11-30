// Code goes here

let arrays = [];

const matrixBuilder = (int) => {
    for (let i=0; i <= int; i++){
        for (let j=0; i <= int; j++){
            let num = Math.floor(Math.random()*1)
            arrays.push(num)
        }
    }
}


// do not change anything from this line down
console.log(matrixBuilder(5))