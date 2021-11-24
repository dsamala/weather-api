async function getWeather(e) {
	e.preventDefault();

	const userInput = $('input[type="text"]').val();
	const apiKey = "9668a116beecace6125596e0cd70a7da";
	// const url = 'http://api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=9668a116beecace6125596e0cd70a7da';
		const url = 'http://api.openweathermap.org/data/2.5/weather?q='+ userInput + '&units=imperial' + '&APPID='+ apiKey;

	const response = await fetch(url);
	const data = await response.json();
	
	
	// const image = $('img').appendTo('#image_container');
	// image.attr('src', image_url)
	// const $img = $('<img>').attr('src', image_url);
	// $('#image_container').append($img);
	$('#city').html('City ' + data.name);
	$('#description').html('Weather: ' + data.weather[0].description);
	$('#tempmin').html('Lowest: ' + data.main.temp_min + '°');
	$('#tempmax').html('Highest: ' + data.main.temp_max + '°');
};

$("form").on("submit", getWeather);

