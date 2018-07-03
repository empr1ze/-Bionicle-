window.onload = function() {

	// Get the modal
	var tahuModal = document.getElementById('tahuModal');
	var kopakaModal = document.getElementById('kopakaModal');
	var galiModal = document.getElementById('galiModal');
	var pohatuModal = document.getElementById('pohatuModal');
	var lewaModal = document.getElementById('lewaModal');
	var onuaModal = document.getElementById('onuaModal');
	var takanuvaModal = document.getElementById('takanuvaModal');

	// Get the button that opens the modal
	var tahuBtn = document.getElementsByClassName("tahuBtn")[0];
	var kopakaBtn = document.getElementsByClassName("kopakaBtn")[0];
	var galiBtn = document.getElementsByClassName("galiBtn")[0];
	var pohatuBtn = document.getElementsByClassName("pohatuBtn")[0];
	var lewaBtn = document.getElementsByClassName("lewaBtn")[0];
	var onuaBtn = document.getElementsByClassName("onuaBtn")[0];
	var takanuvaBtn = document.getElementsByClassName("takanuvaBtn")[0];

	// Get the <span> element that closes the modal
	var tahuSpan = document.getElementsByClassName("close")[0];
	var kopakaSpan = document.getElementsByClassName("close")[1];
	var galiSpan = document.getElementsByClassName("close")[2];
	var pohatuSpan = document.getElementsByClassName("close")[3];
	var lewaSpan = document.getElementsByClassName("close")[4];
	var onuaSpan = document.getElementsByClassName("close")[5];
	var takanuvaSpan = document.getElementsByClassName("close")[6];

	// When the user clicks on the button, open the modal
	tahuBtn.onclick = function() {tahuModal.style.display = "block";}
	kopakaBtn.onclick = function() {kopakaModal.style.display = "block";}
	galiBtn.onclick = function() {galiModal.style.display = "block";}
	pohatuBtn.onclick = function() {pohatuModal.style.display = "block";}
	lewaBtn.onclick = function() {lewaModal.style.display = "block";}
	onuaBtn.onclick = function() {onuaModal.style.display = "block";}
	takanuvaBtn.onclick = function() {takanuvaModal.style.display = "block";}

	// When the user clicks on <span> (x), close the modal
	tahuSpan.onclick = function() {tahuModal.style.display = "none";}
	kopakaSpan.onclick = function() {kopakaModal.style.display = "none";}
	galiSpan.onclick = function() {galiModal.style.display = "none";}
	pohatuSpan.onclick = function() {pohatuModal.style.display = "none";}
	lewaSpan.onclick = function() {lewaModal.style.display = "none";}
	onuaSpan.onclick = function() {onuaModal.style.display = "none";}
	takanuvaSpan.onclick = function() {takanuvaModal.style.display = "none";}

	// When the user clicks anywhere outside of the modal, close it
	window.onclick = function(event) {
		if (event.target == tahuModal) {
			tahuModal.style.display = "none";
		}
		if (event.target == kopakaModal) {
			kopakaModal.style.display = "none";
		}
		if (event.target == galiModal) {
			galiModal.style.display = "none";
		}
		if (event.target == pohatuModal) {
			pohatuModal.style.display = "none";
		}
		if (event.target == lewaModal) {
			lewaModal.style.display = "none";
		}
		if (event.target == onuaModal) {
			onuaModal.style.display = "none";
		}
		if (event.target == takanuvaModal) {
			takanuvaModal.style.display = "none";
		}
	} 
}