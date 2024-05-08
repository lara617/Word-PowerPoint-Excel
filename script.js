function goToHome() {
  // Aqui você define o código para redirecionar para a página inicial
  window.location.href = "http://127.0.0.1:5500/index.html";
}

function showContent(id) {
  var content = document.getElementById(id);
  content.classList.toggle("content-hidden");
}
