let mix = [42, true, "towel", [2,1], 'hello', 34.4, {"name": "juan"}];
let typeElements = [];

for (let i in mix){
    typeElements.push(typeof(mix[i]));
}

console.log(typeElements)

//your code here