console.log('Testando..');

var field = document.getElementById('res');
field.innerHTML = 0;

const soma = document.getElementById('soma'),
	  sub = document.getElementById('sub'),
	  mult = document.getElementById('mult'),
	  div = document.getElementById('div'),
	  buttons = document.querySelectorAll('.button');

let inserted = 0;

for ( let pos = 0; pos < buttons.length; pos++ ) {
	buttons[pos].addEventListener('click', function() {

		let digitedValue = buttons[pos].value,
			values = ["-", "+", "*", "/"],
			conta = field.innerHTML;

		//verifica o primeiro digito 
		if ( conta.length == 1 )
			field.innerHTML = ' ';

		if ( values.includes( digitedValue ) && inserted == 0 ) {
			inserted = 1;
			field.innerHTML += digitedValue;
		}

		//não repete o operador
		else if ( inserted != 1 || ! values.includes( digitedValue ) ) {
			inserted = 0;
			field.innerHTML += digitedValue;
		}

		else if ( values.includes(digitedValue) && digitedValue != conta.charAt( conta.length - 1 ) ) {
			field.innerHTML = conta.substring(0, conta.length - 1) + digitedValue; 
			//alert(conta.charAt( conta.length - 1 ));
		}
	});
}

const calc = document.querySelector('.calc');
calc.addEventListener('click', function () {
	var conta = field.innerHTML;
	field.innerHTML = eval(conta);
});


const clr = document.querySelector('.clear');

function clear () {
	document.getElementById('res').textContent = "";
}

clr.onclick = function() { clear() };

//debugger; pausa a execução