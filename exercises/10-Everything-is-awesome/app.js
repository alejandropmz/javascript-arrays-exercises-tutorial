let myArray = [ 1, 0, 0, 0, 1, 0, 0, 0, 1, 1 ];


const ZerosToYahoos = (arr) => { // El parametro a pasar se llama arr
    let return_array = []; // arreglo vacío dentro de la función
    arr.forEach((item,index) => {
            // magic goes inside these brackets
            if (item == 1){
                return_array.push(parseInt("1"));
            }
            else {
                return_array.push("Yahoo");
            }
    });
    return return_array;
};

console.log(ZerosToYahoos(myArray)); // Se le pasa a la función el arreglo