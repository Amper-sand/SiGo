$(document).ready(function(){
	$("#mainbutton").on("click", function() {
		var event = $(this).data("start");
		var apiKey = '2e0WdiEAg5d21OL38Fu6vbNxarEl2QuA'
		var queryURL = "https://data.cityofchicago.org/resource/qa7g-ckqp.json";

			$.ajax({
			    url: "https://data.cityofchicago.org/resource/qa7g-ckqp.json",
			    type: "GET",
			    data: {
			      "$limit" : 50,
			      "$$app_token" : "5N0gX8aLa3lAUZiLtStOhkR3I",
			    	}
			}).done(function(data) {
				for (i = 0; i < data.length; i++){
				console.log(data[i].doing_business_as_name);
				console.log(data[i].address);

				//variables for each restaurant Div section
			    var restaurantsdiv1 = $("<div>");
			    var restaurantsdiv2 = $("<div>");
			    var restaurantsdiv3 = $("<div>");
			    var restaurantsdiv4 = $("<div>");

			    //functions to place restaurant information in their respective div
			    restaurantsdiv1.html(data[5].doing_business_as_name);
			    $("#restaurantsdiv1").html(restaurantsdiv1);
			    restaurantsdiv2.html(data[6].doing_business_as_name);
			    $("#restaurantsdiv2").html(restaurantsdiv2);
			    restaurantsdiv3.html(data[4].doing_business_as_name);
			    $("#restaurantsdiv3").html(restaurantsdiv3);
			    restaurantsdiv4.html(data[10].doing_business_as_name);
			    $("#restaurantsdiv4").html(restaurantsdiv4);

}
});
});
});

// Nick's javascript
$('#mainbutton').on('click', function() {
		var recipe = $(this).data('name');
		var queryURL = "https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/random?limitLicense=false&number=4&tags=";

		$.ajax({
			url: queryURL,
			headers: { 'X-Mashape-Key': 'QjnzWlmOacmshwsPibENUtYYmB3Zp1X16Xmjsn1sIUIJeoo2Gx' },
			method: 'GET'

		}).done(function(response) {
    		displayRecipes(response.recipes) 
	});
});


function displayRecipes(recipes){
    console.log(recipes);
    var recipediv1 = $("<div>") 
    recipediv1.html(recipes[0].title)
    $("#recipediv1").html(recipediv1)
    var recipediv2 = $("<div>") 
    recipediv2.html(recipes[1].title)
    $("#recipediv2").html(recipediv2)
    var recipediv3 = $("<div>") 
    recipediv3.html(recipes[2].title)
    $("#recipediv3").html(recipediv3)
    var recipediv4 = $("<div>") 
    recipediv4.html(recipes[3].title)
    $("#recipediv4").html(recipediv4)
  }