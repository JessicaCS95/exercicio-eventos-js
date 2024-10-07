
//criação botão com eventos
function exibir() {
    const nome = document.getElementById("nome").value;
    alert(`O seu nome completo é ${nome}.`);
}

// mudança de cor do botão

const botao = document.getElementById('botaoSalvar');

       
        botao.addEventListener('mouseover', () => {
            botao.style.backgroundColor = '#fff'; 
        });

        // Adiciona um evento para quando o mouse sair do botão (mouseout)
        botao.addEventListener('mouseout', () => {
            botao.style.backgroundColor = '#4CAF50'; // Retorna à cor original (verde)
        });

//Focus

document.getElementById('nome').focus();

