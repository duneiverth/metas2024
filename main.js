const botoes = document.querySelectorAll(".botao");
const textos = document.querySelectorAll(".aba-conteudo");

for (let i = 0; i < botoes.length; i++) {
    botoes[i].onclick = function () {

        for (let j = 0; j < botoes.length; j++) {
            botoes[j].classList.remove("ativo");
            textos[j].classList.remove("ativo");
        }

        botoes[i].classList.add("ativo");
        textos[i].classList.add("ativo");
    }
}

//cria as constantes e a lista "tempo" dos objetivos ou metas
const contadores = document.querySelectorAll(".contador");
const tempoObjetivo1 = new Date("2024-02-02T00:00:00");
const tempoObjetivo2 = new Date("2024-12-15T00:00:00");
const tempoObjetivo3 = new Date("2024-11-30T00:00:00");
const tempoObjetivo4 = new Date("2024-06-30T00:00:00");
//constante da lista dos tempos de objetivo
const tempos = [tempoObjetivo1, tempoObjetivo2, tempoObjetivo3, tempoObjetivo4];

function calculaTempo(tempoObjetivo) {
    let tempoAtual = new Date(); //obtem a data atual
    let tempoFinal = tempoObjetivo - tempoAtual; //calcula o tempo final restante
    let segundos = Math.floor(tempoFinal / 1000); //calcula os segundos restantes
    let minutos = Math.floor(segundos / 60);//calcula os minutos restantes
    let horas = Math.floor(minutos / 60);//calcula as horas restantes
    let dias = Math.floor(horas / 24);//calcula os dias restantes

    segundos %= 60;  //obtem o resto da divisão dos segundos
    minutos %= 60;   //obtem o resto da divisão dos minutos
    horas %= 24;    //obtem o resto da divisão das horas

    //a partir daqui fazer o da tela

    return dias + " dias " + horas + " horas " + minutos + " minutos " + segundos + " segundos";
}
   if(tempoFinal > 0){
     return dias + " dias " + minutos + " minutos " + segundos + " segundos ";
   }else{
    return "PRAZO ENCERRADO!!!!!!!!!"
   }
   function atualizaCromometro(){
    //laço de repetição para interagir com todos os objetivos
    for(let i = 0; i< contadores.length; i++){
        contadores[1].textContent = calculaTempo(tempos[1]); //textContent mostra na tela
    }
   }

   function comecaCrocometro(){
    atualizaCromometro(); //chamado da função criaa anteriormente dentro esta função 
    setInterval(atualizaCromometro,1000); //função que faz a contagem do tempo a cada seg. 
   }
   comecaCrometro(); //chama a função que inicia o cronometro