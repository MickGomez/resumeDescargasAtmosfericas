// Inicializa WOW.js para animaciones de scroll
new WOW().init();

// Función para mostrar el modal con información
function showInfo(section) {
    const modal = document.getElementById("infoModal");
    const title = document.getElementById("modalTitle");
    const content = document.getElementById("modalContent");

    // Objeto con la información para cada sección
    const sectionInfo = {
        inicio: {
            title: "Descargas Atmosféricas",
            content: `
                <p>Las descargas atmosféricas son fenómenos eléctricos naturales que ocurren durante las tormentas. Estos eventos fascinantes pueden alcanzar temperaturas de hasta 30,000 Kelvin, más calientes que la superficie del sol, y liberar una energía equivalente a cientos de bombillas encendidas durante un año en tan solo una fracción de segundo.</p>
                <p>Nuestro equipo se dedica a estudiar estos impresionantes fenómenos para comprender mejor su formación, comportamiento y efectos, con el objetivo de mejorar la seguridad y la previsión meteorológica.</p>
            `
        },
        objetivos: {
            title: "Nuestros Objetivos",
            content: `
                <ul>
                    <li>Avanzar en la comprensión científica de las descargas eléctricas atmosféricas y su relación con otros fenómenos meteorológicos.</li>
                    <li>Desarrollar y mejorar sistemas de detección y predicción de rayos para aumentar la seguridad pública.</li>
                    <li>Colaborar con instituciones académicas y gubernamentales para aplicar nuestros conocimientos en la mejora de la gestión de riesgos asociados a las tormentas eléctricas.</li>
                    <li>Educar al público general sobre la naturaleza de las descargas atmosféricas y las medidas de seguridad adecuadas durante tormentas eléctricas.</li>
                </ul>
            `
        },
        proceso: {
            title: "Nuestro Proceso de Investigación",
            content: `
                <ol>
                    <li><strong>Recolección de datos:</strong> Utilizamos una red de sensores de última generación para detectar y registrar descargas eléctricas en tiempo real.</li>
                    <li><strong>Análisis de datos:</strong> Empleamos algoritmos avanzados y técnicas de aprendizaje automático para procesar y analizar los datos recopilados.</li>
                    <li><strong>Modelado:</strong> Desarrollamos modelos predictivos para entender mejor el comportamiento de las tormentas eléctricas.</li>
                    <li><strong>Validación:</strong> Comparamos nuestros modelos con datos históricos y realizamos pruebas de campo para validar nuestras teorías.</li>
                    <li><strong>Aplicación:</strong> Trabajamos con meteorólogos y autoridades para implementar nuestros hallazgos en sistemas de alerta temprana y medidas de seguridad.</li>
                </ol>
            `
        },
        contactos: {
            title: "Contacta con Nosotros",
            content: `
                <p>Estamos siempre interesados en colaborar con otros investigadores, instituciones y entidades gubernamentales. Si tienes preguntas sobre nuestro trabajo o estás interesado en colaborar, no dudes en ponerte en contacto con nosotros.</p>
                <ul>
                    <li>Email: info@descargasatmosfericas.py</li>
                    <li>Teléfono: +595 21 123 4567</li>
                    <li>Dirección: Universidad Nacional de Asunción, San Lorenzo, Paraguay</li>
                </ul>
            `
        }
    };

    // Actualiza el contenido del modal
    title.innerText = sectionInfo[section].title;
    content.innerHTML = sectionInfo[section].content;

    // Muestra el modal con una animación
    modal.style.display = "block";
    setTimeout(() => {
        modal.classList.add("show");
    }, 10);
}

// Función para cerrar el modal
function closeModal() {
    const modal = document.getElementById("infoModal");
    modal.classList.remove("show");
    setTimeout(() => {
        modal.style.display = "none";
    }, 300);
}

// Cierra el modal cuando se hace clic fuera de él
window.onclick = function(event) {
    const modal = document.getElementById("infoModal");
    if (event.target == modal) {
        closeModal();
    }
}

// Smooth scrolling para los enlaces de navegación
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Cambia el estilo del header al hacer scroll
window.addEventListener('scroll', () => {
    const header = document.querySelector('.site-header');
    if (window.scrollY > 100) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// Añade la clase 'wow' y 'animate__fadeIn' a los elementos que quieres animar al hacer scroll
document.addEventListener('DOMContentLoaded', (event) => {
    document.querySelectorAll('.section').forEach((elem) => {
        elem.classList.add('wow', 'animate__fadeIn');
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.querySelector('.nav-menu');

    menuToggle.addEventListener('click', () => {
        navMenu.classList.toggle('open');
    });
});


document.addEventListener('DOMContentLoaded', () => {
    const backToTopButton = document.getElementById('backToTop');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            backToTopButton.classList.add('show');
        } else {
            backToTopButton.classList.remove('show');
        }
    });

    backToTopButton.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
});

