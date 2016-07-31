$(document).ready(function() {

    $('button.exercise1').click(function() {
        // This line pulls the data out of the text box and converts
        // it from a string to a number:
        var data = parseInt($('textarea.exercise1').val(), 10);
        // The variable data stores whatever is in the box!
        // YOUR CODE FOR EXERCISE 1 GOES HERE ----v

        // YOUR CODE FOR EXERCISE 1 GOES HERE ----^
    });

    // YOUR CODE FOR EXERCISE 3 GOES HERE ----v



    // YOUR CODE FOR EXERCISE 3 GOES HERE ----^

    $('button.exercise3').click(function() {
        // This line pulls the data out of the text box
        // and stores it as a string:
        var data = $('textarea.exercise3').val();
        // This line makes a popup window with the result:
        alert('Your function returned "' + myFunction(data) + '"');
    });

});
