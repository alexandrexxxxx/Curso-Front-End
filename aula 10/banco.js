const numeroConta = 1
let titular = "Alexandre"
let saldo = 1000
let contaAtiva = false
let statusConta 

function verExtrato() { if(contaAtiva){
    statusConta = "Ativa"
   } else {
       statusConta ="Bloqueado"
   }
   
   console.log(" ======= BANDO INOVABANK =======")
   console.log(`conta: ${numeroConta}`)
   console.log(`Titular: ${titular}`)
   console.log(`Saldo: R$ ${saldo.toFixed(2)}`)
   console.log(`Status: ${statusConta}`)
}


function depositar(valor){
    
    if(valor > 0){
        saldo = saldo + valor
        console.log(`\nDepósito de R$ ${valor.
        toFixed(2)} realizado com sucesso!.`)
        console.log(`Novo saldo: R$ ${saldo.
        toFixed(2)}`)
    } else {
        console.log("\nValor de depósito inválido. O valor deve ser maior que zero.")
    }
}


function sacar(valor) {
    if(valor > 0 && valor <= saldo){
        saldo -= valor
        console.log(`\nSaque de R$ ${valor.toFixed(2)} relizado com sucesso!
        \nNovo saldo: R$ ${saldo.toFixed(2)}`)
    } else { 
        console.log("\nValor de saque inválido. o valor deve ser maior que zero e menor ou igual ao saldo.")

    } 
}


verExtrato()
depositar(200)
sacar(300)
