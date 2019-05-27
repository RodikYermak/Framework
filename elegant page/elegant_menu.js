// Add an event listener to all the inputs in the #filterboxes form.
$('body').on('click', '#filterboxes input', function (e) {

    // Start by hiding all of the menu options
    $('#menu p').hide();

    // Assume nothing is checked
    var somethingchecked = false;

    // For each of the inputs...
    $('#filterboxes input').each(function () {
        // check to see if it is checked
        if ($(this).is(':checked')) {
            // let it be known that something was checked and we're gonna do stuff to it
            somethingchecked = true;
            // get the class from the data-show attribute of the checkbox. This is the class of menu items we're going to show.
            var classtoshow = $(this).attr('data-show');
            // show all menu paragraphs with the classtoshow
            $('#menu p.' + classtoshow).show();
        }
    });

    // Check to see if we did anything so we can return the menu to normal if nothing is checked.
    // If something wasn't checked:
    if (!somethingchecked) {
        // Re-show the entire menu
        $('#menu p').show();
    }
});


// Add the vegan and gluten free markers to the menu when the page loads
$('#menu .veg').prepend("<span class='veg symbol'>V</span>");
$('#menu .glutenfree').prepend("<span class='glutenfree symbol'>GF</span>");
$('#menu .keto').prepend("<span class='keto symbol'>Keto</span>");
$('#menu .nutfree').prepend("<span class='nutfree symbol'>NF</span>");
