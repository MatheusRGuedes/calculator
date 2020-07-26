console.log('Ainda faltam melhorias que quero implementar :)');

const buttons = document.querySelectorAll('.button'),
	  back = document.getElementsByClassName('back')[0],
	  clr = document.querySelector('.clear'),
	  field = document.getElementById('res');

/*
	Correções a fazer:
	- corrigir a questão de um número tem mais de uma virgula
*/

let operators = [ '-', '+', '*', '/', ',' ],
	inserted = 0,
	fontSize = 25;

field.innerHTML = '0';

function insertValue( value ) {
	var conta = field.innerHTML;

	//verifica o primeiro digito
	if ( field.innerText.length == 1 && conta === '0' ) {
		field.innerHTML = '';
	}

	//diminui a fonte qnto maior for o res
	if ( conta.length > 6 && conta.length % 2 ) {
		fontSize -= 1.5;
		document.getElementById('res').style.fontSize = fontSize + "px";
	}

	//identifica o primeiro operador selecionado
	if ( operators.includes( value ) && inserted == 0 ) {
		inserted = 1;

		if (conta.length == 1 && conta === '0')
			field.innerHTML += '0' + value;
		else 
			field.innerHTML += value;
	}

	//não repete o operador e insere número
	else if ( inserted != 1 || !operators.includes( value ) ) {
		
		field.innerHTML += value;
	}

	//troca o operador para o atual
	else if ( operators.includes(value) && 
		      operators.includes(conta.charAt( conta.length - 1 )) ) {

		field.innerHTML = conta.substring(0, conta.length - 1) + value;
		//alert(conta.charAt( conta.length - 1 ));
	}

	else field.innerHTML += value;
}

//nome clear apenas, nao pode é uma função existente
function clearRegister () {
	document.getElementById('res').innerHTML = '0';
	inserted = 0;
};


function backValue () {
	let conta = field.innerHTML;

	if ( conta && conta.length > 1 ) {

		let conta = field.innerHTML;
		field.innerHTML = conta.substring( 0, conta.length - 1 );

	} else if ( conta && conta.length == 1 ) {

		field.innerHTML = '0';
	}
};


function calc() {
	if ( field.innerHTML ) {

		//troca a virgula por ponto e faz a conta
		let conta = eval( converter(field.innerHTML, "virgulaPorPonto") );

		field.innerHTML = converter( conta.toString(), "pontoPorVirgula" ); //converte para string o res do eval

	}
};


const calculate = document.querySelector('.calc');
calculate.onclick = function() { calc() };


function converter ( str, opc ) {
	let count;

	//eval returna tipo numerico e sem advirgula( valor.toString() ) da undefined na propriedade length
	switch(opc) {
		case "pontoPorVirgula":
			for ( count = 0; count < str.length; count++ ) {
				if ( str[count] === "." ) {		

					str = str.replace(str[count], ",");
				}
			}
			break;

		case "virgulaPorPonto":
			for ( count = 0; count < str.length; count++ ) {
				if ( str[count] === "," ) {

					str = str.replace(str[count], ".");
				}
			}
			break;
	}

	return str;
};
