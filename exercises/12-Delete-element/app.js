let people = ['juan','ana','michelle','daniella','stefany','lucy','barak', 'emilio'];

let newPeople = [];

//your code below

function deletePerson(person) {
    for (let i in people){
        let peop = people.filter((element) => element == person) // error aqui
        if (peop == people[i]){
            continue
        }else{
            newPeople.push(people[i])
        }
    }
    return newPeople;
}

console.log(deletePerson('daniella'));
console.log(deletePerson('juan'));
console.log(deletePerson('emilio'));
