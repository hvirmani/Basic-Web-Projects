var i = 0;
var txt = 'Chuck Norris Jokes';
var speed = 100;

function typeWriter() {
	if (i < txt.length) {
		document.getElementById("head").innerHTML += txt.charAt(i);
		i++;
		setTimeout(typeWriter, speed);
	}
}

function newJoke() {
	const url = "https://api.icndb.com/jokes/random";
	fetch(url)
		.then((res) => {
			return res.json();
		})
		.then((data) => {
			console.log(data.value.joke);
			var joke = data.value.joke;
			document.getElementById("joke").innerHTML = `<p>${joke}</p>`;
		})

}