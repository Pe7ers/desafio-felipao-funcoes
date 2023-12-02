let saldoDeVitoria = subtracao(60,30)


function subtracao(vitorias, derrotas){
    return vitorias - derrotas   
}
if (saldoDeVitoria < 11){
    nivel = "Ferro"
}else if (saldoDeVitoria > 10 && saldoDeVitoria < 21) {
    nivel = "Bronze"
}else if (saldoDeVitoria > 20 && saldoDeVitoria < 51) {
    nivel = "Prata"
}else if (saldoDeVitoria > 50 && saldoDeVitoria < 81) {
    nivel = "Ouro"
}else if (saldoDeVitoria > 80 && saldoDeVitoria < 91) {
    nivel = "Diamante"
}else if (saldoDeVitoria > 90 && saldoDeVitoria < 101) {
    nivel = "Lendário"
}else {
    nivel = "Imortal"
}


console.log("O Herói tem de saldo de: " + saldoDeVitoria + " está no nível de: " + nivel);