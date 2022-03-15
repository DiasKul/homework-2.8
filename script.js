// Задание №1 По нажатию клавиш меняйте цвет заднего фона div - элемента.
// R- red;
// G - green;
// B - blue;
// W - white;
// Shift + B - black
// Shift + G - gray;

document.addEventListener('keydown', e => {
	const changeColor = e.key
	if(changeColor === 'r'){
		const clr = document.querySelector('#divColor')
		clr.style.background = 'red'
	}
	else if(changeColor === 'g'){
		const clr = document.querySelector('#divColor')
		clr.style.background = 'green'
	}
	else if(changeColor === 'b'){
		const clr = document.querySelector('#divColor')
		clr.style.background = 'blue'
	}
	else if(changeColor === 'w'){
		const clr = document.querySelector('#divColor')
		clr.style.background = 'white'
	}
	else if(changeColor === 'Shiftb'){
		const clr = document.querySelector('#divColor')
		clr.style.background = 'black' // Не получилось с шитфами, попробую еще раз переделать
	}
})

// Задание №2 Создайте переменную let i = 0;, по нажатию на кнопку выводите в консоль переменную i увеличивайте ее в 2 раза;

let i = 1
btnIncrease.addEventListener('mousedown', e => {
	i*=2
	const result = document.querySelector('#result')
	result.innerHTML = i
})


// Задание №3 Создайте div размером 500px * 500px, по нажатию на нее выводите в консоль позицию места куда вы нажали относительно div-a;

divCoords.addEventListener('mousedown', e => {
	console.log(`X - ${e.clientX} -- Y - ${e.clientY}`);
})

// Задание №4 Создайте input . При изменении инпута меняйте цвет заднего фона body на значение из этого инпута

inpColor.addEventListener('input', () => {
	const clr = inpColor.value
	if(clr === 'Red'){
		document.body.style.background = 'red'
	}
	else if(clr === 'Green'){
		document.body.style.background = 'green'
	}
	else if(clr === 'Gray'){
		document.body.style.background = 'gray'
	}
	else if(clr === 'Blue'){
		document.body.style.background = 'blue'
	}
	else if(clr === 'Yellow'){
		document.body.style.background = 'yellow'
	}
	else if(clr === 'Black'){
		document.body.style.background = 'black'
	}
	else if(clr === 'White'){
		document.body.style.background = 'white'
	}
})
