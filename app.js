window.onload = function() {
    setTimeout(()=>{
	document.querySelector("#loader").style.opacity = 0;
	document.querySelector("#loader").style.display = "none";
	document.querySelector("#loader").style.pointerEventa = "none";
    },2000)
};
