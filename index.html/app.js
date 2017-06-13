<script src="http://code.jquery.com/jquery-2.1.3.min.js"></script>
<script type="assets/javascript/app.js">

  var animals = ["kitten", "puppy", "parrot", "panda"];

  //function for putting the JSON data into a div
  function displayAnimalImages() {

    var animal = $(this).attr("data-name");
    var queryURL = "http://api.giphy.com/v1/gifs/search?q=" + animal + "&api_key=dc6zaTOxFJmzC&limit=10";

  // Ajax GET request to fetch data
    $.ajax ({
      url: queryURL,
      method: "GET" 

  // Get data back and store results
    }).done(function(response) {
      console.log(response);

      var results = response.data;

  // Looping over the results
  for (var i = 0; i < results.length; i++) {

    if (results[i].rating !== "r" && results[i].rating !== "pg13") {

  // Creating a div with the class "item"   

      var animalsDiv = $("<div class='item'>")

  // Storing the results of the ratings for each item

      var rating = results[i].rating;

  // Creating a paragraph tag with the item's rating

      var p = $("<p>").text("Rating: " + rating);

  // Creating an image tag

      var animalImage = $("<img>");

  // Giving the image an attribute of src and pulling specific images

      animalImage.attr("src", results[i].images.fixed_height_small.url);
      console.log(response);

  // Appending the paragraph and animalImage we created to the "animalsDiv" div
      animalsDiv.append(p);
      animalsDiv.append(animalImage);

  // Prepending the animals Div to the "#animals-view" div in the HTML
      $("#animals-view").prepend(animalsDiv);
  }
  }
});
};

  function renderButtons () {
    $("#buttons-view").empty();

    for(var i =0; i < animals.length; i++) {

      var a = $("<button>");

      a.addClass("animal");

      a.attr("data-name", animals[i]);

      a.text(animals[i]);

      $("#buttons-view").append(a);
    }
  }
      $("#add-animal").on("click", function(event) {
        event.preventDefault();

        var animal = $("#animal-input").val().trim();

        animals.push(animal);
        console.log(animals)

        renderButtons();

        $("#animal-input").val("");

        });

      $(document).on("click", ".animal", displayAnimalImages); 


      renderButtons();    
    
  </script>
