let nomeHeroi = "K4M1K4Z3"
let xpHeroi = "CARARLHO"
let rank = ""



xpHeroi = Number(xpHeroi)
if(isNaN(xpHeroi)){
    console.log("Erro: XP invalido, Digite um número!")
}else {
    console.log(`O Heroi chamado ${nomeHeroi} passui ${xpHeroi} pontos de XP`)

    if(xpHeroi <= 1000){
        rank = "Ferro"
    }else if(xpHeroi < 2000){
        rank = "Bronze"
    }else if(xpHeroi < 5000){
        rank = "Prata"
    }else if(xpHeroi < 7000){
        rank = "Ouro"
    }else if(xpHeroi < 8000){
        rank = "Platina"
    }else if(xpHeroi < 9000){
        rank = "Ascendente"
    }else if(xpHeroi < 10000){
        rank = "Imortal"
    }else{
        rank = "Radiante"
    }
    console.log(`O Heroi ${nomeHeroi} e rank ${rank}`)
}
