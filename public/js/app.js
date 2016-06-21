$(document).ready(function(){
  var startBtn = $('#start');
  var minutes = $('#minutes');
  var seconds = $('#seconds');
  var breakBtn = $('#break')
  console.log(startBtn);
  console.log(minutes);
  console.log(seconds);

  startBtn.on('click', startCountdown);
  breakBtn.on('click', breakButtonClicked);

  function breakButtonClicked(){
    minutes.text('05');
    seconds.text('00');
    startCountdown();
  };

  function startCountdown(){
    // alert('I work!');

    var countdown = setInterval(function(){
      var secondsVal = +seconds.text(); // the + sign makes this behave like a number
      var minutesVal = +minutes.text();
      //startBtn.addAttr('disabled');
      if (secondsVal === 0 && minutesVal ===0){
        breakBtn.removeClass('disabled');
        breakBtn.removeAttr('disabled');
        clearInterval(countdown);
        return;
      };
      if(secondsVal === 0){
        seconds.text(59);
        if(minutesVal <= 10){
            minutes.text("0" + (minutesVal-1));
        } else {
            minutes.text(minutesVal-1);
        }
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
