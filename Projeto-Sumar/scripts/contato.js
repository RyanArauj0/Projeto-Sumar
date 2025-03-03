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
/* ================================ FORMULÁRIO PARA VENDA =================================== */

document.getElementById('contato-wpp').addEventListener('submit', function(event) {
    event.preventDefault();  

    // Captura dos dados
    var nome = document.getElementById('nome').value.trim();
    var email = document.getElementById('email').value.trim();
    var tel = document.getElementById('tel').value.trim();

    // Validação: Verifica se todos os campos estão preenchidos
    if (!nome || !tel || !email ) {
        alert('Por favor, preencha todos os campos antes de enviar.');
        return;
    }

    // Formatação da mensagem
    var mensagem = ` *Contato* \n====================\n` +
                   `👤 *Nome:* ${nome}\n` +
                   `📞 *Telefone:* ${tel}\n` +
                   `📧 *Email:* ${email}\n` 

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

