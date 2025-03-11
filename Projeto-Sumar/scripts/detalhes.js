/* ================================ SLIDES ================================ */

let index = 0;
    const slides = document.querySelector(".slider-content");
    const totalSlides = document.querySelectorAll(".slide-box").length;

    function nextSlide() {
        index = (index + 1) % totalSlides;
        updateSlide();
    }

    function prevSlide() {
        index = (index - 1 + totalSlides) % totalSlides;
        updateSlide();
    }

    function updateSlide() {
        slides.style.transform = `translateX(-${index * 100}%)`;
    }

    setInterval(nextSlide, 9999999); // Troca automática a cada 9s


/* ================================ MODO ESCURO/CLARO ================================ */

const botao = document.getElementById("modo-toggle");
const body = document.body;

// Verifica se o usuário já selecionou um modo antes
if (localStorage.getItem("modo") === "dark") {
    body.classList.add("dark-mode");
    botao.textContent = "☀️";
}

// Alterna entre os modos
botao.addEventListener("click", () => {
    body.classList.toggle("dark-mode");

    // Salva a preferência no localStorage
    if (body.classList.contains("dark-mode")) {
        localStorage.setItem("modo", "dark");
        botao.textContent = "☀️";
    } else {
        localStorage.setItem("modo", "light");
        botao.textContent = "🌙";
    }
});

/* ================================ MENU MOBILE ================================ */

let btnmenu = document.getElementById('btn-menu')
let menu = document.getElementById('menu-mobile')
let overlay = document.getElementById('overlay-menu')

btnmenu.addEventListener('click', ()=>{
    menu.classList.add('abrir-menu')
})

menu.addEventListener('click', ()=>{
    menu.classList.remove('abrir-menu')
})

overlay.addEventListener('click', ()=>{
    menu.classList.remove('abrir-menu')
})

/* ================================ BARRA DEBAIXO DOS BOTOES ================================ */

document.addEventListener("DOMContentLoaded", function () {
    // Verifica se a página atual é a index.html
    if (window.location.pathname.includes("index.html") || window.location.pathname === "/") {
        document.getElementById("link-inicio").classList.add("ativo");
    }
});


document.addEventListener("DOMContentLoaded", function () {
    // Verifica se a página atual é a index.html
    if (window.location.pathname.includes("carros.html") || window.location.pathname === "/") {
        document.getElementById("link-carros").classList.add("ativo");
    }
});

document.addEventListener("DOMContentLoaded", function () {
    // Verifica se a página atual é a index.html
    if (window.location.pathname.includes("venda-carros.html") || window.location.pathname === "/") {
        document.getElementById("link-venda").classList.add("ativo");
    }
});

/* ================================ FILTRO ================================ */

function filtrarCarros() {
    let marcaSelecionada = document.getElementById('marca').value;
    let precoMaximo = document.getElementById('preco').value;
    let pesquisaNome = document.getElementById('pesquisa').value.toLowerCase();
    let carros = document.querySelectorAll('.carro');

    carros.forEach(carro => {
        let marca = carro.getAttribute('data-marca');
        let preco = parseInt(carro.getAttribute('data-preco'));
        let nome = carro.getAttribute('data-nome').toLowerCase();

        if ((marcaSelecionada === '' || marcaSelecionada === marca) &&
            preco <= precoMaximo &&
            nome.includes(pesquisaNome)) {
            carro.style.display = 'flex'; // Exibe os elementos que correspondem ao filtro
        } else {
            carro.style.display = 'none'; // Remove os elementos que não correspondem ao filtro
        }
    });
}

// Adiciona eventos para ativar o filtro ao mudar a marca ou o preço
document.getElementById('marca').addEventListener('change', filtrarCarros);
document.getElementById('preco').addEventListener('input', filtrarCarros);


function atualizarPreco(valor) {
    document.getElementById('preco-valor').textContent = `R$ ${parseInt(valor).toLocaleString('pt-BR')}`;
}


/* ================================ AVISO DE ESTOQUE ================================ */

document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll(".aviso").forEach(aviso => {
        if (aviso.textContent.trim().toLowerCase() === "em estoque") {
            aviso.style.backgroundColor = "green";
            aviso.style.color = "white"; // Deixa o texto mais visível
        } else if (aviso.textContent.trim().toLowerCase() === "fora de estoque") {
            aviso.style.backgroundColor = "red";
            aviso.style.color = "white";
        }
    });
});

/* ================================ CHAVE RESERVA =================================== */

