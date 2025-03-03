document.querySelector('.logo').addEventListener('click', function() {
    var logoContainer = document.querySelector('.logo-container');
    var textoInfo = document.getElementById('texto-info');
    var fotos = document.querySelectorAll('.foto'); // Seleccionamos todas las fotos

    if (logoContainer.classList.contains('moved')) {
        // Logo baja: removemos la clase y las fotos regresan al centro con transición
        logoContainer.classList.remove('moved');
        textoInfo.classList.remove('opaque');

        textoInfo.innerHTML = 'Friends & Family, fundada en CDMX por Lucho Martinez, es una productora y <i>media company</i> que fusiona gastronomía, cultura y creatividad. Actúa como un paraguas creativo para proyectos diversos, desde cocina innovadora hasta producción de eventos y <i>streetwear</i>. Su objetivo es generar conexiones, impulsar la innovación y crear experiencias únicas en una comunidad vibrante y en constante evolución.';

        // Removemos las clases de movimiento para que, gracias a la transición en CSS, las fotos vuelvan al centro
        fotos.forEach(foto => {
            foto.classList.remove('move-left', 'move-right');
        });

    } else {
        // Logo sube: agregamos la clase y movemos las fotos a los bordes según su posición
        logoContainer.classList.add('moved');

        fotos.forEach((foto) => {
            let rect = foto.getBoundingClientRect();
            let centerX = rect.left + rect.width / 2;
            let screenCenter = window.innerWidth / 2;

            if (centerX < screenCenter) {
                foto.classList.add('move-left');
            } else {
                foto.classList.add('move-right');
            }
        });
    }
});

document.getElementById("contacto").addEventListener("click", function() {
    var textoInfo = document.getElementById("texto-info");

    if (!textoInfo.classList.contains('opaque')) {
        textoInfo.classList.add('opaque');
        textoInfo.innerHTML = 
            '<a href="mailto:hello@friendsnfamily.com">hello@friendsnfamily.com</a><br><br>' + 
            '<a href="https://www.instagram.com/thisisfriendsandfamily/">@thisisfriendsandfamily</a>';
    } else {
        textoInfo.innerHTML = 
            '<a href="mailto:hello@friendsnfamily.com">hello@friendsnfamily.com</a><br><br>' + 
            '<a href="https://www.instagram.com/thisisfriendsandfamily/">@thisisfriendsandfamily</a>';
    }
});

document.addEventListener("DOMContentLoaded", function () {
    const logo = document.querySelector(".logo");
    const logoContainer = document.querySelector(".logo-container");
    let inactivityTimer;

    function makeLogoJump() {
        if (!logoContainer.classList.contains("moved")) { // Solo brinca si está abajo
            logo.classList.add("jump");
            setTimeout(() => {
                logo.classList.remove("jump");
            }, 500); // Duración del brinco
        }
    }

    function resetTimer() {
        clearTimeout(inactivityTimer);
        inactivityTimer = setTimeout(makeLogoJump, 3000); // Espera 5s antes de brincar
    }

    // Detecta movimiento del mouse o clics en la página
    document.addEventListener("mousemove", resetTimer);
    document.addEventListener("click", resetTimer);
    
    resetTimer(); // Inicia el temporizador al cargar la página
});
