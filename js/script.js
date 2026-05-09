function openProject(url, title) {
  const modal = document.getElementById('projectModal');
  const iframe = document.getElementById('modalFrame');
  const modalTitle = document.getElementById('modalTitle');
  const externalLink = document.getElementById('modalExternalLink');

  // Asignar los datos
  modalTitle.innerText = title;
  iframe.src = url;
  externalLink.href = url;

  // Mostrar el modal (quitar la clase 'hidden')
  modal.classList.remove('hidden');
  // Bloquear el scroll de la página principal
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  const modal = document.getElementById('projectModal');
  const iframe = document.getElementById('modalFrame');

  // Esconder el modal
  modal.classList.add('hidden');
  // Limpiar el iframe para que la música/videos paren al cerrar
  iframe.src = '';
  // Devolver el scroll
  document.body.style.overflow = 'auto';
}