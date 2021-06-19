'use strict'
const el = document.getElementById('root')

const fetchItem = (item) => {
	fetch(`https://ghibliapi.herokuapp.com/${ item }`)
		.then(res => res.json())
		.then(item => {
			const list = item.map(item => `<li>${ item.name }</li>`).join('\n')
			return el.innerHTML = `<ul>${ list }</ul>`
		})
}

fetchItem('people')


