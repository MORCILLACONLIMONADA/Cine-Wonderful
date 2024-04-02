document.addEventListener("DOMContentLoaded", function() {
    const carrusel1 = document.getElementById('carrusel-1');
    const carrusel2 = document.getElementById('carrusel-2');
	const carrusel3 = document.getElementById('carrusel-3');
	const carrusel4 = document.getElementById('carrusel-4');
	const carrusel5 = document.getElementById('carrusel-5');


    const configurarCarrusel = (carrusel) => {
        const peliculas = carrusel.querySelectorAll('.pelicula');
        const flechaIzquierda = carrusel.querySelector('.flecha-izquierda');
        const flechaDerecha = carrusel.querySelector('.flecha-derecha');
        const contenedorCarousel = carrusel.querySelector('.contenedor-carousel');

        flechaDerecha.addEventListener('click', () => {
            contenedorCarousel.scrollLeft += contenedorCarousel.offsetWidth;

            const indicadorActivo = carrusel.querySelector('.indicadores .activo');
            if (indicadorActivo.nextSibling) {
                indicadorActivo.nextSibling.classList.add('activo');
                indicadorActivo.classList.remove('activo');
            }
        });

        flechaIzquierda.addEventListener('click', () => {
            contenedorCarousel.scrollLeft -= contenedorCarousel.offsetWidth;

            const indicadorActivo = carrusel.querySelector('.indicadores .activo');
            if (indicadorActivo.previousSibling) {
                indicadorActivo.previousSibling.classList.add('activo');
                indicadorActivo.classList.remove('activo');
            }
        });

        const numeroPaginas = Math.ceil(peliculas.length / 5);
        for (let i = 0; i < numeroPaginas; i++) {
            const indicador = document.createElement('button');

            if (i === 0) {
                indicador.classList.add('activo');
            }

            carrusel.querySelector('.indicadores').appendChild(indicador);
            indicador.addEventListener('click', (e) => {
                contenedorCarousel.scrollLeft = i * contenedorCarousel.offsetWidth;

                carrusel.querySelector('.indicadores .activo').classList.remove('activo');
                e.target.classList.add('activo');
            });
        }

        peliculas.forEach((pelicula) => {
            pelicula.addEventListener('mouseenter', (e) => {
                const elemento = e.currentTarget;
                setTimeout(() => {
                    peliculas.forEach(pelicula => pelicula.classList.remove('hover'));
                    elemento.classList.add('hover');
                }, 300);
            });
        });

        carrusel.addEventListener('mouseleave', () => {
            peliculas.forEach(pelicula => pelicula.classList.remove('hover'));
        });
    };

    configurarCarrusel(carrusel1);
    configurarCarrusel(carrusel2);
	configurarCarrusel(carrusel3);
	configurarCarrusel(carrusel4);
	configurarCarrusel(carrusel5);

});
