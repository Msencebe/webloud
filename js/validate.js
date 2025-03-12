function errmsg(field, lang, action) {
    var errmsg = trad[lang].sub[field][action];
    document.getElementById("errormsg-3").setAttribute('style','transition: all 1s; transform: scaleY(1); height: auto');
    return errmsg;
  }

  function validate(field, lang, type) {
    if (type == "email") {
      if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(field.value)) {
        return 1;
      } else {
        return 0;
      }
    }
  


  }
  
  function sbmt() {
    var err = document.getElementById("errormsg-3");
  
    var form = document.forms["mainform"];
    var lang = form.getAttribute("lang");
  
    var data = new Object();


  
    if (
      form.elements.fieldemail.value == "" ||
      form.elements.fieldemail.value == null
    ) {
      var d = errmsg("email", form.lang, "miss");
      document.getElementById("errormsg-3").innerHTML = d;
      return;
    } else {
      var val = validate(form.elements.fieldemail, lang, "email");
      if (val == 1) {
        document.getElementById("errormsg-3").innerHTML = "";
      } else {
        var d = errmsg("email", form.lang, "validate");
        document.getElementById("errormsg-3").innerHTML = d;
        return;
      }
    }
  
    if (
      form.elements.fieldphone.value == "" ||
      form.elements.fieldphone.value == null
    ) {
      var d = errmsg("phone", form.lang, "miss");
      document.getElementById("errormsg-3").innerHTML = d;
      return;
    } else {
      var val = validate(form.elements.fieldphone, lang, "phone");
      if (val == 1) {
        document.getElementById("errormsg-3").innerHTML = "";
      } else {
        var d = errmsg("phone", form.lang, "validate");
        document.getElementById("errormsg-3").innerHTML = d;
        return;
      }
    }
	if(form.elements.fieldpp.checked !== true) {
		var d = errmsg('pp',form.lang,'miss');
		document.getElementById('errormsg-3').innerHTML = d;
		return;
	} else {
		document.getElementById('errormsg-3').innerHTML = '';
	}
  
		data.dateofbirth = form.elements.fieldday.value + '/' + form.elements.fieldmonth.value + '/' + form.elements.fieldyear.value;

		data.houseowner = form.elements.fieldhouseowner.value;
		data.housetype = form.elements.fieldhousetype.value;
		data.job = form.elements.fieldjobtype.value;

		data.city = form.elements.fieldcity.value;
		data.state = form.elements.fieldstate.value;
		data.province = form.elements.fieldprovince.value;
		data.region = form.elements.fieldregion.value;
		data.fulladdress = form.elements.fieldfulladdress.value;
		data.zipcode = form.elements.fieldzipcode.value;
		data.firstname = form.elements.fieldfirstname.value.trim();
		data.lastname = form.elements.fieldlastname.value.trim();
		data.gender = form.elements.fieldgender.value;
		data.email = form.elements.fieldemail.value.trim();
		data.phone = form.elements.fieldphone.value.trim();
		data.honeypot = form.elements.email.value.trim();
		data.address = form.elements.fieldaddress.value;

		data.pp = 1;

		// HasOffers SDK
		var queryString = window.location.search;
		var urlParams = new URLSearchParams(queryString);
		if (urlParams.get("cid") == null || urlParams.get("cid") == "") {
			if (urlParams.get("offer") != null && urlParams.get("offer") != "") {
			  data.offer = urlParams.get("offer");
			  data.clickid = sessionStorage.getItem(`tdl_default_${data["offer"]}`);
			}
		}

		// Opticks
		if(sessionStorage.getItem('opticksid') !== null) {
			data.opticks = sessionStorage.getItem('opticksid');
			data.opticksbis = opticks;
		}
    subscribe(data);
  
    return;

  }

  function subscribe(data) {

	var keys = Object.keys(data);
	var value = Object.values(data);
	var job = '';

	for (var i = 0; i < keys.length; i++) {
		if(i == (keys.length - 1)) {
			job += keys[i] + '=' + value[i];
		} else {
			job += keys[i] + '=' + value[i] + '&';
		}
	}

	var xhttp;
	if (window.XMLHttpRequest) {
		xhttp = new XMLHttpRequest();
	} else {
		// code for IE6, IE5
		xhttp = new ActiveXObject("Microsoft.XMLHTTP");
	}

	xhttp.onreadystatechange = function() {

		if(!document.getElementById('thankyoubg')) {

			var main = document.getElementById('body');
			var cover = document.createElement('div');
			cover.id = 'thankyoubg';
			main.appendChild(cover);
		
			var a = document.createElement('div');
			a.classList.add('container');
			a.classList.add('thanks-page');
			a.classList.add('thankyouloader');

			var b = document.createElement('div');
			b.id = 'thankyouloader-txt';
			var c = document.createElement('span');
			c.className = "thanks-span"
			c.innerHTML = 'Checking your data to see if you are qualified for installation<br><br><img src="images/loader.gif">';
			
			b.appendChild(c);
			a.appendChild(b);

			cover.appendChild(a);
			document.getElementById('main').setAttribute('style','filter: blur(8px);');

		}

		if (this.readyState == 4 && this.status == 200) {

			if(document.getElementById('thankyoubg')) {
				document.getElementById('thankyoubg').remove();
			}

			try {
	        	var result = JSON.parse(this.responseText);
	    	} catch (e) {
	    		var lang = document.forms['mainform'].getAttribute('lang');
	    		var d = errmsg('general',lang,'error');
				var form = document.forms['mainform'];
	    		form.elements.fieldfirstname.parentNode.appendChild(d);
				d.classList.add('errormsgactive');
	        	return false;
	    	}
		
		
			try{
			/*	gtag('event', 'registration', {
					'event_category' : 'button',
			  		//'event_label' : 'ccc',
			  		'value' : a
				});*/
			}catch (e) {

			}
			if(result.code == 200 && result.message == 'valid user') {
				var thpg = 1;
				try{
				/*	gtag('event', 'validation', {
						'event_category' : 'button',
				  		//'event_label' : 'ccc',
				  		'value' : a
					});*/
				}catch (e) {

				}
			} else {
				var thpg = 2;
			}
	    	var location = 'https://' + window.location.hostname + window.location.pathname + '?thpg='+thpg;

			window.location.replace(location);

		}

	};
	xhttp.open("POST", "function/action.php", true);
	xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
	
	setTimeout(function() {
	xhttp.send(job);
	}, 2000);

}