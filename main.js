// main.js

// Lista de destinos
const destinos = [
    {
        nome: "Fazenda Bela Vista",
        descricao: "Experimente a vida no campo com trilhas, cavalgadas e colheita de frutas.",
        imagem: "https://images.unsplash.com/photo-1556761175-4b46a572b786"
    },
    {
        nome: "Sítio Verdejante",
        descricao: "Contato com animais, horta orgânica e aulas de culinária rural.",
        imagem: "https://images.unsplash.com/photo-1526772662000-3f88f10405ff"
    },
    {
        nome: "Recanto das Flores",
        descricao: "Relaxe entre jardins, lago e atividades de ecoturismo.",
        imagem: "https://images.unsplash.com/photo-1501004318641-b39e6451bec6"
    }
];

const destinosContainer = document.getElementById("destinos-card");

destinos.forEach(destino => {
    const card = document.createElement("div");
    card.classList.add("card-item");
    card.innerHTML = `
        <img src="${destino.imagem}" alt="${destino.nome}">
        <h3>${destino.nome}</h3>
        <p>${destino.descricao}</p>
    `;
    destinosContainer.appendChild(card);
});

// Formulário
const form = document.getElementById("contato-form");
form.addEventListener("submit", function(e) {
    e.preventDefault();
    alert("Mensagem enviada com sucesso!");
    form.reset();
});