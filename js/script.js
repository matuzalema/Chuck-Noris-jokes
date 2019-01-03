var url = 'http://api.icndb.com/jokes/random';

var button = document.getElementById('get-joke');
button.addEventListener('click', function(){
	getJocke();
});

var paragraph = document.getElementById('joke');

window.onload = getJocke();

function getJocke() {
	var xhr = new XMLHttpRequest();
	xhr.open('GET', url);
	xhr.addEventListener('load', function(){
		var response = JSON.parse(xhr.response);
		paragraph.innerHTML = response.value.joke;
	});
	xhr.send();
}