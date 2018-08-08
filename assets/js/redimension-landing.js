$(document).ready(function(){

    console.log('Redimensión al cargar ' + $(window).height());
    $('#main-container').css('height', $(window).height() - navbarHeight);
});

$(window).resize(function(){ 

    console.log('Redimensión al cambiar ventana ' + $(window).height());
    $('#main-container').css('height', $(window).height() - navbarHeight);
});

