function boxclose() {
	if(document.getElementById('realisedby')) {
		var c = document.getElementById('realisedby');  		
		c.setAttribute('style',' transform: scale(0, 0); transition: all 0.5s ease;')
	
		setTimeout(function(){
			document.getElementById('main').setAttribute('style','filter: blur(0);');
			document.getElementById('cover').remove();
					c.parentNode.removeChild(c);

				},500);
	}
}

function scrollto(element) {

	document.getElementById(element).scrollIntoView();
	return false;
	
}


function getpagecontent(project,type) {
	if(document.getElementById("realisedby") == null){
	var job = 'project=' + project + '&type=' + type;

	var xhttp;
	if (window.XMLHttpRequest) {
		xhttp = new XMLHttpRequest();
	} else {
		// code for IE6, IE5
		xhttp = new ActiveXObject("Microsoft.XMLHTTP");
	}

	xhttp.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {

			var result = JSON.parse(this.responseText);
			//console.log(this.responseText);

			var a = document.createElement('div');	
			a.id = 'realisedby';
			a.classList.add('really');

			//a.innerHTML = 'Realised by ';	
			var b = document.createElement('img');	
			b.src = 'images/logo-loudingads.png';	
			a.appendChild(b);

			var c = document.createElement('div');
			c.id = 'realisedbyclose';
			c.setAttribute('onclick','boxclose()');
			c.innerHTML = '<button class="fa-window-close"> X </button>';
			/*c.innerHTML = 'Klik om te sluiten';*/
			a. appendChild(c);


			//var m = document.getElementById('main');	
			//m.appendChild(a);

			var h = '<h2>'+ result.title +'</h2><br />' + result.text;
			var l = document.createElement('div');
			l.id = 'realisedbybox'
			l.innerHTML = h;
			a.appendChild(l);

			var dpo = document.getElementsByClassName('dpoemail');

			for (var i = 0; i < dpo.length; i++) {
				dpo[i].innerHTML = 'dpo@energie.verbouwingsadviseur.eu';
			}

			var a1 = document.createElement('div');
			a1.id = 'cover';
			a1.setAttribute('style','opacity: 1.0; width: 100%; height: 100%; z-index: 1; position: absolute;');
			var a2 = document.getElementById('main');
			a2.insertBefore(a1,a2.childNodes[0]);

			//f.appendChild(a);
			a2.parentNode.appendChild(a);

			document.getElementById('main').setAttribute('style','filter: blur(8px);');

			setTimeout(function(){

				a.classList.add('reallyactive');

			},5);

			return false;

		}

	};

	xhttp.open("POST", "function/content.php", true);
	xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
	xhttp.send(job);
	
	return false;
	}
}

//document.addEventListener('click',boxclose);