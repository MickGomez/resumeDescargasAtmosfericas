function showInfo(section) {
    var modal = document.getElementById("infoModal");
    var title = document.getElementById("modalTitle");
    var content = document.getElementById("modalContent");

    switch (section) {
        case 'inicio':
            title.innerText = "Inicio";
            content.innerHTML = "<p>Bienvenidos a nuestro sitio web. Aquí podrás explorar el fascinante mundo de los rayos y las descargas eléctricas atmosféricas.</p>" +
                                "<p>Los rayos son descargas eléctricas naturales que se producen en la atmósfera. Estas descargas pueden alcanzar temperaturas de hasta 30,000 Kelvin y liberar una gran cantidad de energía.</p>";
            break;
        case 'objetivos':
            title.innerText = "Objetivos";
            content.innerHTML = "<p>Nuestros objetivos incluyen el estudio y monitoreo de las descargas eléctricas atmosféricas para comprender mejor estos fenómenos naturales.</p>" +
                                "<p>Nos esforzamos por mejorar la seguridad pública a través de la investigación y el desarrollo de sistemas de alerta temprana y medidas de mitigación.</p>";
            break;
        case 'proceso':
            title.innerText = "Proceso";
            content.innerHTML = "<p>Nuestro proceso involucra el monitoreo y análisis de las descargas eléctricas para mejorar la seguridad y el conocimiento científico.</p>" +
                                "<p>Utilizamos tecnología avanzada, como radares y satélites, para detectar y analizar las tormentas eléctricas en tiempo real.</p>";
            break;
        case 'contactos':
            title.innerText = "Contactos";
            content.innerHTML = "<p>Puedes contactarnos para obtener más información sobre nuestro trabajo y posibles colaboraciones.</p>" +
                                "<p>Estamos disponibles para responder a tus preguntas y proporcionarte información adicional sobre nuestras investigaciones y proyectos.</p>";
            break;
        default:
            title.innerText = "";
            content.innerText = "";
    }

    modal.style.display = "block";
}

function closeModal() {
    var modal = document.getElementById("infoModal");
    modal.style.display = "none";
}

// Close the modal when the user clicks anywhere outside of the modal
window.onclick = function(event) {
    var modal = document.getElementById("infoModal");
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

// Inicializa WOW.js para animaciones de scroll
new WOW().init();

// Añade la clase 'wow' y 'animate__fadeIn' a los elementos que quieres animar al hacer scroll
document.addEventListener('DOMContentLoaded', (event) => {
    document.querySelectorAll('.section').forEach((elem) => {
        elem.classList.add('wow', 'animate__fadeIn');
    });
});

// Smooth scrolling para los enlaces de navegación
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

