$("#stopButton").on("click", function(){
	$("#stopLight").css("background-color","red");
	$("#slowLight,#goLight").css("background-color","#111");
	console.log("runs");
});

$("#slowButton").on("click", function(){
	$("#slowLight").css("background-color","yellow");
	$("#stopLight,#goLight").css("background-color","#111");
});

$("#goButton").on("click", function(){
	$("#goLight").css("background-color","green");
	$("#stopLight,#slowLight").css("background-color","#111");
});


/*document.getElementById("stopButton").onclick = function(){
	document.getElementById("stopLight").style.backgroundColor = "red";
	document.getElementById("slowLight").style.backgroundColor = "#111";
	document.getElementById("goLight").style.backgroundColor = "#111";
}

document.getElementById("slowButton").onclick = function(){
	document.getElementById("slowLight").style.backgroundColor = "yellow";
	document.getElementById("stopLight").style.backgroundColor = "#111";
	document.getElementById("goLight").style.backgroundColor = "#111";
}

document.getElementById("goButton").onclick = function(){
	document.getElementById("goLight").style.backgroundColor = "green";
	document.getElementById("slowLight").style.backgroundColor = "#111";
	document.getElementById("stopLight").style.backgroundColor = "#111";
}*/