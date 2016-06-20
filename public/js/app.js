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
      if(secondsVal === 0){
        seconds.text(59);
      } else {
        seconds.text(secondsVal -1);
      };
      // console.log(typeof +secondsVal);
    }, 1000);
  };

});
