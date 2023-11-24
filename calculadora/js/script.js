document.querySelector('.clica').onclick = function(){
	var num1 = eval(document.getElementById("cx1").value);
	var num2 = eval(document.getElementById("cx2").value);
	var result = num1+num2;
	escreveTexto("Resultado é :"+result);
	/*document.querySelector(".resultado").innerHTML = document.querySelector(".resultado").innerHTML+"<br>Resultado é :"+result;*/
	document.getElementById("cx1").value = "";
	document.getElementById("cx2").value = "";
	document.querySelector('.resultado').classList.add('novaClass');
}

/*document.querySelector('.tira').onclick = function(){
	document.querySelector('.resultado').classList.remove('novaClass');
}*/

function escreveTexto(nome){
	document.querySelector(".resultado").innerHTML = document.querySelector(".resultado").innerHTML+'<br>'+nome;
}

document.getElementById('btnPers').onclick = function(){
	var text = document.getElementById("pers").value;
	escreveTexto(text);
}
document.getElementById('ola').onclick = function(){
	escreveTexto('Olá');
}
document.getElementById('hello').onclick = function(){
	escreveTexto('Hello');
}
document.getElementById('adeus').onclick = function(){
	escreveTexto('Adeus');
}










