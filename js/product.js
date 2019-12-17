var firstDef=document.getElementById('one');
var secondDef=document.getElementById('two');
var thirdDef=document.getElementById('three');
var fourthDef=document.getElementById('four');

$('#first').click(function(){
	
	firstDef.setAttribute('class','defenitionOn');
	secondDef.setAttribute('class','defenitionOff');
	thirdDef.setAttribute('class','defenitionOff');
	fourthDef.setAttribute('class','defenitionOff');
})

$('#second').click(function(){
	
	firstDef.setAttribute('class','defenitionOff');
	secondDef.setAttribute('class','defenitionOn');
	thirdDef.setAttribute('class','defenitionOff');
	fourthDef.setAttribute('class','defenitionOff');
})
$('#third').click(function(){
	firstDef.setAttribute('class','defenitionOff');
	secondDef.setAttribute('class','defenitionOff');
	thirdDef.setAttribute('class','defenitionOn');
	fourthDef.setAttribute('class','defenitionOff');
})
$('#forth').click(function(){
	firstDef.setAttribute('class','defenitionOff');
	secondDef.setAttribute('class','defenitionOff');
	thirdDef.setAttribute('class','defenitionOff');
	fourthDef.setAttribute('class','defenitionOn');
})