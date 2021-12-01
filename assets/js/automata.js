
var output = document.querySelector("#time");
var milisegundos;
var aceptacion = true;

const sleep = (time) => {
  return new Promise(resolve => setTimeout(resolve, time))
}

function obtenerSimbolos(){
	let simbolos=[];
	var slider = document.querySelector("#myRange");
	milisegundos = slider.value*5;
	output.innerHTML = milisegundos/1000;
	let inputText = document.querySelector("#palabra").value;
	for (var i = 0; i < inputText.length; i++)
		simbolos[i]=inputText[i];
	document.querySelector("#inputCinta").value = simbolos;
	reemplazarLetras(simbolos);
}

async function reemplazarLetras(simbolos){
	for (var i = 0; i < simbolos.length; i++) {
		await sleep(milisegundos);
		if(simbolos[i]=="b")
			simbolos[i]="a";
		else if(simbolos[i]==" ")
			simbolos[i]=" ";
		else if(simbolos[i]=="a")
			simbolos[i]="a";
		else{
			aceptacion=false;
			break;
		}
		document.querySelector("#inputCinta").value = simbolos;
	}
	irAlEstadoDeAceptacion(simbolos);
}

function irAlEstadoDeAceptacion(simbolos){
	for (var i = simbolos.length-1; i >= 0; i--) {
		if(simbolos[i]=="a" || simbolos[i]==" "){
			//Visual
		}else{
			aceptacion=false;
			break;
		}
	}
	validarAceptacion(aceptacion);
}

function validarAceptacion(aceptada){
	if(aceptada){
		modal.style.display = "block";
		document.querySelector("#parrafoValidacion").innerText = "Palabra Aceptada";
	}else{
		modal.style.display = "block";
		document.querySelector("#parrafoValidacion").innerText = "Palabra no válida";
	}
}