$(document).ready(function(){

    /* Responsive navigation bar slides into view and toggles between an icon of "bars" and "close" on click*/
    $("#drop-down-btn").click(function(){
        $("#responsive-navbar").slideToggle("slow");
        $("#icon").toggleClass("fa fa-bars");
        $("#icon").toggleClass("fa fa-close");
    });

    /* Each element inside the slide down menu of the responsive navbar closes the slide down menu on click */
    $(".resp-navbar-item").click(function(){
        $("#responsive-navbar").slideToggle("fast");
        $("#icon").toggleClass("fa fa-bars");
        $("#icon").toggleClass("fa fa-close");
    });

    /* Examples menu is hidden through here */
    $(".example").click(function(){
        $(".examples-menu").hide("fast", "linear");
    });

    /* Each example has a home button which on click returns to the examples menu through here */
    $(".fa-home").click(function(){
        $(".example-component").hide("fast", "linear");
        $(".examples-menu").show("fast", "linear");
    });

    /* Navigation bars rendered when corresponding button is clicked */
    $("#navigation-examples").click(function(){
        $("#navbars").show("fast", "linear");
    });

    /* Star rating system rendered when corresponding button is clicked */
    $("#star-examples").click(function(){
        $("#stars").show("fast", "linear");
    });

    /* Color theme changer rendered when corresponding button is clicked */
    $("#color-examples").click(function(){
        $("#colors").show("fast", "linear");
    });
});
