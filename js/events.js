//define functions here

function getIt() {
  $('p').on('click', function(){
    alert("Hey!")
  })
}

function frameIt() {
  $('img').on('load', function() {
    var image = $('img')
    image.className = "tasty"
  })
}

function pressIt() {
$('input').on('keydown', function(key) {
  if(key === 71){
    alert("you pressed 'g'")
  }
})
}

function submitIt() {
$('form').on('submit', function() {
  alert("Your form is going to be submitted now.")
})
}


$(document).ready(function(){

  document.getIt()
  document.frameIt()
  document.pressIt()
  document.submitIt()

});
