
/* Efectos de textos */

(function($, win) {
  $.fn.inViewport = function(cb) {
     return this.each(function(i,el) {
       function visPx(){
         var elH = $(el).outerHeight(),
             H = $(win).height(),
             r = el.getBoundingClientRect(), t=r.top, b=r.bottom;
         return cb.call(el, Math.max(0, t>0? Math.min(elH, H-t) : Math.min(b, H)));  
       }
       visPx();
       $(win).on("resize scroll", visPx);
     });
  };
}(jQuery, window));


$(".animation-tracking-in-expand").inViewport(function(px){
    if(px) $(this).addClass("tracking-in-expand") ;
});


/* Efectos de boton Mostrar Más */

//$(document).ready(function() {
//    $("#masSobreMargoth").click(function(){
//        var valor = $(".oculta-seccion").css("visibility");
//        if(valor.localeCompare("hidden") == 0){
//            $('.oculta-seccion').css({
//                'visibility' : 'visible', 
//                'opacity' : '1', 
//                '-webkit-transition' : 'visibility 0s linear 0s, opacity 600ms', /* Safari */
//                'transition' : 'visibility 0s linear 0s, opacity 600ms',
//                'height' : 'auto',
//            });
//
//        }
//        else{
//            $('.oculta-seccion').css({
//                'visibility' : 'hidden', 
//                'opacity' : '0', 
//                '-webkit-transition' : 'visibility 0s linear 300ms, opacity 300ms', /* Safari */
//                'transition' : 'visibility 0s linear 300ms, opacity 300ms',
//                'height' : '0',
//                'overflow' : 'hidden'
//            });
//     
//        }
//    }); 
//});



        