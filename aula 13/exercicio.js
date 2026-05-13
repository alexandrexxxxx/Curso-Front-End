// --- DECLARAÇÃO DE VARIÁVEIS (Onde guardamos as informações) ---

// 'const' define uma constante: o valor nunca muda.
const numeroConta = 1;

// 'let' define variáveis que podem ser alteradas (como o nome do titular e o saldo).
let titular = "Alexandre"; 
let saldo = 1000; 

// Booleano para saber se a conta está ativa ou bloqueada.
let contaAtiva = true; 

// Array para guardar o texto das transações.
const historico = []; 


// --- SELEÇÃO DE ELEMENTOS (Conectando o código à tela do site) ---

const elSaldo = document.querySelector('#saldo');
const elMensagem = document.querySelector("#mensagem");
const btnDepositar = document.querySelector("#btn-depositar");
const btnDSacar = document.querySelector("#btn-sacar");
const campValor = document.querySelector('#campo-valor'); 
const btnBloquear = document.querySelector("#btn-bloquear");
const elTotalDepositos = document.querySelector("#total-depositos");
const elTotalSaques = document.querySelector("#total-saques");
const elTotaTransacoes = document.querySelector("#total-transacoes");
const elListaHistorico = document.querySelector("#lista-historico");
const btnLimpar = document.querySelector("#btn-limpar"); 

// --- NOVOS ELEMENTOS PARA O TITULAR ---
// Buscamos o input onde você digita o nome e o botão que confirma a troca.
const campTitular = document.querySelector('#campo-titular');
const btnAtualizarTitular = document.querySelector('#btn-atualizar-titular');
// Buscamos o elemento que mostra o nome atual no card do banco.
const elExibicaoTitular = document.querySelector('#exibicao-titular');


// --- ESCUTADORES DE EVENTOS (O código reagindo aos seus comandos) ---

// Novo escutador: Quando clicar no botão de atualizar, o nome muda.
btnAtualizarTitular.addEventListener('click', () => {
    // Pegamos o que foi escrito na caixa de texto.
    const novoNome = campTitular.value;

    // Verificamos se o usuário não deixou o campo vazio antes de mudar.
    if (novoNome.trim() !== "") {
        titular = novoNome; // Atualiza a variável na memória.
        elExibicaoTitular.textContent = titular; // Atualiza o nome visualmente no card.
        
        // Limpa o campo de texto e mostra mensagem de sucesso.
        campTitular.value = "";
        exibirMensagem(`Titular atualizado para: ${novoNome}`, "sucesso");
    } else {
        exibirMensagem("Por favor, digite um nome válido.", "erro");
    }
});

btnDepositar.addEventListener('click', () => {
    const valor = Number(campValor.value);
    depositar(valor); 
});

btnDSacar.addEventListener('click', () => {
    const valor = Number(campValor.value);
    sacar(valor);
});

btnBloquear.addEventListener('click', bloquearConta);
btnLimpar.addEventListener('click', limparHistorico);


// --- FUNÇÕES DE LÓGICA DO BANCO (As máquinas que processam tudo) ---

function limparHistorico() {
    historico.length = 0; 
    elListaHistorico.innerHTML = ""; 

    // Recriamos o aviso de lista vazia para o design não ficar quebrado.
    const mensagemVazia = document.createElement('p');
    mensagemVazia.textContent = "Nenhuma transação ainda.";
    mensagemVazia.className = "historico-vazio";
    elListaHistorico.appendChild(mensagemVazia);

    exibirMensagem("Histórico limpo com sucesso!", "sucesso");
    verResumo();
}

function bloquearConta() {
    if (contaAtiva) {
        contaAtiva = false; 
        exibirMensagem('\nConta bloqueada com sucesso!');
        btnBloquear.textContent = '🔓Desbloquear Conta';
    } else {
        contaAtiva = true;
        exibirMensagem('\nConta desbloqueada com sucesso!');
        btnBloquear.textContent = '🔒Bloquear Conta';
    }
}

function verExtrato(transacao) {
    historico.push(transacao);

    const elListaVazia = document.querySelector('.historico-vazio');
    if (elListaVazia) elListaVazia.remove();

    const item = document.createElement('li');
    item.textContent = transacao; 
    elListaHistorico.insertBefore(item, elListaHistorico.firstChild);

    while (elListaHistorico.children.length > 5) {
        elListaHistorico.removeChild(elListaHistorico.lastChild);
    }
}

function depositar(valor) {
    if (!contaAtiva) {
        exibirMensagem("\nConta bloqueada. Não é possível realizar depósitos.");
        return; 
    }
    else if (valor > 0) {
        saldo = saldo + valor; 
        verExtrato(`Depósito: R$ ${valor}  | Saldo: R$ ${saldo}`);
        atualizarSaldo();
        exibirMensagem(`Depósito de ${valor} realizado com sucesso!`, 'sucesso');
        verResumo();
    } else {
        exibirMensagem("\nValor de depósito inválido.");
    }
}

function sacar(valor) {
    if (!contaAtiva) {
        exibirMensagem("\nConta bloqueada. Não é possível realizar saques.");
        return;
    }
    else if (valor > 0 && valor <= saldo) {
        saldo -= valor; 
        verExtrato(`Saque: R$ ${valor}  | Saldo: R$ ${saldo}`);
        atualizarSaldo();
        exibirMensagem(`Saque de ${valor} realizado com sucesso!`, 'sucesso');
        verResumo();
    } else {
        exibirMensagem("\nSaldo insuficiente ou valor inválido.");
    }
}

function exibirMensagem(texto, tipo) {
    elMensagem.textContent = texto;
    elMensagem.style.display = 'block'; 
    elMensagem.className = tipo === 'sucesso' ? 'msg-sucesso' : 'msg-erro';
}

function verResumo() {
    let totalDepositos = 0;
    let totalSaques = 0;
    let totalTransacoes = 0;

    for (const transacao of historico) {
        if (transacao.includes('Depósito')) {
            totalDepositos++; 
        } else {
            totalSaques++;
        }
        totalTransacoes++;
    }

    elTotalDepositos.textContent = totalDepositos;
    elTotalSaques.textContent = totalSaques;
    elTotaTransacoes.textContent = totalTransacoes;
}

function atualizarSaldo() {
    elSaldo.textContent = `R$ ${saldo.toFixed(2)}`;

    // Lógica de cores baseada no valor do saldo.
    if (saldo > 5000) {
        elSaldo.style.color = 'green'; 
    } else if (saldo > 1000 && saldo <= 5000) {
        elSaldo.style.color = 'yellow';
    } else {
        elSaldo.style.color = 'red'; 
    }
}