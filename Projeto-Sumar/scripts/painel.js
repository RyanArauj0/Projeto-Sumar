document.addEventListener("DOMContentLoaded", carregarCarros);

const carForm = document.getElementById("addCarForm");
const carList = document.getElementById("carList");

carForm.addEventListener("submit", (e) => {
    e.preventDefault();
    adicionarOuEditarCarro();
});

function carregarCarros() {
    const carros = JSON.parse(localStorage.getItem("carros")) || [];
    carList.innerHTML = ""; 

    if (carros.length === 0) {
        carList.innerHTML = "<p>Nenhum carro cadastrado.</p>";
        return;
    }

    carros.forEach((carro, index) => {
        let li = document.createElement("li");
        li.innerHTML = `
            <img src="${carro.imagem}" alt="${carro.nome}" width="100">
            <p><strong>${carro.nome}</strong> - ${carro.marca} - R$ ${parseFloat(carro.preco).toLocaleString('pt-BR')}</p>
            <p>${carro.descricao}</p>
            <p>Status: <strong>${carro.estoque ? "Em Estoque" : "Fora de Estoque"}</strong></p>
            <button onclick="editarCarro(${index})">Editar</button>
            <button onclick="removerCarro(${index})">Remover</button>
            <button onclick="alterarEstoque(${index})">
                ${carro.estoque ? "Marcar como Fora de Estoque" : "Marcar como Em Estoque"}
            </button>
        `;
        carList.appendChild(li);
    });
}

function adicionarOuEditarCarro() {
    const index = document.getElementById("carIndex").value;
    const nome = document.getElementById("carName").value;
    const marca = document.getElementById("carBrand").value;
    const preco = document.getElementById("carPrice").value;
    const imagem = document.getElementById("carImage").value;
    const descricao = document.getElementById("carDescription").value;
    const estoque = document.getElementById("carInStock").checked;

    let carros = JSON.parse(localStorage.getItem("carros")) || [];

    const novoCarro = { nome, marca, preco, imagem, descricao, estoque };

    if (index === "") {
        carros.push(novoCarro);
    } else {
        carros[index] = novoCarro;
    }

    localStorage.setItem("carros", JSON.stringify(carros));
    carForm.reset();
    document.getElementById("carIndex").value = "";
    carregarCarros();
}

function editarCarro(index) {
    const carros = JSON.parse(localStorage.getItem("carros")) || [];
    const carro = carros[index];

    document.getElementById("carIndex").value = index;
    document.getElementById("carName").value = carro.nome;
    document.getElementById("carBrand").value = carro.marca;
    document.getElementById("carPrice").value = carro.preco;
    document.getElementById("carImage").value = carro.imagem;
    document.getElementById("carDescription").value = carro.descricao;
    document.getElementById("carInStock").checked = carro.estoque;
}

function removerCarro(index) {
    let carros = JSON.parse(localStorage.getItem("carros")) || [];
    carros.splice(index, 1);
    localStorage.setItem("carros", JSON.stringify(carros));
    carregarCarros();
}

function alterarEstoque(index) {
    let carros = JSON.parse(localStorage.getItem("carros")) || [];
    carros[index].estoque = !carros[index].estoque;
    localStorage.setItem("carros", JSON.stringify(carros));
    carregarCarros();
}
