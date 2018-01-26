$(document).ready(function(){
    $("#flip").click(function(){
        $(".table1").slideToggle("slow");
    });
});

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

					 $('#datadetails').empty();
                var table=$('<table/>');
                var tr=getTr('City:', city);
                table.append(tr);
                $('#datadetails').append(table);
                
                var tr=getTr('Country:', data.sys.country);
                table.append(tr);
                
                var tr=getTr('Temperature:', parseFloat(data.main.temp-273.15).toFixed(1)+" ℃");
                table.append(tr);
                
                var tr=getTr('Humidity:', data.main.humidity+" %");
                table.append(tr);
                
                var tr=getTr('Description:', data.weather[0].description);
                table.append(tr);
                
                var tr=getTr('Pressure:', data.main.pressure+' hPa');
                table.append(tr);
                
                if($("#details").is(":checked") == true){
                    
                    
                 	var tr=getTr('Sunrise:', new Date(data.sys.sunrise*1000).getHours()+':'+new Date(data.sys.sunrise*1000).getMinutes());
                    	table.append(tr);
                    
                    var	tr=getTr('Sunset:', new Date(data.sys.sunset*1000).getHours()+':'+new Date(data.sys.sunset*1000).getMinutes());
                    	table.append(tr);
                    
                    var tr=getTr('Wind:', data.wind.speed+' m/s');
                    table.append(tr); 
                    
                    var tr=getTr('Min temperature:', parseFloat(data.main.temp_min-273.15).toFixed(1)+" ℃");
                    table.append(tr);
                    
                    var tr=getTr('Max temperature:', parseFloat(data.main.temp_max-273.15).toFixed(1)+" ℃");
                    table.append(tr);
                    
                    var tr=getTr('Visibility:', data.visibility+" m");
                    table.append(tr);
                };


				},
				type: 'GET'
			});
		}
	});
	function getTr(data1,data2){
	
		var tr=$('<tr/>');
        var td1=$('<td/>');
        $(td1).append(data1);
        var td2=$('<td/>');
        $(td2).append(data2);
        tr.append(td1);
        tr.append(td2); 
					
					return tr;

	}
});



