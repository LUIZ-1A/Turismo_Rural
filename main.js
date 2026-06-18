function scrollDestinos() {
  document.getElementById("destinos").scrollIntoView({ behavior: "smooth" });
}

function abrirModal(titulo, texto) {
  document.getElementById("modal-title").innerText = titulo;
  document.getElementById("modal-text").innerText = texto;
  document.getElementById("modal").style.display = "block";
}

function fecharModal() {
  document.getElementById("modal").style.display = "none";
}

window.onclick = function(event) {
  const modal = document.getElementById("modal");
  if (event.target === modal) {
    modal.style.display = "none";
  }
};