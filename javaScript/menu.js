/* Toggle between adding and removing the "responsive" class 
to nav when the user clicks on the icon */
function expandMenu() {
    var e = document.getElementById("navMenu");
    if (e.className === "nav") {
        e.className += " responsive";
    } else {
        e.className = "nav";
    }
}