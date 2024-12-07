/*

Os operadores de comparação são usados ​​para comparar dois valores e verificar se eles são iguais, diferentes, maiores ou menores. O resultado sempre será verdadeiro (verdadeiro) ou falso (falso) .

== -> Igual // Compara o valor, mais NÃO o tipo
=== -> Igual (strict) TOATALMENTE igual // Compara o Valor e o TIPO

!= -> Diferente // Compara o valor, mais NÃO o tipo
!== -> Diferente (strict) TOATALMENTE diferente // Compara o VALOR e o TIPO

*/

const firstNumber = 30
const secondNumber = 40

if (firstNumber == secondNumber) {
    console.log("Eles são iguais")
} else {
    console.log("Não são iguais")// resulta e não são iguais
}
 // o codigo a cima e igual a o de baixo
//compara so o valor
 console.log(firstNumber == secondNumber) // resulta false

 //compara valor e tipo
 console.log(firstNumber === secondNumber) // resulta false

 
const diferente = 55
const diferente2 = "55"

console.log(diferente === diferente2) // não são iguais porque são de tipos diferentes
 
const iguais = 66
const iguais2 = 66
//compara valor e tipo
console.log(iguais === iguais2) // são iguais porque são de tipos iguais

// comparação diferentes

const valoresDifentes = 55 
const valoresDifentes2 = "55"
// verifica somente o valor não o tipo
console.log(valoresDifentes != valoresDifentes2) // são diferentes porque são de tipos diferentes   

// verifica o valor e o tipo
console.log(valoresDifentes !== valoresDifentes2) // são diferentes porque são de tipos diferentes