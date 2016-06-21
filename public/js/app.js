$(document).ready(function(){
  var startBtn = $('#start');
  var minutes = $('#minutes');
  var seconds = $('#seconds');
  var breakBtn = $('#break')
  console.log(startBtn);
  console.log(minutes);
  console.log(seconds);

  startBtn.on('click', startCountdown);

  function startCountdown(){
    // alert('I work!');

    setInterval(function(){
      var secondsVal = +seconds.text(); // the + sign makes this behave like a number
      var minutesVal = +minutes.text();
      startBtn.addClass('disabled');
      //startBtn.addAttr('disabled');
      if (secondsVal === 0 && minutesVal ===0){
        breakBtn.removeClass('disabled');
        breakBtn.removeAttr('disabled');
        startBtn.removeClass('disabled');
        startBtn.removeAttr('disabled');
        return;
      };
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

  breakBtn.on('click', breakButtonClicked);

  function breakButtonClicked(){
    alert('Break button was clicked');
  };

});
