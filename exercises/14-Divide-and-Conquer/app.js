let list_of_numbers = [4, 80, 85, 59, 37,25, 5, 64, 66,	81,20, 64, 41, 22, 76,76, 55, 96, 2, 68];

// your code here

const mergeTwoList = (array) =>{
    let even = [];
    let odd = [];

    array.forEach(items => {
        if (items%2 == 0){
            even.push(items)
        }else{
            odd.push(items)
        }
    });
    return odd.concat(even)
    }


console.log(mergeTwoList(list_of_numbers))