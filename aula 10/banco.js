const numeroConta = 1
let titular = "Alexandre"
let saldo = 1000
let contaAtiva = false
let statusConta
const historico = []

function verExtrato() {
    if (contaAtiva) {
        statusConta = "Ativa"
    } else {
        statusConta = "Bloqueado"
    }

    console.log(" ======= BANDO INOVABANK =======")
    console.log(`conta: ${numeroConta}`)
    console.log(`Titular: ${titular}`)
    console.log(`Saldo: R$ ${saldo.toFixed(2)}`)
    console.log(`Status: ${statusConta}`)
}


function depositar(valor) {

    if (valor > 0) {
        saldo = saldo + valor
        historico.push(`Depósito: R$ ${valor}  | Saldo: R$ ${saldo}`)
        console.log(`\nDepósito de R$ ${valor.
            toFixed(2)} realizado com sucesso!.`)
        console.log(`Novo saldo: R$ ${saldo.
            toFixed(2)}`)
    } else {
        console.log("\nValor de depósito inválido. O valor deve ser maior que zero.")
    }
}


function sacar(valor) {
    if (valor > 0 && valor <= saldo) {
        saldo -= valor
        historico.push(`sacar: R$ ${valor}  | Saldo: R$ ${saldo}`)
        console.log(`\nSaque de R$ ${valor.toFixed(2)} relizado com sucesso!
        \nNovo saldo: R$ ${saldo.toFixed(2)}`)
    } else {
        console.log("\nValor de saque inválido. o valor deve ser maior que zero e menor ou igual ao saldo.")

    }
}


depositar(400)
depositar(200)
sacar(1000)
sacar(231)

console.log(historico)

verExtrato()

for (let i = historico.length - 1; i >= 0; i--) {
    console.log(` ${i}: ${historico[i]}`)

}

for (let i = 1; i < 6; i++) {
    const indiceAtual = historico.length - i
    console.log(`${[i]}. ${historico[indiceAtual]}`)
}

function verResumo() {
    let nDepositos, nSaques, qtdTransacoes

    for (let i = 0; i < historico.lenght; i++) {
        if (historico[i].includes("Depósito")) {
            nDepositos++
        } else {
            nSaques++
        }
        qtdTransacoes++
    }
    console.log("\n ====== Resumo das Transações ======")
    console.log(`Depósitos: ${nDepositos}`)
    console.log(`Saques: ${nSaques}`)
    console.log(`Total : ${qtdTransacoes} transações`)
}


function simularTentativasSaque(valor, maxTentativas) {
    let tentativa = 0
    while (tentativa < maxTentativas) {
        if(valor <)
    }
}