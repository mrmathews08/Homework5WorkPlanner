//Tyler Mathews JS file for HW5

//This function allows jQuery to get the page "ready"

$(document).ready(function () {

    // First I need to set up my local storage so the input will be saved when I revisit the site
    // Also set globally to access from anywhere

    var keys = Object.keys(localStorage);
    for (var i = 0; i < keys.length; i++) {
        var value = localStorage.getItem(keys[i]);
        var temp = $("#" + keys[i]).find("textarea")
        temp.val(value);
    }

    // Create a click event for my save button
    $(".saveBtn").on("click", function(event) {
        event.preventDefault();
        //manipulating Dom elements set variables
        var value = $(this).siblings(".description").val();
        var time = $(this).parent().attr("id");

        localStorage.setItem(time, value);
    });
    // 




    // Insert my correct time and date using moment.js

    $("#currentDay").text(moment().format("LLL"));
    function timeFrame() {
        var currentHours = moment().hours();

        //target each div with a time-block class,
        //function to change css information using input from time and day, ie my variables that link moment js

        $(".time-block").each(function() {
            var hourEl = $(this).attr("id");
            //hourDay is a substring of the between 5 and the length of hourEl
            var hourDay = hourEl.substring(5, hourEl.length);
            //parse string argument to return an integer
            var intHourDay = parseInt(hourDay);
            var intCurrentHours = parseInt(currentHours);

            //doing some math to say: 

            //if intHourDay is less than the current time, add ".past" class and remove the other two (present and future)
            if (parseInt(intHourDay) < parseInt(intCurrentHours)) {
                $(this).addClass("past");
                $(this).removeClass("future");
                $(this).removeClass("present");
            }
            else if (parseInt(intHourDay) > parseInt(intCurrentHours)) {
                $(this).addClass("future");
                $(this).removeClass("past");
                $(this).removeClass("present");
            }
            else if (parseInt(intHourDay) === parseInt(intCurrentHours)) {
                $(this).addClass("present");
                $(this).removeClass("future");
                $(this).removeClass("past");
            }


            
        })



    };
      //run this function at the end to put appropriate colors 
    timeFrame();
});