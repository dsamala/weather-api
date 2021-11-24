async function getWeather(e) {
	e.preventDefault();

	const userInput = $('input[type="text"]').val();
	const apiKey = "9668a116beecace6125596e0cd70a7da";
	const url = 'http://api.openweathermap.org/data/2.5/weather?q='+ userInput + '&units=imperial' + '&APPID='+ apiKey;

	const response = await fetch(url);
	const data = await response.json();
		
	$('#city').html('City: ' + data.name);
	$('#description').html('Weather: ' + data.weather[0].description);
	$('#tempmin').html('Lowest: ' + data.main.temp_min + '°');
	$('#tempmax').html('Highest: ' + data.main.temp_max + '°');
};

$("form").on("submit", getWeather);




async function getCityWeather(e) {
	e.preventDefault();

	const userInput = $(this).val();
	const apiKey = "9668a116beecace6125596e0cd70a7da";
	const url = 'http://api.openweathermap.org/data/2.5/weather?q='+ userInput + '&units=imperial' + '&APPID='+ apiKey;

	const response = await fetch(url);
	const data = await response.json();
		
	$('#citydescription').html('Weather: ' + data.weather[0].description);
	$('#citytempmin').html('Lowest: ' + data.main.temp_min + '°');
	$('#citytempmax').html('Highest: ' + data.main.temp_max + '°');
};

$("#sj").on("click", getCityWeather);
$("#sf").on("click", getCityWeather);
$("#oak").on("click", getCityWeather);





async function getRandom(e) {
	e.preventDefault();

	
	const userInput = $('input[type="text"]').val();
	const apiKey = "9668a116beecace6125596e0cd70a7da";
	const url = 'http://api.openweathermap.org/data/2.5/weather?q='+ userInput + '&units=imperial' + '&APPID='+ apiKey;

	
	const response = await fetch(url);
	const data = await response.json();

	
	const objectProps = ['City Latitude: ' + data.coord.lat, 'City Longitude: ' + data.coord.lon, 'City ID: ' + data.id, 'City Wind Speed: ' + data.wind.speed];
	let randomProp = '';

	function getRandomProp () {
		let randomIndex = Math.floor(Math.random() * objectProps.length);
		randomProp = objectProps[randomIndex];
	};

	getRandomProp();
	$('.rinfo').html('Random Info: ' + randomProp);

};

$(".rbutton").on('click', getRandom);
