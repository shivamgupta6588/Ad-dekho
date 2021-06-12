$(".button2").click( function() {
    document.getElementById("myModal2").style.display = "block";   
  });
  
  // When the user clicks on <span> (x), close the modal
  $("span").click(function() {
    document.getElementById("myModal2").style.display = "none";
  });
  
  // // When the user clicks anywhere outside of the modal, close it
  $(window).click (function(event) {
      modal= document.getElementById("myModal2");
    if (event.target == modal) {
      modal.style.display = "none";
    }
  });
  