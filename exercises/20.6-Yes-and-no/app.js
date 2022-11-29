let theBools = [0,1,0,0,1,1,1,0,0,1,0,1,1,0,0,0,0,0,0,0,0,1,0,0,0,0,1];

let boolString = [];

//your code here

theBools.map(function(value){
    if (value == 1){
        boolString.push("wiki")
    }else{
        boolString.push("woko")
    }
})

console.log(boolString)