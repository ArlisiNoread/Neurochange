var navbarHeight = $('#barraNavegacion').outerHeight(true);

$(document).ready(function(){

    console.log('Redimensión al cargar ' + $(window).height());
    $('#fondo-portada').css('height', $(window).height() - navbarHeight);
});

$(window).resize(function(){ 

    console.log('Redimensión al cambiar ventana ' + $(window).height());
    $('#fondo-portada').css('height', $(window).height() - navbarHeight);
});

