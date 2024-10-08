const headings = document.querySelectorAll('h2');
        
        headings.forEach(heading => {
            heading.addEventListener('click', function() {
                // Obtenemos el siguiente elemento que es el contenedor del contenido
                const content = this.nextElementSibling;

                // Desplegamos o plegamos la sección según su estado actual
                if (content.classList.contains('active')) {
                    content.classList.remove('active');
                    content.style.maxHeight = null;  // Plegamos
                } else {
                    // Primero cerramos otras secciones abiertas (opcional, si deseas que sólo una se abra a la vez)
                    document.querySelectorAll('.content.active').forEach(activeContent => {
                        activeContent.classList.remove('active');
                        activeContent.style.maxHeight = null;
                    });

                    // Activamos y expandimos la sección clickeada
                    content.classList.add('active');
                    content.style.maxHeight = content.scrollHeight + 'px';  // Expandimos
                }
            });
        });