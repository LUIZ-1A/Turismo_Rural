// main.js - Funcionalidades do site

// Lista de destinos de turismo rural
const destinos = [
    {
        nome: "Fazenda Bela Vista",
        descricao: "Experimente a vida no campo com trilhas, cavalgadas e colheita de frutas."
    },
    {
        nome: "Sítio Verdejante",
        descricao: "Aproveite o contato com animais, horta orgânica e aulas de culinária rural."
    },
    {
        nome: "Recanto das Flores",
        descricao: "Relaxe entre jardins, lago e atividades de ecoturismo."
    }
];

// Seleciona o container e adiciona os destinos dinamicamente
const destinosContainer = document.getElementById("destinos-card");

destinos.forEach(destino => {
    const card = document.createElement("div");
    card.classList.add("card-item");
    card.innerHTML = `
        <h3>${destino.nome}</h3>
        <p>${destino.descricao}</p>
    `;
    destinosContainer.appendChild(card);
});

// Formulário de contato
const form = document.getElementById("contato-form");
form.addEventListener("submit", function(e) {
    e.preventDefault();
    alert("Mensagem enviada com sucesso! Entraremos em contato em breve.");
    form.reset();
});