document.querySelector('.key-wrapper').addEventListener('click', function (event) {
  var clickedButton = event.target;
  var currentNumber = document.getElementById('number').value;
  var historyContainer = document.querySelector('.history-container');

  if (clickedButton.innerText === '=') {
    historyContainer.innerHTML += currentNumber + '=' + eval(currentNumber) + '<br>';
    document.getElementById('number').value = eval(currentNumber);
  } else if (clickedButton.innerText === 'C') {
    document.getElementById('number').value = '';
  } else if (clickedButton.innerText === 'CE') {
    document.getElementById('number').value = '';
    historyContainer.innerHTML = '';
  } else {
    document.getElementById('number').value = currentNumber + clickedButton.innerText;
  }
});

document.getElementById('mode').onclick = function () {
  this.classList.toggle('box-yellow');
  document.querySelector('.calculator-container').classList.toggle('background-blue');
  document.querySelector('.history-container').classList.toggle('background-yellow');
  document.querySelector('.calculator-container--body').classList.toggle('background-blue');
  document.getElementById('number').classList.toggle('background-yellow');
  


  document.querySelectorAll('.key-yellow').forEach(function (element) {
    element.classList.toggle('background-blue');
  });

  document.querySelectorAll('.key-grey').forEach(function (element) {
    element.classList.toggle('background-yellow');
  });
}
