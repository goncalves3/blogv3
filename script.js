function toggleContent(button) {

    const extraContent = button.previousElementSibling;

    if (extraContent.style.display === "none" || extraContent.style.display === "") {
        extraContent.style.display = "block";
        button.textContent = "Leia menos";
    } else {
        extraContent.style.display = "none";
        button.textContent = "Leia mais";
    }
}
let currentIndex = 0;
const slides = document.querySelectorAll('.carousel-images img');

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.classList.remove('active');
        if (i === index) {
            slide.classList.add('active');
        }
    });
}

function nextSlide() {
    currentIndex = (currentIndex + 1) % slides.length;
    showSlide(currentIndex);
}

function prevSlide() {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    showSlide(currentIndex);
}

// Inicia o carrossel mostrando a primeira imagem
showSlide(currentIndex);

// Carrossel automático (opcional)
setInterval(nextSlide, 3000); // Altere o tempo conforme necessário
function showNotification(message) {
const notification = document.getElementById('notification');
notification.textContent = message;
notification.classList.add('show');

}
//remove a notificação após 3 segundos
setTimeout(() => {
    notification.classList.remove('show');
}, 3000)

// Exemplo de uso: exibir notificação
showNotification("Bem-vindo ao Meu Blog!");