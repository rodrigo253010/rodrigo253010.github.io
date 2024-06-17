function showModal(destination) {
    var modal = document.getElementById('modal');
    var title = document.getElementById('modal-title');
    var description = document.getElementById('modal-description');

if (destination === 'lapaz') {
   title.innerText = 'Lapaz';
   description.innerText = 'La Paz se encuentran maravilas naturales como el Lago Titicaca y elParque Nacional Madidi, y el complejo arqueológico más importante de Bolivia: Tiwanak.';
} else if (destination === 'tarija') {
   title.innerText = 'Tarija';
   description.innerText = 'El departamento de Tarija tiene un fuerte potencial y ventajas competitivas, ya sea a través del clima, sitios históricos y gastronomíatractivo.';
} else if (destination === 'cochabamba') {
   title.innerText = 'Cochabamba';
   description.innerText = 'El departamento de Cochabamba es una región caracterizada por la producción agroindustrial de alimentos de consumo interno y de exportación e industrial.';
    }

    modal.style.display = 'block';
}

function closeModal() {
    var modal = document.getElementById('modal');
    modal.style.display = 'none';
}

// Cierra el modal si se hace clic fuera del contenido del modal
window.onclick = function(event) {
    var modal = document.getElementById('modal');
    if (event.target == modal) {
        modal.style.display = 'none';
    }
}
