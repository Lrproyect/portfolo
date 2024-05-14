function openInSameTab(event) {
    event.preventDefault(); // Evitar el comportamiento predeterminado del enlace
    window.location.href = event.currentTarget.parentElement.href; // Abrir la URL del enlace en la misma pestaña
  }
  