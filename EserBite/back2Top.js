// Get the button:
let mybutton = document.getElementById("topButton1");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {

   /* var x = $(window).scrollTop();*/
    /*$('html, body').animate({ scrollTop: 0 })*/
    window.scrollTo({ top: 0, behavior: 'smooth' });

    //document.body.scrollTop = 0; // For Safari
    //document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}


