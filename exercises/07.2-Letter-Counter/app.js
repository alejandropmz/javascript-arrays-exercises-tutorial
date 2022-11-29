let par = "Lorem ipsum dolor sit amet consectetur adipiscing elit Curabitur eget bibendum turpis Curabitur scelerisque eros ultricies venenatis mi at tempor nisl Integer tincidunt accumsan cursus"
let counts = {};

// your code here

for (let i=0; i<par.length; i++){ //hacemos el bucle en base al tamaño del string
    if (par[i].toLowerCase() == " "){ // si el elemento por el cual se recorre es vacío entonces que continúe
        continue
    }else if (counts[par[i].toLowerCase()] == undefined){ // si al anexar un elemento al objeto counts es indefinido (lo cual pasa cuando es el primero) entonces le damos valor de 1
        counts[par[i].toLowerCase()] = 1 // le damos valor de 1 
    }else {
        counts[par[i].toLowerCase()] = counts[par[i].toLowerCase()] + 1 // si no es indefinido (porque ya existe en el obejeto) entonces que se sume
    }
}

console.log(counts)

