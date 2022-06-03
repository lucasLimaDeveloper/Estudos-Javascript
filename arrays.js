var teste = [12, 20, 45];//Meu array
console.log(teste)

//forEach -------------------------------------------------------------
var upper = []
teste.forEach((value, index, array) => {
    upper.push(value.toUpperCase()) 
    console.log(index, value, array)
})
console.log(upper)

//map -----------------------------------------------------------------
var retornoMap = teste.map((value, index) => {
    console.log(value, index)
    return value.toLowerCase()
});
console.log(retornoMap)

//Adicionando no final -------------------------------------------------
teste.push(26, 30)
console.log(teste)

//Comprimento ----------------------------------------------------------
console.log(teste.length)

//Ordenar --------------------------------------------------------------
console.log(teste.sort())

//Me retorna o índice do valor escrito ---------------------------------
console.log(teste.indexOf(26))

//Remove o último valor ------------------------------------------------
teste.pop()

//Remove o primeiro valor ----------------------------------------------
teste.shift()

//Adiciona no ínicio ---------------------------------------------------
teste.unshift(100)

//Separa um array dos itens esolhidos sendo .splice(começo, quantidade) ---
teste.splice(1, 2)

//Copiar um array ---------------------------------------------------------
teste.slice()



