//Operador AND

let idade = 18;
let carteira = true;

if (idade >= 18 && carteira === true){
    console.log("Pode entrar no evento");
}else{
    console.log("Não pode entrar");
}

//Operador OR

let estaChovendo = false;
let temGuardaChuva = true;


if (estaChovendo || temGuardaChuva){
    console.log("Você pode sair de casa");
}else{
    console.log("Melhor ficar em casa");
}

//Operador NOT

let lampadaAcesa = false;

if(!lampadaAcesa){
    console.log("A lâmpada está apagada")
}

//loops
//decrementando

let contador =1;

while(contador<=5){
    console.log(contador)

    contador++
}

for(let i =0; i<=10; i++){

    console.log(i)

}
console.log("FIM!");