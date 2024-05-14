function openInSameTab(event) {
  event.preventDefault(); // Evitar el comportamiento predeterminado del enlace
  var anchor = event.currentTarget.closest('a'); // Obtener el elemento 'a' más cercano al elemento 'img' actual
  if (anchor) {
    window.location.href = anchor.href; // Abrir la URL del enlace en la misma pestaña
  }
}
