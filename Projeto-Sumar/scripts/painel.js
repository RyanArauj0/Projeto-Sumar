document.addEventListener('DOMContentLoaded', () => {
    const addCarForm = document.getElementById('addCarForm');
    const carList = document.getElementById('carList');
    const carNameInput = document.getElementById('carName');
    const carImageInput = document.getElementById('carImage');
    const carDescriptionInput = document.getElementById('carDescription');
    const carInStockInput = document.getElementById('carInStock');

    // Função para atualizar a lista de carros
    function updateCarList() {
        carList.innerHTML = '';
        const cars = JSON.parse(localStorage.getItem('cars')) || [];
        cars.forEach((car, index) => {
            const li = document.createElement('li');
            li.innerHTML = `
                <img src="${car.image}" alt="${car.name}">
                <div>
                    <h3>${car.name}</h3>
                    <p>${car.description}</p>
                    <p><strong>Em estoque:</strong> ${car.inStock ? 'Sim' : 'Não'}</p>
                    <button class="remove-btn" onclick="removeCar(${index})">Remover</button>
                </div>
            `;
            carList.appendChild(li);
        });
    }

    // Função para adicionar um carro
    addCarForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const newCar = {
            name: carNameInput.value,
            image: carImageInput.value,
            description: carDescriptionInput.value,
            inStock: carInStockInput.checked
        };

        const cars = JSON.parse(localStorage.getItem('cars')) || [];
        cars.push(newCar);
        localStorage.setItem('cars', JSON.stringify(cars));

        carNameInput.value = '';
        carImageInput.value = '';
        carDescriptionInput.value = '';
        carInStockInput.checked = false;

        updateCarList();
    });

    // Função para remover um carro
    window.removeCar = function (index) {
        const cars = JSON.parse(localStorage.getItem('cars')) || [];
        cars.splice(index, 1);
        localStorage.setItem('cars', JSON.stringify(cars));
        updateCarList();
    };

    // Carregar lista de carros ao carregar a página
    updateCarList();
});
