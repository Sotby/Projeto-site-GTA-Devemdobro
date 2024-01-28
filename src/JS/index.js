const button = document.querySelector(".btn-plataforma");
const data = document.querySelector('.plataforma');

button.addEventListener("click", () => {
    data.classList.toggle("ativo")
})