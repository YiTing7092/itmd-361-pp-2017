$(document).ready(function(){

  $("#doorbell").remove();

  function ringDoorbell() {
    var doorbell = new Audio('media/doorbell.mp3');
    doorbell.play();
  }

  $('#ring').on('click', function() {
    ringDoorbell();
    console.log("DoorBell Ring!!!");
    $('#ring').append('<p>' + "DoorBell ring!" + '</p>');
  });

  $(document).on('keyboard' , function(event){
    if (event.key === 'd') {
      ringDoorbell();
    }
  });

});
