document.getElementById("formulario").addEventListener("submit", function(event) {
    event.preventDefault(); // Evita o recarregamento da página

    let nome = document.getElementById("nome").value;
    let telefone = document.getElementById("telefone").value;
    let mensagem = document.getElementById("mensagem").value;

    let numeroWhatsApp = "5522997648741"; // Substitua pelo seu número com DDD (sem espaços ou caracteres especiais)

    let textoMensagem = `Olá, meu nome é ${nome}. Meu telefone é ${telefone}. Mensagem: ${mensagem}`;

    let url = `https://web.whatsapp.com/${numeroWhatsApp}?text=${encodeURIComponent(textoMensagem)}`;

    window.open(url, "_blank"); // Abre o WhatsApp em uma nova aba
});


var swiper = new Swiper('.swiper-container', {
    slidesPerView: 4,
    spaceBetween: 30,
    loop: true,
    autoplay: {
        delay: 2000,
    },
});

