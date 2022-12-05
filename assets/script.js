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

        // Save input into local storage
        localStorage.setItem(time, text);
    })

});
function timeTracker() {
  //get current hour
  var currentHour = dayjs().hour();
console.log(currentHour);
  // Checks each timeblock
  $(".time-block").each(function () {
      var blockTime = parseInt($(this).attr("id").split("hour")[1]*(-1));
      console.log(blockTime);
      // applies the past, present, or future class to each timeblock
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

// get any user input that was saved in localStorage
$("#hour-8 .description").val(localStorage.getItem("hour-8"));
$("#hour-9 .description").val(localStorage.getItem("hour-9"));
$("#hour-10 .description").val(localStorage.getItem("hour-10"));
$("#hour-11 .description").val(localStorage.getItem("hour-11"));
$("#hour-12 .description").val(localStorage.getItem("hour-12"));
$("#hour-13 .description").val(localStorage.getItem("hour-13"));
$("#hour-14 .description").val(localStorage.getItem("hour-14"));
$("#hour-15 .description").val(localStorage.getItem("hour-15"));
$("#hour-16 .description").val(localStorage.getItem("hour-16"));
$("#hour-17 .description").val(localStorage.getItem("hour-17"));

timeTracker();