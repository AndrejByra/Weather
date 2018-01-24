$(document).ready(function(){
	$("#get").click(function(){
		var city=$("#city").val();
		var codes=$("#code").val();
		if (city.length>1) {
			var urllink='https://api.openweathermap.org/data/2.5/weather?q=';
			urllink=urllink + city;
			if (code.length==2)
				urllink=urllink+','+code;
			urllink=urllink+','+code;
			urllink=urllink+'&APPID=f7fabd71df106f511e278922bc54e16a';
		}
}
}
});