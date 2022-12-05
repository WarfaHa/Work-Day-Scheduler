// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.

// Global Variables
// Displays current Day and Time
var timeDisplayEl = $('#currentDay');

// handle displaying the time
function displayTime() {
  var rightNow = dayjs().format('dddd, MMMM D, YYYY h:mm:ss a');
  timeDisplayEl.text(rightNow);
}

// Calls the function for the time and date
// Set an interval for the time to update every second
displayTime();
setInterval(displayTime, 1000);

$(document).ready(function () {

$(".saveBtn").on("click", function() {
  console.log("save button works");

  var text = $(this).siblings(".description").val();
        var time = $(this).parent().attr("id");

        // Save text in local storage
        
    })

});
function timeTracker() {
  //get current number of hours.
  var currentHour = dayjs().hour();
console.log(currentHour);
  // loop over time blocks
  $(".time-block").each(function () {
      var blockTime = parseInt($(this).attr("id").split("hour")[1]*(-1));
      console.log(blockTime);
      // To check the time and add the classes for background indicators
      if (blockTime < currentHour) {
          $(this).removeClass("future");
          $(this).removeClass("present");
          $(this).addClass("past");
      }
      else if (blockTime === currentHour) {
          $(this).removeClass("past");
          $(this).removeClass("future");
          $(this).addClass("present");
      }
      else {
          $(this).removeClass("present");
          $(this).removeClass("past");
          $(this).addClass("future");

      }
  })
}

// Get item from local storage if any

timeTracker();


$(function () {
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.
});
