/* Botón más info */

$(document).ready(function() {
    $("#boton-abierto-masInformacion-flotante").click(function(){
            $('#masInformacion-flotante').css({
                'z-index' : '550',
                'visibility' : 'visible', 
                'opacity' : '1', 
                '-webkit-transition' : 'visibility 0s linear 0s, opacity 600ms', /* Safari */
                'transition' : 'visibility 0s linear 0s, opacity 600ms'
            });
        
    }); 
    
    
    $("#boton-cerrado-masInformacion-flotante").click(function(){

            $('#masInformacion-flotante').css({
                'z-index' : '-550',
                'visibility' : 'hidden', 
                'opacity' : '0', 
                '-webkit-transition' : 'visibility 0s linear 300ms, opacity 300ms', /* Safari */
                'transition' : 'visibility 0s linear 300ms, opacity 300ms'
            });
        
    }); 
});

/* Botón info Margoth */

$(document).ready(function() {
    $("#masSobreMargoth").click(function(){
            $('#masInformacion-flotante-2').css({
                'z-index' : '550',
                'visibility' : 'visible', 
                'opacity' : '1', 
                '-webkit-transition' : 'visibility 0s linear 0s, opacity 600ms', /* Safari */
                'transition' : 'visibility 0s linear 0s, opacity 600ms'
            });
        
    }); 
    
    
    $("#boton-cerrado-masInformacion-flotante-2").click(function(){

            $('#masInformacion-flotante-2').css({
                'z-index' : '-550',
                'visibility' : 'hidden', 
                'opacity' : '0', 
                '-webkit-transition' : 'visibility 0s linear 300ms, opacity 300ms', /* Safari */
                'transition' : 'visibility 0s linear 300ms, opacity 300ms'
            });
        
    }); 
});

