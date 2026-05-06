const listaCompras = ["Tomate", "Cebola", "Alface"]

const misturado = ["Tomate", 8, true]
//listaCompras[0] = "Batata" //substitui o item na posição 0 da lista por "Batata"
console.log(listaCompras)
console.log(listaCompras[0])
//console.log(listaCompras[3]) //undefined, pois não existe um item na posição 3 da lista
listaCompras.push("Feijão")
//listaCompras[3] = "Feijão" //adiciona um item na posição 3 da lista, se não existir ele cria um item nessa posição, se já existir ele substitui o item existente
listaCompras[0] = "Batata"
listaCompras[4] = "Arroz"

//push adiciona um item no final da lista
console.log(listaCompras)
console.log(listaCompras.length)  

//pop remove o ultimo item da lista e retorna ele

console.log(listaCompras.pop())
console.log(listaCompras)

let pop = listaCompras.pop()

console.log(pop)
console.log(listaCompras)
listaCompras.push("Amora")

for(let i = 0; i < listaCompras.length; i++){
    console.log(`Index ${i}: ${listaCompras[i]}`)
}
   for(let i = listaCompras.length -1; i = 0;i--){
        console.log(`Index ${i}: ${listaCompras[i]}`)
    }

for (const item of listaCompras){
    console.log(item)
}

console.log(listaCompras.indexOf("Cebola")) 

let x = 0

while(x < 10){
    console.log(x)
    x++
}
