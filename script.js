document.addEventListener('DOMContentLoaded', () => {
    const personagemList = document.getElementById('lista_personagens');
    const addPersonagemForm = document.getElementById('addPersonagem');

    let personagens = JSON.parse(localStorage.getItem('personagens')) || [];

    const displayPersonagens = () => {
        personagemList.innerHTML = '';
        personagens.forEach((personagem, index) => {
            const personagemElement = document.createElement('div');
            personagemElement.classList.add('personagem');

            personagemElement.innerHTML = `
            <img src="${personagem.url}" alt="protagonista">
            <h3>${personagem.nome}</h3>
            <p><strong>Ator:</strong> ${personagem.atores}</p>
            <p><strong>Filme:</strong> ${personagem.filme}</p>
            <p><strong>Habilidades:</strong> ${personagem.habilidades}</p>
            <p><strong>Descrição:</strong> ${personagem.descricao}</p>
            <button onclick="deletePersonagem(${index})">Excluir</button>`;

            personagemList.appendChild(personagemElement);
        });
    };

    const addPersonagem = (event) => {
        event.preventDefault();

        const newPersonagem = {
            nome: document.getElementById('nome').value,
            filme: document.getElementById('filme').value,
            atores: document.getElementById('atores').value,
            descricao: document.getElementById('descricao').value,
            habilidades: document.getElementById('habilidades').value,
            url: document.getElementById('url').value,
        };

        personagens.push(newPersonagem);
        localStorage.setItem('personagens', JSON.stringify(personagens));
        addPersonagemForm.reset();
        displayPersonagens();
    };

    window.deletePersonagem = (index) => {
        personagens.splice(index, 1);
        localStorage.setItem('personagens', JSON.stringify(personagens));
        displayPersonagens();
    };

    addPersonagemForm.addEventListener('submit', addPersonagem);
    displayPersonagens();
});



function ocultarpersonagem() {

    document.getElementById('formulario').classList.toggle("ocultar")

}