// navbar height
function navBack() {
    var x = document.getElementById("butn").getAttribute("aria-expanded"); 
    if (x == "false") {
        $("nav").addClass("nav-mod");
    }
    else{
        $("nav").removeClass("nav-mod");
    }
}



// sidebar

var o = document.getElementById("one");
var to = document.getElementById("two");
to.style.display = 'none';


function openNav() {
    document.getElementById("mySidenav").style.width = "50px";
    document.getElementById("s-nav").style.marginRight = "50px";
    o.style.display = 'none';
    to.style.display = '';
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("s-nav").style.marginRight = "0";
    o.style.display = '';
    to.style.display = 'none';

}
$(document).ready(function () {
    $('[data-toggle="tooltip"]').tooltip();
});
