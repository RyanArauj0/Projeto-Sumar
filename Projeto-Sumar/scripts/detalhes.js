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

