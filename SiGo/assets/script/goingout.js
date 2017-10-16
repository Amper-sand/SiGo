$(document).ready(function(){
	$("button").on("click", function() {
		var event = $(this).attr("start");
		var apiKey = '2e0WdiEAg5d21OL38Fu6vbNxarEl2QuA'
		var queryURL = "https://data.cityofchicago.org/resource/qa7g-ckqp.json";

		$.ajax({
		    url: "https://data.cityofchicago.org/resource/qa7g-ckqp.json",
		    type: "GET",
		    data: {
		      "$limit" : 25,
		      "$$app_token" : "5N0gX8aLa3lAUZiLtStOhkR3I",
		    }
		}).done(function(data) {
			console.log(data);
		for (i = 0; i < data.length; i++){
			console.log(data[i].doing_business_as_name);
			console.log(data[i].address);
		}
		});

	});
});
	</script>