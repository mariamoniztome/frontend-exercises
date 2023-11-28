window.onload = function(){

var i,j;
var num;
var desenhaDado = document.querySelector('.dado').innerHTML;
var total = 0;

document.querySelector('.nDados').onclick = function(){
	document.querySelector('.direita').innerHTML = '';
	num = document.querySelector('.dados').value;
	console.log('-->'+num);
	if (num=='') {
		alert('Tem de escolher um número');
	}else{
		document.querySelector('.multiplosDados').innerHTML = ''; 
		for (i = 1; i <= num; i++) {
		document.querySelector('.multiplosDados').innerHTML += '<div class="dado dado'+i+'">'+desenhaDado+'</div>';
		var sort = sorteio(1,6);
		document.querySelector('.dado'+i+' .face'+sort).classList.add('mostra');
		}
		document.querySelector('.baralhar').classList.add('mostra');

	}
}

document.querySelector('.baralhar').onclick = function(){
	total = 0;
	for (i = 1; i <= num; i++) {
		var sort = sorteio(1,6);
		document.querySelector('.direita').innerHTML += '<br>Saiu ('+sort+')';
		total += sort;
		for (j = 1; j <= 6; j++) {

			if (document.querySelector('.dado'+i+' .face'+j).classList.contains('mostra') == true) {
				document.querySelector('.dado'+i+' .face'+j).classList.remove('mostra');
			}
		}
		console.log('.dado'+i+' .face'+sort);
		document.querySelector('.dado'+i+' .face'+sort).classList.add('mostra');
		/* if (document.querySelector('.dado'+i+ '.face1').classList.contains('mostra') == true) {
			document.querySelector('.dado'+i+ '.face1').classList.removes('mostra');
		}
		if (document.querySelector('.dado'+i+ '.face2').classList.contains('mostra') == true) {
			document.querySelector('.dado'+i+ '.face2').classList.removes('mostra');
		}
		if (document.querySelector('.dado'+i+ '.face3').classList.contains('mostra') == true) {
			document.querySelector('.dado'+i+ '.face3').classList.removes('mostra');
		}
		if (document.querySelector('.dado'+i+ '.face4').classList.contains('mostra') == true) {
			document.querySelector('.dado'+i+ '.face4').classList.removes('mostra');
		}
		if (document.querySelector('.dado'+i+ '.face5').classList.contains('mostra') == true) {
			document.querySelector('.dado'+i+ '.face5').classList.removes('mostra');
		}
		if (document.querySelector('.dado'+i+ '.face6').classList.contains('mostra') == true) {
			document.querySelector('.dado'+i+ '.face6').classList.removes('mostra');
		}*/

	}	
	document.querySelector('.direita').innerHTML += '<br>Total ('+total+')<br>';
	var novoTotal = 0;
	novoTotal += total;
	console.log(novoTotal);
	document.querySelector('.esquerda').innerHTML = '<h1>Total ('+novoTotal+')</h1>';
}

function sorteio(min,max){
	return Math.floor(Math.random()*(max - min +1)) + min;
}

}