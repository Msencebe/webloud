function bclose() {
	if(document.getElementById('cover')||document.getElementById('bclose')) {
	var form = document.getElementById('contactform');
	form.setAttribute('style',' transform: scale(0, 0); transition: all 0.5s ease;')
	
	setTimeout(function(){
		
		document.getElementById('main').setAttribute('style','filter: blur(0);');
		document.getElementById('cover').remove();
				form.parentNode.removeChild(form);

			},500);
		}
}

function sendemail(project) {
	var form = document.forms['mainform'];
	var lang = form.getAttribute('lang');
		
	if (document.getElementById('emailcontact')) {
		var email = document.getElementById('emailcontact').value;
		if (email == '') {
			document.getElementById('contacterr').innerHTML = trad[lang].contact.emailerr;
			return false;
		}  else {
			if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
			 	document.getElementById('contacterr').innerHTML = '';
			} else{
			
				document.getElementById('contacterr').innerHTML = trad[lang].contact.noemailerr;
				return false;
			}
		}
		
	}
	
	if (document.getElementById('namecontact')) {
		var name = document.getElementById('namecontact').value;
		if (name == '') {
			document.getElementById('contacterr').innerHTML = trad[lang].contact.nameerr;
			return false;
		} else {
			document.getElementById('contacterr').innerHTML = '';
		}
	}
	
	if (document.getElementById('textcontact')) {
		var text = document.getElementById('textcontact').value;
		if (text == '') {
			document.getElementById('contacterr').innerHTML = trad[lang].contact.msgerr;
			return false;
		} else {
			document.getElementById('contacterr').innerHTML = '';
		}
	}
	
	
	
	var job = 'email=' + email + '&text=' + text + '&name=' + name + '&project=' + project;
	
	var xhttp;
	if (window.XMLHttpRequest) {
    	xhttp = new XMLHttpRequest();
    } else {
    	// code for IE6, IE5
    	xhttp = new ActiveXObject('Microsoft.XMLHTTP');
	}
	
	xhttp.onreadystatechange = function() {
  		if (this.readyState == 4 && this.status == 200) {
    		var feedback = this.responseText;
    		var form = document.getElementById('contactform');
    		form.setAttribute('style','opacity: 0;');
    		setTimeout(function(){ form.remove(); }, 3000);
    		document.getElementById('main').setAttribute('style','filter: blur(0px);');
    		document.getElementById('cover').remove();
 		}
	};

	xhttp.open('POST', 'function/sendemail.php', true);
	xhttp.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
	xhttp.send(job);
}

function contact(project) {

	var lang = document.getElementsByTagName('html')[0].lang;
	
	var a = document.createElement('div');
	a.id = 'contactform';
	a.className = 'contactform';
	
	var close = document.createElement('div');
	close.id = 'xclose';
	
	/*close.setAttribute('onclick','return close()');*/
	//a.appendChild(close);
	var closebutton = document.createElement('button');
	closebutton.id = 'bclose';
	closebutton.className = 'close-btn btn-default';
	closebutton.setAttribute('onclick','bclose()');
	closebutton.innerHTML = '<i class="far fa-window-close">X</i>';
	a.appendChild(closebutton);
	
	var head = document.createElement('div');
	head.innerHTML = trad[lang].contact.header;
	a.appendChild(head);
	
	var err = document.createElement('div');
	err.id = 'contacterr';
	a.appendChild(err);
	
	var form = document.createElement('form');
	form.className = 'form-horizontal';
	form.id = 'contactform';
	
	var email = document.createElement('input');
	email.className = 'form-control';
	email.name = 'emailcontact';
	email.id = 'emailcontact';
	email.type = 'email';
	email.placeholder = trad[lang].contact.email;
	var b = document.createElement('div');
	b.className = 'col-sm-12 form-group';
	b.appendChild(email);
	
	var name = document.createElement('input');
	name.className = 'form-control';
	name.name = 'namecontact';
	name.id = 'namecontact';
	name.type = 'text';
	name.placeholder = trad[lang].contact.name;
	var c = document.createElement('div');
	c.className = 'col-sm-12 form-group';
	c.appendChild(name);
	
	var text = document.createElement('textarea');
	text.className = 'form-control';
	text.name = 'textcontact';
	text.id = 'textcontact';
	text.type = 'text';
	text.form = 'contactform';
	text.rows = 10;
	text.placeholder = trad[lang].contact.message;
	var d = document.createElement('div');
	d.className = 'col-sm-12 form-group';
	d.appendChild(text);
	
	var button = document.createElement('button');
	button.className = 'contact-btn';
	button.type = 'button';
	button.setAttribute('onclick','sendemail(\''+project+'\')');
	button.innerHTML = trad[lang].contact.submit
	var e = document.createElement('div');
	e.className = 'col-sm-12 form-group';
	e.appendChild(button);
	
	a.appendChild(form);
	form.appendChild(b);
	form.appendChild(c);
	form.appendChild(d);
	form.appendChild(e);
	
	//var f = document.getElementById('contactbox');

	var a1 = document.createElement('div');
	a1.id = 'cover';
	a1.setAttribute('style','opacity: 1.0; width: 100%; height: 100%; z-index: 1; position: absolute;');
	var a2 = document.getElementById('main')
	a2.insertBefore(a1,a2.childNodes[0]);

	//f.appendChild(a);
	a2.parentNode.appendChild(a);

	document.getElementById('main').setAttribute('style','filter: blur(8px);');

	setTimeout(function(){

				a.classList.add('contactactive');

			},5);

	return false;
	
}