function newCharacter() {
	const url = "http://hp-api.herokuapp.com/api/characters";
	fetch(url)
		.then((res) => {
			return res.json();
		})
		.then((data) => {
			console.log(data);
			let i = Math.floor(Math.random() * 25);
			let character = data[i].name;
			let character_image = data[i].image;
			let quote, character_house = data[i].house;
			if (character_house === "") {
				quote = `"${character} does'nt have any house"`;
			} else {
				quote = `"${character}'s House is ${character_house}"`;
			}
			document.querySelector("#name").innerHTML = character;
			document.querySelector("#character").src = character_image;
			document.querySelector("#quote").innerHTML = quote;
		})
}