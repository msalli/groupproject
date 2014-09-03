// # Place all the behaviors and hooks related to the matching controller here.
// # All this logic will automatically be available in application.js.
// # You can use CoffeeScript in this file: http://coffeescript.org/


$(document).ready(function(){

	var makeSidebar = function(data){
		var features = data.features
		for (i = 0; i <= features.length; i += 1) {

		}

	};

 $("#search-bar").on('submit', function(e){
 	var value = $(".searchval").val();

 	e.preventDefault();
 	$.ajax({
 			// datatype: "html",
      url: "/search",
      data: { search: value},
      success: function(data){
      	var myLayer = L.mapbox.featureLayer().addTo(map);


      	console.log(data);
      	$("#listings").html("");
      	// debugger;
      	var compiledTemplate = HandlebarsTemplates["site/index"]({result: data.features});
      	console.log(compiledTemplate);
      	console.log(data.title);

      	$("#listings").append(compiledTemplate);


      	makeSidebar(data);

        myLayer.setGeoJSON(data);
        myLayer.on('click', function(e) {
          e.layer.unbindPopup();
          window.location.href=e.layer.feature.properties.url;
        });




      },
      error: function(data) {
      	alert("Error");
				$("listings").html("<h1>No listings found</h1>")

      }
    });
 });
});

