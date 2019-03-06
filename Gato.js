let container;
let children;
let turno = true;
let ganador = false;

/**
   * Inicializa los listeners y asigna a los div su respectiva imagen
   * y además, modifica su atributo.
   */


window.addEventListener("load", function(evt) {
  container = document.querySelector("#container");
  container.addEventListener("mousedown", function(evt) {
    console.log("clic en el contenedor");
  });

  children = document.querySelectorAll(".cuadrito");
  for (let i=0; i<children.length; i++) {
      children[i].addEventListener("mousedown", function(evt) {
        if (evt.target.hasAttribute("clicked")) {
          return false;
        }else{
          if(turno){
            evt.target.setAttribute("clicked", "j1");
          }
          else{
            evt.target.setAttribute("clicked", "j2");
          }
          console.log("clic en el hijo");
          evt.stopPropagation();
          turno = !turno;
          actualizaTurno();
          revisaGanador();
      }
    });
  }
});

/**
   * De los div clickeados, revisa cuáles forman una jugada ganadora y cuáles forman un empate.
   * @return Regresa una alarma notificando el resultado de la jugada.
   */

function revisaGanador(){

  let position1 = $('#position1');
  let position2 = $('#position2');
  let position3 = $('#position3');
  let position4 = $('#position4');
  let position5 = $('#position5');
  let position6 = $('#position6');
  let position7 = $('#position7');
  let position8 = $('#position8');
  let position9 = $('#position9');

  //revisa filas j1
  if((position1.attr("clicked")=="j1" &&
      position2.attr("clicked")=="j1" &&
      position3.attr("clicked")=="j1") ||
     (position4.attr("clicked")=="j1" &&
      position5.attr("clicked")=="j1" &&
      position6.attr("clicked")=="j1") ||
     (position7.attr("clicked")=="j1" &&
      position8.attr("clicked")=="j1" &&
      position9.attr("clicked")=="j1"))
  {
      alert("Ganó el jugador 1");
      ganador = true;
      }
  else if((position1.attr("clicked")=="j2" &&
            position2.attr("clicked")=="j2" &&
            position3.attr("clicked")=="j2") ||
            (position4.attr("clicked")=="j2" &&
            position5.attr("clicked")=="j2" &&
            position6.attr("clicked")=="j2") ||
            (position7.attr("clicked")=="j2" &&
            position8.attr("clicked")=="j2" &&
            position9.attr("clicked")=="j2"))
  {
      alert("Ganó el jugador 2");
      ganador = true;  }
//revisa columnas
   else if((position1.attr("clicked")=="j2" &&
            position4.attr("clicked")=="j2" &&
            position7.attr("clicked")=="j2") ||
            (position2.attr("clicked")=="j2" &&
            position5.attr("clicked")=="j2" &&
            position8.attr("clicked")=="j2") ||
            (position3.attr("clicked")=="j2" &&
            position6.attr("clicked")=="j2" &&
            position9.attr("clicked")=="j2"))
    {
      alert("Ganó el jugador 2");
      ganador = true;    }

  else if((position1.attr("clicked")=="j1" &&
           position4.attr("clicked")=="j1" &&
           position7.attr("clicked")=="j1") ||
           (position2.attr("clicked")=="j1" &&
           position5.attr("clicked")=="j1" &&
           position8.attr("clicked")=="j1") ||
           (position3.attr("clicked")=="j1" &&
           position6.attr("clicked")=="j1" &&
           position9.attr("clicked")=="j1"))
    {
      alert("Ganó el jugador 1");
      ganador = true;    }

 //revisar diagonales
    else if((position1.attr("clicked")=="j1" &&
             position5.attr("clicked")=="j1" &&
             position9.attr("clicked")=="j1") ||
             (position3.attr("clicked")=="j1" &&
             position5.attr("clicked")=="j1" &&
             position7.attr("clicked")=="j1"))
    {
      alert("Ganó el jugador 1");
      ganador = true;    }

    else if((position1.attr("clicked")=="j2" &&
             position5.attr("clicked")=="j2" &&
             position9.attr("clicked")=="j2") ||
             (position3.attr("clicked")=="j2" &&
             position5.attr("clicked")=="j2" &&
             position7.attr("clicked")=="j2"))
    {
      alert("Ganó el jugador 2");
      ganador = true;
    }
  //revisa que no es empate
    else{
      if(document.getElementById("position1").hasAttribute("clicked") &&
          document.getElementById("position2").hasAttribute("clicked") &&
          document.getElementById("position3").hasAttribute("clicked") &&
          document.getElementById("position4").hasAttribute("clicked") &&
          document.getElementById("position5").hasAttribute("clicked") &&
          document.getElementById("position6").hasAttribute("clicked") &&
          document.getElementById("position7").hasAttribute("clicked") &&
          document.getElementById("position8").hasAttribute("clicked") &&
          document.getElementById("position9").hasAttribute("clicked"))

        alert("Empate!");
        ganador = true;    }
}
/**
   * De los div clickeados, revisa el turno y modifica la imagen superior-
   */

function actualizaTurno(){
  var el = document.getElementById("turno");
    if(turno)
        el.innerHTML="<img src=\"circle.svg\" width=\"60px\" height=\"60px\">";
    else
        el.innerHTML="<img src=\"cross.svg\" width=\"60px\" height=\"60px\">";
}
