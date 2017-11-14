$(document).ready(function(){

  $("#doorbell").remove();

  function ringDoorbell() {
    var doorbell = new Audio('media/doorbell.mp3');
    doorbell.play();
  }

  $('#ring').on('click', function() {
    ringDoorbell();
    console.log("DoorBell Ring!!!");
  }


});
