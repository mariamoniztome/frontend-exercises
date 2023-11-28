window.onload = function () {
  var i, j;
  var num;
  var makeDice = document.querySelector(".dice").innerHTML;
  var total = 0;

  document.querySelector(".btn-dices").onclick = function () {
    document.querySelector(".container-right").innerHTML = "";
    num = document.querySelector(".dices").value;
    console.log("-->" + num);
    if (num == "") {
      alert("Tem de escolher um número");
    } else {
      document.querySelector(".multiple").innerHTML = "";
      for (i = 1; i <= num; i++) {
        document.querySelector(".multiple").innerHTML +=
          '<div class="dice dice' + i + '">' + makeDice + "</div>";
        var sort = prize(1, 6);
        document
          .querySelector(".dice" + i + " .face" + sort)
          .classList.add("show");
      }
      document.querySelector(".shuffle").classList.add("show");
    }
  };

  document.querySelector(".shuffle").onclick = function () {
    total = 0;
    for (i = 1; i <= num; i++) {
      var sort = prize(1, 6);
      document.querySelector(".container-right").innerHTML +=
        "<br>Saiu (" + sort + ")";
      total += sort;
      for (j = 1; j <= 6; j++) {
        if (
          document
            .querySelector(".dice" + i + " .face" + j)
            .classList.contains("show") == true
        ) {
          document
            .querySelector(".dice" + i + " .face" + j)
            .classList.remove("show");
        }
      }
      console.log(".dice" + i + " .face" + sort);
      document
        .querySelector(".dice" + i + " .face" + sort)
        .classList.add("show");
    }
    document.querySelector(".container-right").innerHTML +=
      "<br><strong>Total</strong> (" + total + ")<br>";
    var newTotal = 0;
    newTotal += total;
    console.log(newTotal);
    document.querySelector(".container-left").innerHTML =
      "<h2>Total (" + newTotal + ")</h2>";
  };

  function prize(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
};
