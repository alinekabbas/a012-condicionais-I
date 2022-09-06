//Escreva um código que receba três valores. 
//Uma idade, um booleano que responda se a pessoa terminou ou não o ensino médio, 
//e um booleano que responda se a pessoa está cursando alguma faculdade.

// let idade = Number (prompt('Qual é a sua idade?'))
// let ensinoMedio = confirm("Vc já concluiu o ensino médio?")
// let faculdade = confirm("Vc está cursando faculdade?")

let idade = 38
let ensinoMedio = true
let faculdade = false

//Crie um `if` para cada variável, checando as seguintes afirmacões:
//- Se a pessoa tem 18 anos ou mais;
//- Se a pessoa terminou o ensino médio;
//- Se a pessoa NÃO está cursando alguma faculdade;

//Crie um `if` que imprima que a afirmacão é verdadeira, 
//e um `else` para imprimir que a afirmacão não é verdadeira.

if(idade >= 18){
    console.log('Você é maior de idade!')
}else{
	console.log("Você é menor de idade.")
}

if(ensinoMedio){
    console.log('Parabéns, você concluiu o ensino médio.')
}else{
	console.log("Você não concluiu o ensino médio.")
}

if(faculdade){
    console.log('Você está cursando faculdade.')
}else{
	console.log("Você não esta cursando faculdade.")
}
