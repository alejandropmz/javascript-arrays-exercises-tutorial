let tasks = [
	{ label: 'Eat my lunch', done: true },
	{ label: 'Make the bed', done: false },
	{ label: 'Have some fun', done: false },
	{ label: 'Finish the replits', done: false },
	{ label: 'Replit the finishes', done: true },
	{ label: 'Ask for a raise', done: false },
	{ label: 'Read a book', done: true },
	{ label: 'Make a trip', done: false }
];


let filters = tasks.filter((elem)=>{ //filtramos en la variable filters 
	return elem.done == true; // solo retorno los elem (parametro) que se van recorriendo en tasks donde done sea true
})

console.log(filters) // imprimo la variable donde se guarda el filtro de tasks
