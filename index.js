console.log('Testando..');

const soma = document.getElementById('soma'),
	  sub = document.getElementById('sub'),
	  mult = document.getElementById('mult'),
	  div = document.getElementById('div'),
	  buttons = document.querySelectorAll('.button'),
	  back = document.getElementsByClassName('back')[0],
	  clr = document.querySelector('.clear');

let inserted = 0,
	field = document.getElementById('res'),
	fontSize = 25;

field.innerHTML = 0;

for ( let pos = 0; pos < buttons.length; pos++ ) {
	buttons[pos].addEventListener('click', function() {

		let digitedValue = buttons[pos].value,
			values = [ "-", "+", "*", "/" ],
			conta = field.innerHTML;

		//verifica o primeiro digito 
		if ( conta.length == 1 )
			field.innerHTML = ' ';

		//diminui a fonte qnto maior for o res
		if ( conta.length > 6 && conta.length % 2) {
			fontSize -= 1.5;
			document.getElementById('res').style.fontSize = fontSize + "px";
		}

		//identifica o primeiro operador selecionado
		if ( values.includes( digitedValue ) && inserted == 0 ) {
			inserted = 1;
			field.innerHTML += digitedValue;
		}

		//não repete o operador
		else if ( inserted != 1 || ! values.includes( digitedValue ) ) {
			inserted = 0;
			field.innerHTML += digitedValue;
		}

		//troca o operador para o atual 
		else if ( values.includes(digitedValue) && digitedValue != conta.charAt( conta.length - 1 ) ) {
			field.innerHTML = conta.substring(0, conta.length - 1) + digitedValue; 
			//alert(conta.charAt( conta.length - 1 ));
		}
	});
}

const calc = document.querySelector('.calc');
calc.addEventListener('click', function () {
	let conta = field.innerHTML;
	field.innerHTML = eval(conta);
});


function clear () {
	document.getElementById('res').textContent = "";
}
clr.onclick = function() { clear() };

function backValue () {
	let conta = field.innerHTML;
	field.innerHTML = conta.substring( 0, conta.length - 1 );
} 
back.onclick = function() { backValue() };

//debugger; pausa a execução