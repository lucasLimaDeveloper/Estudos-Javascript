//Comum-----------------------------------------------------------------------
var sum = (n1, n2) => {
return n1 + n2
}
console.log(sum(20, 30))

//Sem parametros--------------------------------------------------------------
var community = () => {
    return 'CollabCode'
}
console.log(community())

//Com um parâmetro------------------------------------------------------------
var double = (num) => {
    return num * 2
}
console.log(double(20))

//Retornando um JSON----------------------------------------------------------
var pessoa = () => {
    return {
        name: "Lucas",
        idade: 26,
        altura: 1.75
    }
}
console.log(pessoa().name)