document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll(".sim-nao").forEach(aviso => {
        if (aviso.textContent.trim().toLowerCase() === "sim") {
            aviso.style.backgroundColor = "green";
            aviso.style.color = "white"; // Deixa o texto mais visível
        } else if (aviso.textContent.trim().toLowerCase() === "não") {
            aviso.style.backgroundColor = "red";
            aviso.style.color = "white";
        }
    });
});

/* ================================ FORMULÁRIO PARA WHATSAPP =================================== */

document.getElementById('whatsappForm').addEventListener('submit', function(event) {
    event.preventDefault();  // Previne o envio padrão do formulário
    
    var nome = document.getElementById('nome').value;
    var email = document.getElementById('email').value;
    var tel = document.getElementById('tel').value;
    var mensagem = document.getElementById('mensagem').value;
    
    
    // Pega o nome do carro que está no <h1> e preço
    var nomeCarro = document.getElementById('nomeCarro').innerText;
    var valor = document.getElementById('precocarro').innerText;

    // Formata a mensagem com todos os dados, incluindo o nome do carro
    var mensagemCompleta = `PROPOSTA!!\n====================\n\nNome: ${nome}\nTelefone: ${tel}\nEmail: ${email}\n\n====================\nCarro: ${nomeCarro}\nPreço: ${valor}\n====================\n\nMensagem: ${mensagem}\n\n====================`;

    // Atualiza a ação do formulário com a mensagem formatada
    var whatsappUrl = `https://wa.me/5522997648741?text=${encodeURIComponent(mensagemCompleta)}`;

    // Envia o usuário para o WhatsApp com os dados
    window.open(whatsappUrl, '_blank');
});

/* ================================ FORMULÁRIO PARA VENDA =================================== */

document.getElementById('vender-carro').addEventListener('submit', function(event) {
    event.preventDefault();  

    // Captura dos dados
    var nome = document.getElementById('nome').value.trim();
    var email = document.getElementById('email').value.trim();
    var tel = document.getElementById('tel').value.trim();
    var nomeCarro = document.getElementById('nome-carro').value.trim();
    var marcaCarro = document.getElementById('marca').value.trim();
    var modeloCarro = document.getElementById('modelo').value.trim();
    var kmCarro = document.getElementById('km').value.trim();
    var anoCarro = document.getElementById('ano').value.trim();
    var valor_desejado = document.getElementById('valor').value.trim();

    // Validação: Verifica se todos os campos estão preenchidos
    if (!nome || !email || !tel || !nomeCarro || !marcaCarro || !modeloCarro || !kmCarro || !anoCarro || !valor_desejado) {
        alert('Por favor, preencha todos os campos antes de enviar.');
        return;
    }

    // Formatação da mensagem
    var mensagem = `🚗 *VENDA DE CARRO* 🚗\n====================\n` +
                   `👤 *Nome:* ${nome}\n` +
                   `📞 *Telefone:* ${tel}\n` +
                   `📧 *Email:* ${email}\n\n` +
                   `====================\n🚘 *Detalhes do Carro*\n====================\n` +
                   `🏎️ *Carro:* ${nomeCarro}\n` +
                   `🏷️ *Marca:* ${marcaCarro}\n` +
                   `📌 *Modelo:* ${modeloCarro}\n` +
                   `🛣️ *KM:* ${kmCarro}\n` +
                   `📅 *Ano:* ${anoCarro}\n` +
                   `💰 *Valor desejado:* R$ ${valor_desejado}\n` +
                   `====================`;

    // Codifica a mensagem para ser enviada na URL
    var mensagemCodificada = encodeURIComponent(mensagem);

    // Número do WhatsApp (incluindo DDD)
    var telefone = "5522997648741"; // Verifique se está correto

    // Gera o link do WhatsApp corretamente
    var whatsappUrl = `https://api.whatsapp.com/send?phone=${telefone}&text=${mensagemCodificada}`;

    // Abre o WhatsApp com os dados
    window.open(whatsappUrl, '_blank');
});



/* ================================ Horario de atendimento =================================== */

// Função para verificar o horário e mudar a cor de fundo
function verificarHorario() {
    var p = document.getElementById("horario-atendimento");
    var agora = new Date();
    var horaAtual = agora.getHours(); // Pega a hora atual

    // Verifica se está entre 8h e 18h
    if (horaAtual >= 8 && horaAtual < 18) {
        p.style.backgroundColor = "green";  // Fundo verde
    } else {
        p.style.backgroundColor = "red";  // Fundo vermelho
    }
}

// Chama a função quando a página for carregada
window.onload = verificarHorario;

