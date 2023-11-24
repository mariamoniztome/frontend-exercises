function insert(number){
	var num = document.getElementById('numero').value;
	document.getElementById('numero').value = num + number;
}

document.querySelector('.um').onclick = function(){
	insert('1');
}

document.querySelector('.dois').onclick = function(){
	insert('2');
}

document.querySelector('.tres').onclick = function(){
	insert('3');
}

document.querySelector('.quatro').onclick = function(){
	insert('4');
}

document.querySelector('.cinco').onclick = function(){
	insert('5');
}

document.querySelector('.seis').onclick = function(){
	insert('6');
}

document.querySelector('.sete').onclick = function(){
	insert('7');
}

document.querySelector('.oito').onclick = function(){
	insert('8');
}

document.querySelector('.nove').onclick = function(){
	insert('9');
}

document.querySelector('.div').onclick = function(){
	insert('/');
}

document.querySelector('.multi').onclick = function(){
	insert('*');
}

document.querySelector('.soma').onclick = function(){
	insert('+');
}

document.querySelector('.menos').onclick = function(){
	insert('-');
}

document.querySelector('.raizQuad').onclick = function(){
	insert('√');
}
document.querySelector('.per').onclick = function(){
	insert('%');
}
document.querySelector('.delete').onclick = function(){
	document.getElementById('numero').value = '';
}

document.querySelector('.result').onclick = function(){
	document.querySelector('.hist').innerHTML = document.querySelector('.hist').innerHTML + document.getElementById('numero').value;
	document.getElementById('numero').value = eval(document.getElementById('numero').value);
	document.querySelector('.hist').innerHTML = document.querySelector('.hist').innerHTML +'='+document.getElementById('numero').value +'<br>';
}

document.getElementById('mode').onclick = function(){
	document.querySelector('.calculadora').classList.toggle('aspeto');
}