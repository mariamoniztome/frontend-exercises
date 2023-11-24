document.querySelector('.clica').onclick = function(){
	var num1 = eval(document.getElementById('cvx1').value);
	var num2 = eval(document.getElementById('cvx2').value);
	var result = num1+num2;
	//alert('Resultado é: '+result);
	document.querySelector('.resultado').innerHTML = document.querySelector('.resultado').innerHTML+'<br>Resultado é: '+result;
	document.getElementById('cx1').value = '';
	document.getElementById('cx2').value = '';
	document.querySelector('.resultado').classList.add('novaClass');
}

document.querySelector('.tira').onclick = function(){
	document.querySelector('.resultado').classList.remove('novaClass');
}

function escreveTexto(txt){
	document.querySelector('.resultado').innerHTML =
		document.querySelector('.resultado').
		innerHTML+'<br>'+txt;
}

document.getElementById('btnPers').onclick = function(){
	var text = document.getElementById('pers').value;
	escreveTexto(text);
}
