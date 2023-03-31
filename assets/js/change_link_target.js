const links = document.querySelectorAll("a");
links.forEach(function(link){
    if (link.className == "" && link.target != "_self") {
        link.target = "_blank"
    }
})