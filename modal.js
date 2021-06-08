
// When the user clicks the button, open the modal 
$(".connect").click( function() {
  document.getElementById("myModal").style.display = "block";   
});

// When the user clicks on <span> (x), close the modal
$("span").click(function() {
  document.getElementById("myModal").style.display = "none";
});

// // When the user clicks anywhere outside of the modal, close it
$(window).click (function(event) {
    modal= document.getElementById("myModal");
  if (event.target == modal) {
    modal.style.display = "none";
  }
});
