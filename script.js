// staviti .container = flex-direction: row; kad se klikne na hamburger meni
var mobileNavigation = document.getElementsByClassName('mobile-navigation')[0];
var meni = document.getElementsByClassName('container')[0].getElementsByTagName('nav')[0].getElementsByTagName('ul')[0];
var container = document.getElementsByClassName('container')[0];
var stateOfNav = false;
mobileNavigation.addEventListener("click", () => {

    if(stateOfNav === false){
        // Hamburger meni je ukljucen
        meni.style.display = "block";
        container.style.flexDirection = "column";

        stateOfNav = true;
    }else{
        // Hamburger meni je iskljucen
        meni.style.display = "none";
        container.style.flexDirection = "row";

        stateOfNav = false;
    }


});