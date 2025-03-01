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

    setInterval(nextSlide, 15000); // Troca automática a cada 15s


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

