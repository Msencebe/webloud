var opticks;
window.addEventListener('opticksEvent', function (event) {
	opticks = event.detail.opticksClickId;
	sessionStorage.setItem('opticksid', opticks);
}, true);