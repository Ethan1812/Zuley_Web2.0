// Array con la información de los productos, esto hace la página más escalable
const productosData = [
  {
    imagen: 'imagenes/Aretes1.jpeg',
    titulo: 'Aretes Coral de Fuego',
    descripcion: 'Elegantes aretes tejidos a mano en macramé, elaborados con hilo chino de vibrante tono rojo que evoca la fuerza y belleza del coral marino. Cuelgan de ganchos en acero inoxidable, ideales para pieles sensibles y perfectos para uso diario. Ligeros, únicos y diseñados para darle un toque artesanal y sofisticado a tu estilo.',
    precio: '$26.000'
  },
  {
    imagen: 'imagenes/Aretes2.jpeg',
    titulo: 'Aretes Eclipse',
    descripcion: 'Aretes tejidos a mano en macramé, elaborados con hilo chino en tonos negro profundo y rosa suave, formando un patrón geométrico que evoca el contraste entre sombra y luz, como un eclipse delicado sobre la piel. Cuelgan de ganchos en acero inoxidable, resistentes y seguros para pieles sensibles. Su diseño ligero y elegante los convierte en el complemento perfecto para quienes buscan expresar fuerza y dulzura en un solo detalle.',
    precio: '$26.000'
  },
  {
    imagen: 'imagenes/Aretes3.jpeg',
    titulo: 'Aretes Gota Dorada',
    descripcion: 'Captura la calidez del sol caribeño con estos aretes únicos. Su color ámbar y su textura de macramé los convierten en el accesorio ideal para un estilo fresco, vibrante y lleno de personalidad.',
    precio: '$26.000'
  },
  {
    imagen: 'imagenes/Manilla1.jpeg',
    titulo: 'Pulsera Esmeralda Urbana',
    descripcion: 'Tejida a mano con hilo negro y mostacillas verdes, esta pulsera representa el equilibrio entre lo orgánico y lo urbano. Su diseño sobrio y elegante la convierte en el accesorio ideal para quienes buscan autenticidad con un toque moderno.',
    precio: '$12.000'
  },
  {
    imagen: 'imagenes/Manilla2.jpeg',
    titulo: 'Pulsera Pulso Carmesí',
    descripcion: 'Pulsera tejida a mano con hilo chino rojo en nudo serpiente, un diseño firme y estilizado que transmite energía, pasión y determinación. Su estructura envolvente que aportan un acabado limpio, moderno y resistente. Una pieza pensada para quienes llevan su estilo con fuerza y autenticidad.',
    precio: '$10.000'
  },
  {
    imagen: 'imagenes/Manilla3.jpeg',
    titulo: 'Pulsera Brisa Escarlata',
    descripcion: 'Pulsera tejida a mano con hilo chino rojo en nudo plano, una técnica que crea una superficie suave y uniforme. A lo largo de su diseño se distribuyen 80 balines pequeños, que aportan un ritmo visual encantador y un brillo delicado. Aunque no son de acero inoxidable, su acabado decorativo realza el diseño artesanal con un toque efímero y auténtico. Brisa Escarlata es una pieza que celebra la pasión, el movimiento y la belleza de lo hecho a mano. Inspirada en el viento que acaricia con fuerza y suavidad.',
    precio: '$10.000'
  },
  {
    imagen: 'imagenes/Manilla4.jpeg',
    titulo: 'Esencia Jade',
    descripcion: 'Pulsera tejida a mano con hilo chino verde en nudo plano, una técnica que crea una textura uniforme y resistente. Su diseño se realza con 68 mostacillas verdes distribuidas en doble hilera, aportando brillo, frescura y un toque sofisticado. Inspirada en la armonía de la naturaleza y la energía del color verde, esta pieza artesanal es ideal para quienes buscan equilibrio y estilo en cada detalle.',
    precio: '$10.000'
  },
  {
    imagen: 'imagenes/Manilla5.jpeg',
    titulo: 'Murano carmesí',
    descripcion: 'Pulsera tejida a mano con hilo chino rojo en nudo plano, decorada con 66 pepitas de murano #4 que aportan un brillo intenso y una textura delicada. Su diseño combina la fuerza del color rojo con la elegancia del cristal, creando una pieza llamativa y femenina. Perfecta para quienes buscan un accesorio artesanal con carácter y estilo.',
    precio: '$12.000'
  },
    {
    imagen: 'imagenes/Manilla6.jpeg',
    titulo: 'Pulsera Niebla Clara',
    descripcion: 'Pulsera tejida a mano con hilo chino gris, decorada con 36 pepitas blancas brillantes que aportan luz y contraste sobre el fondo neutro. Su diseño minimalista y delicado transmite serenidad, equilibrio y estilo. Ideal para quienes prefieren accesorios artesanales con un toque sutil y sofisticado.',
    precio: '$10.000'
  }
];

