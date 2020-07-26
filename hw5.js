//Tyler Mathews JS file for HW5

//This function allows jQuery to get the page "ready"

$(document).ready(function () {

    // First I need to set up my local storage so the input will be saved when I revisit the site

    var keys = object.keys(localStorage);
    for (var i = 0; i < keys.length; i++) {
        var value = localStorage.getItem(keys[i]);
        var temp = $("#" + keys[i]).find("textarea")
        temp.val(value);
    }
})