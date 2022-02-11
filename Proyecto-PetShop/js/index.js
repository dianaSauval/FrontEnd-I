window.addEventListener("load", function() {
    const iconoMenu = this.document.getElementById("icono-menu");
    const menu = this.document.querySelector(".menu");
    const linkOpciones = this.document.querySelectorAll("a");
    const inputTodos=this.document.querySelectorAll("input");
    
    for (let i = 0; i < linkOpciones.length; i++) {
        linkOpciones[i].addEventListener("mouseover",function () {
            linkOpciones[i].classList.add("seleccionado");
            
        });
        linkOpciones[i].addEventListener("mouseout",function () {
            linkOpciones[i].classList.remove("seleccionado");
            
        });
        
    }

    for (let i = 0; i < inputTodos.length; i++) {
        inputTodos[i].addEventListener("click", function () {
            inputTodos[i].value="";            
        })
        
    }



});

$(document).ready(function(){    
    $("body").hide().fadeIn(3000);
    let orientacion = matchMedia("(orientation: portrait)");
    if (orientacion.matches) {
        $("#logo-final").after($("#contenedor"));
        $(".productos-destacados img").css("opacity",1);      
    };

    $("#icono-menu").click(function(){
        $(".menu").addClass("mostrar");
        $(".menu").slideToggle(500);
        
    });
    
    $(".productos-destacados img").hover(function () {
        $(this).animate({
            opacity: 1            
        },200);
        
    }, function () {
        $(this).animate({
            opacity: 0.7            
        },200);
        
    })
});