// --- LÓGICA DEL CARRUSEL ---
let currentIndex = 0;
const slider = document.getElementById('slider');
const slides = slider.querySelectorAll('img');
const prevBtn = document.getElementById('prevSlide');
const nextBtn = document.getElementById('nextSlide');
const dotsWrapper = document.getElementById('dots-wrapper');
let interval;

function updateSlider() {
  slider.style.transform = `translateX(-${currentIndex * 100}%)`;
  updateDots();
}

function nextSlide() {
  currentIndex = (currentIndex + 1) % slides.length;
  updateSlider();
}

function prevSlide() {
  currentIndex = (currentIndex - 1 + slides.length) % slides.length;
  updateSlider();
}

function createDots() {
  slides.forEach((_, index) => {
    const dot = document.createElement('span');
    dot.classList.add('dot');
    dot.addEventListener('click', () => {
      currentIndex = index;
      updateSlider();
    });
    dotsWrapper.appendChild(dot);
  });
}

function updateDots() {
  const dots = dotsWrapper.querySelectorAll('.dot');
  dots.forEach((dot, index) => {
    if (index === currentIndex) {
      dot.classList.add('active');
    } else {
      dot.classList.remove('active');
    }
  });
}

createDots();
updateSlider();
startSlider();

nextBtn.addEventListener('click', nextSlide);
prevBtn.addEventListener('click', prevSlide);

function startSlider() {
  interval = setInterval(nextSlide, 5000);
}

function pauseSlider() {
  clearInterval(interval);
}

document.querySelector('.carrusel-header').addEventListener('mouseover', pauseSlider);
document.querySelector('.carrusel-header').addEventListener('mouseout', startSlider);


// --- LÓGICA DEL MODAL ---
const modal = document.getElementById('modal');
const closeModalBtn = document.getElementById('close-modal');
const modalImg = document.getElementById('modal-img');
const modalTitulo = document.getElementById('modal-titulo');
const modalDescripcion = document.getElementById('modal-descripcion');
const modalPrecio = document.getElementById('modal-precio');
const modalContent = document.querySelector('.modal-content');

function mostrarModal(index) {
  const producto = productosData[index];
  modalImg.src = producto.imagen;
  modalImg.alt = producto.titulo;
  modalTitulo.textContent = producto.titulo;
  modalDescripcion.textContent = producto.descripcion;
  modalPrecio.textContent = producto.precio;
  modal.classList.add('active');
  modalImg.style.transform = 'scale(1)';
}

function cerrarModal() {
  modal.classList.remove('active');
}

closeModalBtn.addEventListener('click', cerrarModal);

window.addEventListener('click', (event) => {
  if (event.target === modal) {
    cerrarModal();
  }
});

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && modal.classList.contains('active')) {
    cerrarModal();
  }
});

// --- LÓGICA DEL FORMULARIO DE CONTACTO ---
const contactForm = document.getElementById('formulario-contacto');
contactForm.addEventListener('submit', (e) => {
  e.preventDefault();
  alert('¡Mensaje enviado con éxito! Nos pondremos en contacto contigo pronto.');
  contactForm.reset();
});

// Generar los productos en la página de forma dinámica
const productosGrid = document.getElementById('productos-grid');
productosData.forEach((producto, index) => {
  const productoCard = document.createElement('div');
  productoCard.classList.add('producto-card');
  productoCard.innerHTML = `
    <img src="${producto.imagen}" alt="${producto.titulo}">
    <div class="producto-info">
      <h3>${producto.titulo}</h3>
      <p class="precio">${producto.precio}</p>
    </div>
  `;
  productoCard.addEventListener('click', () => mostrarModal(index));
  productosGrid.appendChild(productoCard);
});