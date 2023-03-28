let menuVisible = false;

//funcion que oculta o muestra el menu
function mostrarOcultarMenu() {
    if (menuVisible) {
        document.getElementById("nav").classList = "";
        menuVisible = false;
    } else {
        document.getElementById("nav").classList = "responsive";
        menuVisible = true;
    }
}

function seleccionar(){
    //oculto el menu uan vez que selecciono una opcion
    document.getElementById("nav").classList="";
    menuVisible = false;
}
//funcion para aplicar animaciones en habilidades
function efectoHabilidades(){
    var skills = document.getElementById("skills");
    var distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;
    if(distancia_skills >= 300){
        let habilidades = document.getElementsByClassName("progreso");
        habilidades[0].classList.add("javascript");
        habilidades[1].classList.add("htmlcss");
        habilidades[2].classList.add("photoshop");
        habilidades[3].classList.add("microsoftoffice");
        habilidades[4].classList.add("comunicacionyoratoria");
        habilidades[5].classList.add("teamwork");
        habilidades[6].classList.add("liderazgo");
        habilidades[7].classList.add("responsabilidadycompromiso");
    }
}



//detectar primero el scrolling para aplicar la animación en la barra
window.onscroll = function(){
    efectoHabilidades();
}
