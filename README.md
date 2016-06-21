#Pomodoro Timer
I am building a timer web application using:
  - HTML
  - Bootstrap
  - jQuery
  - NodeJS for serving the application

---

###User Stories:
  1. As a user, when I navigate to the page, I see a timer of 25 mins.
  2. As a user, when I navigate to the page, I see a start button that starts the time countdown.
  3. As a user, I see a 'break' button that is disabled.
  4. As a user, after 25 minutes, the break button enables.
  5. As a user, when I click the start button, the timer counts down to 0.
  6. As a user, I see a 'tooltip' for the break button.
  7. As a user, when the break button is enabled, I can click it.
  8. As a user, when I click the break button, the timer sets to 5 minutes and begins counting down.

#Monday: 6/20/16
git branch
git branch breakButton
git branch
git checkout breakButton
git branch

<!-- Make your changes to your code -->

git add .
git commit -m "completed user story 3"

git checkout master
git merge breakButton

git branch makeTimerWork
git checkout makeTimerWork

<!-- In the app.js file -->
$(document).ready(function(){});

https://api.jquery.com/

git add . git commit -m "got timer to work"
git checkout master git merge makeTimerWork
git push --all
