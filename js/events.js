//define functions here

$(document).ready(function(){

// call functions here
  function getIt() {
    $('p').on('click', function(){
      alert("Hey!")
    })
  }

  function frameIt() {
    $('img').on('load', function() {
      var image = $('img')
      image.className = "tasty"
      image.frame.style.border-color = "thick solid red"
    })
  }

function pressIt() {
  $('input').on('keydown', function(key) {
    if(key === 71){
      alert("you pressed 'g'")
    }
  })
}
});
