$(document).ready(function() {
    $("#boton-abierto-masInformacion-flotante").click(function(){
            $('#masInformacion-flotante').css({
                'z-index' : '550',
                'visibility' : 'visible', 
                'opacity' : '1', 
                '-webkit-transition' : 'visibility 0s linear 0s, opacity 600ms', /* Safari */
                'transition' : 'visibility 0s linear 0s, opacity 600ms',
                'height' : 'auto'
            });
        
    }); 
    
    
    $("#boton-cerrado-masInformacion-flotante").click(function(){

            $('#masInformacion-flotante').css({
                'z-index' : '-550',
                'visibility' : 'hidden', 
                'opacity' : '0', 
                '-webkit-transition' : 'visibility 0s linear 300ms, opacity 300ms', /* Safari */
                'transition' : 'visibility 0s linear 300ms, opacity 300ms',
                'height' : '0'
            });
        
    }); 
});
