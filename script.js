function mostrarMensagem() {
    document.getElementById("mensagem").style.display = "block";
}

let show = true;
const menuContent = document.querySelector('.content');
const menuToggle = menuContent.querySelector('.menu-toggle');


menuToggle.addEventListener('click', () => {

    menuContent.classList.toggle('on', show);
    show = !show;

});

function toggleMenu() {
    const navLinks = document.getElementById("navLinks");
    const btn = document.querySelector(".menu-toggle");

    navLinks.classList.toggle("show");

    // alternar ícone do botão
    if (navLinks.classList.contains("show")) {
        btn.textContent = "✖";
    } else {
        btn.textContent = "☰";
    }
}