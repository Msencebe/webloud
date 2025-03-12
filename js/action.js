function boxclose() {
  var c = document.getElementById("realisedby");
  c.parentNode.removeChild(c);
}

function scrollto(element) {
  document.getElementById(element).scrollIntoView();
  return false;
}

function errmsg(field, lang, action) {
  var errmsg = trad[lang].sub[field][action];
  document.getElementById("errormsg-3").setAttribute('style','transition: all 1s; transform: scaleY(1); height: auto');
  return errmsg;
}


/* Navigator */



/**form.addEventListener("change", sel);

function sel(e) {
  var item = e.target;
  var label = item.labels[0];
  if (item.checked == true && item.type == "radio") {
    label.classList.add("item-active");
  } else {
  }

  form = document.forms["mainform"];
  for (var i = 0; i < form.elements.length; i++) {
    if (form.elements[i].type == "radio") {
      if (form.elements[i].checked == false) {
        form.elements[i].labels[0].classList.remove("item-active");
      }
    }
  }
}**/


 

function trans() {
  // JavaScript para controlar la transición de color del título
  const title = document.getElementById('title1');
  const colors = ['#ed1c24', '#162850']; // Colores para la transición: rojo y verde
  let currentColor = 0;

  function changeColor1() {
      title.style.color = colors[currentColor];
      currentColor = (currentColor + 1) % colors.length;
  }
  setInterval(changeColor1, 2000); // Cambiar el color cada 2 segundos (2000 milisegundos)
}
trans2();

function trans2() {
  // JavaScript para controlar la transición de color del título
  const title = document.getElementById('title2');
  const colors = ['#162850', '#ed1c24']; // Colores para la transición: rojo y verde
  let currentColor = 0;

  function changeColor2() {
      title.style.color = colors[currentColor];
      currentColor = (currentColor + 1) % colors.length;
  }
  setInterval(changeColor2, 2000); // Cambiar el color cada 2 segundos (2000 milisegundos)
}

trans();



// Home page change image

var r = setInterval(rotate, 500);

var i = 0;

function rotate() {

	a = document.getElementById('perfbar');

	var img = [
			'images/lp.png',
			'images/lc.png',
			'images/ld.png',
			'images/lb.png',
			
		];
	
	
	function changeimg() {
		this.i++;
		if(i == 4) {
			i = 0;
		}
		a = document.getElementById('perfbar');
		a = a.childNodes[0];
		a.src = img[i];
	}

	changeimg();

}

a = document.getElementById('perfbar');
a.addEventListener('mouseover', stoprotate);
a.addEventListener('mouseout', restartrotate);

function stoprotate() {
	clearInterval(r);
}

function restartrotate() {
	r = setInterval(rotate, 500);
}

