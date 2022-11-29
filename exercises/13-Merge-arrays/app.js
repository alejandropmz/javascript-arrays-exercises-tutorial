let chunk_one = [ 'Lebron', 'Aaliyah', 'Diamond', 'Dominique', 'Aliyah', 'Jazmin', 'Darnell' ];
let chunk_two = [ 'Lucas' , 'Jake','Scott','Amy', 'Molly','Hannah','Lucas'];


const mergeArrays = (firstArray, secondArray) => {
    let newArray = [] 
    firstArray.forEach(element => { //iteramos el arreglo completo por cada item
        newArray.push(element) //y ese item lo anexamos al newArray
    });
    secondArray.forEach(element => {
        newArray.push(element)
    })
    return newArray
}

console.log(mergeArrays(chunk_one, chunk_two));