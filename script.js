$(document).ready(function(){
	$("#get").click(function(){
		var city=$("#entercity").val();
		var code=$("#entercode").val();
		if (city.length>1) {
			var urllink='https://api.openweathermap.org/data/2.5/weather?q=';
			urllink=urllink + city;
			if (code.length==2){
				urllink=urllink+','+code;
			}
			urllink=urllink+'&APPID=f7fabd71df106f511e278922bc54e16a';

			$.ajax(
			{
				url: urllink,
				data: {format: 'json'},
				error: function()
				{
					//chyba
				},
				dataType: 'json',
				success: function(data)
				{
					console.log("temp: "+data.main.temp);
					console.log("desc: "+data.weather[0].description);
				},
				type: 'GET'
			});
		}
	});
});