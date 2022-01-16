let idade = 18
let Humano = true
let aniversario = "Dezembro"
let nome = "Anthony"
let sobrenome = "Santos"

if(idade >=18){
    console.log ("Você é maior de idade, boa aventura")
}
else {
    console.log ("Vai jogar uma beyblade criança")
}
if(aniversario == "Janeiro" || aniversario == "Dezembro"){
    console.log ("Teu aniversário é só fim de ano hein!")
}
else{
    console.log ("Triste que ta mais velhinho daqui a pouco")
}

if(nome[0] == "R" || nome[0] == "r"){
    console.log ("Teu nome começa com R de Run")
}
else{
    console.log ("Teu nome não começa com de R de Run :( ")
}

if(sobrenome.length >=6 || sobrenome.substring(0,1) === "E" || sobrenome.substring(0,1) == "E"){
    console.log ("Seu sobrenome contém mais de 6 letras ou se inicia com a letra E")
}
else{
    console.log ("Seu sobrenome não tem mais de 6 letras ou não se inicia com a letra E")
}