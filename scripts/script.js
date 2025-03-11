$(document).ready(function() {
    console.log('Page Loaded Successfully!');
    
    // Prevent navbar from collapsing when clicking links
    $('.navbar-nav a').click(function(){
        $('.navbar-collapse').collapse('hide');
    });
});
