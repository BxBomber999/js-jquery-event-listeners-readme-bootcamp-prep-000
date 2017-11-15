//define functions here

$(document).ready(function(){

// call functions here
  function getIt() {
    $('p').on('click', function(){
      alert("Hey!")
    })
  }

  function frameIt() {
    $('#tasty').on('load', function() {
      $('#tasty').addAttribute(frame(color: red))
    })
  }

  
});
