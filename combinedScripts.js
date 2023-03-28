// JavaScript Document

$(document).ready(function(){
  // Add smooth scrolling to all links in navbar + footer link
  $(".navbar a, footer a[href='#myPage']").on('click', function(event) {
    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (900) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 900, function(){
   
        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });
  
  $(window).scroll(function() {
    $(".slideanim").each(function(){
      var pos = $(this).offset().top;

      var winTop = $(window).scrollTop();
        if (pos < winTop + 600) {
          $(this).addClass("slide");
        }
    });
  });



var viewerInstance = null;
// the opts object should hold the start properties of the 360 HD Viewer
var opts = { 
  'accountID': 4965,
  'productCode': 'EMMA_ARMCHAIR',
  'features': ["UPHOLSTERY", "MUSHROOM", "LEGS", "METAL_LEGS"],
  'containerID': '#put-viewer-here',
}

// make sure the cylindo framework has been "installed"
if (cylindo) {
  // do not instantiate the viewer until the framework reports ready.
  cylindo.on('ready', function () {
    // create the instance
    viewerInstance = cylindo.viewer.create(opts);
  });
}

//Variation selection handler 
$(".variation").click( function() {
	//alert("Se dio click en una variacion"); //Se probó que el error era la falta de jQuery
  //remove the class "selected" from all li elements
  $(this).parent().find("li").removeClass("selected");
  //add the class "selected" to the current clicked element
  $(this).addClass("selected");  
  
  //create array with values from the selected ones
  var featureArray = [ 
    //get the first feature type name
    $(".upholstery").attr("data-feature-type"),
    //get the feature value for the feature type above
    $(".upholstery .selected").attr("data-feature-value"),
    //get the second feature type name
    $(".legs").attr("data-feature-type"),    
    //get the feature value for the feature type above
    $(".legs .selected").attr("data-feature-value"),
  ];
  //this viewer function sends an array with the new selected features
  viewerInstance.setFeatures(featureArray);
});



})
