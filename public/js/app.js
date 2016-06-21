$(document).ready(function(){
  var start = $('#start');
  var minutes = $('#minutes');
  var seconds = $('#seconds');
  console.log(start);
  console.log(minutes);
  console.log(seconds);

  start.on('click', startCountdown);

  function startCountdown(){
    // alert('I work!');
    setInterval(function(){
      var secondsVal = +seconds.text(); // the + sign makes this behave like a number
      var minutesVal = +minutes.text(); // the
      if(secondsVal === 0){
        seconds.text(59);
        minutes.text(minutesVal-1);
      } else {
        if(secondsVal <= 10){
          seconds.text("0" + (secondsVal-1));
        } else {
          seconds.text(secondsVal -1);
        }
      };
      // console.log(typeof +secondsVal);
    }, 1000);
  };

});
