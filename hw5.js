//Tyler Mathews JS file for HW5

//This function allows jQuery to get the page "ready"

$(document).ready(function () {

    // First I need to set up my local storage so the input will be saved when I revisit the site
    // Also set globally to access from anywhere

    var keys = object.keys(localStorage);
    for (var i = 0; i < keys.length; i++) {
        var value = localStorage.getItem(keys[i]);
        var temp = $("#" + keys[i]).find("textarea")
        temp.val(value);
    }

    // Creat a click even for my save button
    // 
    // 




    // Insert my correct time and date using moment.js

    $("#currentday").text(moment().format("LLL"));
    function timeFrame() {
        var currentHours = moment().hours();

        //target each div with a time-block class,
        //function to change css information using input from time and day, ie my variables that link moment js

        $(".time-block").each(function() {
            var hourEl = $(this).attr("id");
            
        })



    }

    timeFrame();
});