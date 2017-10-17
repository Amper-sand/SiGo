$(document).ready(function() {
    $("#mainbutton").on("click", function() {
        $.ajax({
            url: "https://developers.zomato.com/api/v2.1/search?entity_id=292&entity_type=city",
            headers: {
                "X-Zomato-API-Key": "2d5b51592fa13a696b3a70f8faec31cc"
            },
            method: "GET"

        }).done(function(data) {
            console.log(data);

            //variables for each restaurant Div section
            var restaurantsdiv1 = $("<div>");
            var restaurantsdiv2 = $("<div>");
            var restaurantsdiv3 = $("<div>");
            var restaurantsdiv4 = $("<div>");

            var firstPic = $("<div>");

            //functions to place restaurant information in their respective div
            restaurantsdiv1.html(data.restaurants[5].restaurant.name);
            console.log(data.restaurants[5].restaurant.name)
            $("#restaurantsdiv1").html(restaurantsdiv1);
            restaurantsdiv2.html(data.restaurants[6].restaurant.name);
            $("#restaurantsdiv2").html(restaurantsdiv2);
            restaurantsdiv3.html(data.restaurants[3].restaurant.name);
            $("#restaurantsdiv3").html(restaurantsdiv3);
            restaurantsdiv4.html(data.restaurants[10].restaurant.name);
            $("#restaurantsdiv4").html(restaurantsdiv4);

            firstPic.html(data.restaurants[5].restaurant.featured_image);
            console.log(data.restaurants[5].restaurant.featured_image)
            $("#firstPic").html("<img src='" + data.restaurants[5].restaurant.featured_image + "' alt='restaurantimage' style='height:220px; width:370px'>");
            $("#secondPic").html("<img src='" + data.restaurants[6].restaurant.featured_image + "' alt='restaurantimage' style='height:220px; width:370px'>");
            $("#thirdPic").html("<img src='" + data.restaurants[3].restaurant.featured_image + "' alt='restaurantimage' style='height:220px; width:370px'>");
            $("#fourthPic").html("<img src='" + data.restaurants[10].restaurant.featured_image + "' alt='restaurantimage' style='height:220px; width:370px'>");

            $("#golink1").attr("href",data.restaurants[5].restaurant.url)
            $("#golink2").attr("href",data.restaurants[6].restaurant.url)
            $("#golink3").attr("href",data.restaurants[3].restaurant.url)
            $("#golink4").attr("href",data.restaurants[10].restaurant.url)
        });

        $("#firstPic").css("background", "#fff8d3");
        $("#secondPic").css("background", "#fff8d3");
        $("#thirdPic").css("background", "#fff8d3");
        $("#fourthPic").css("background", "#fff8d3");
    });



// Nick's javascript
     $('#mainbutton').on('click', function() {

    var recipe = $(this).data('name');

    var queryURL = "https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/random?limitLicense=false&number=4&tags=";
    $.ajax({
        url: queryURL,
        headers: { 'X-Mashape-Key': 'QjnzWlmOacmshwsPibENUtYYmB3Zp1X16Xmjsn1sIUIJeoo2Gx' },
        method: 'GET'
    })
        .done(function(response) {
            displayRecipes(response.recipes);
            displayImages(response.recipes);
            giveUrl(response.recipes);
            $("#img1").css("background","#fff8d3");
            $("#img2").css("background","#fff8d3");
            $("#img3").css("background","#fff8d3");
            $("#img4").css("background","#fff8d3");
            
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

function displayImages(recipes){
    $("#img1").html("<img src='" + recipes[0].image + "' alt='recipeimage' style='height:220px; width:370px'>")
    $("#img2").html("<img src='" + recipes[1].image + "' alt='recipeimage' style='height:220px; width:370px'>")
    $("#img3").html("<img src='" + recipes[2].image + "' alt='recipeimage' style='height:220px; width:370px'>")
    $("#img4").html("<img src='" + recipes[3].image + "' alt='recipeimage' style='height:220px; width:370px'>")
  }

 function giveUrl(recipes){
    $("#link1").attr("href",recipes[0].spoonacularSourceUrl)
    $("#link2").attr("href",recipes[1].spoonacularSourceUrl)
    $("#link3").attr("href",recipes[2].spoonacularSourceUrl)
    $("#link4").attr("href",recipes[3].spoonacularSourceUrl)
 }



});