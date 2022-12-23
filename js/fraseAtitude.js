const btn_atitude = document.getElementById("mostrarFrase");
btn_atitude.addEventListener("click", obterFraseAtitude);

function obterFraseAtitude() {
    var r_text = new Array();

    r_text[1] = "Nem todas as tempestades vêm para atrapalhar a sua vida. Algumas vêm para limpar seu caminho.";
    r_text[2] = "Não se desespere quando a caminhada estiver difícil, é sinal de que você está no caminho certo.";
    r_text[3] = "Seus sonhos não precisam de plateia, eles só precisam de você!";
    r_text[4] = "No meio da dificuldade encontra-se a oportunidade.";
    r_text[5] = "Lute. Acredite. Conquiste. Perca. Deseje. Espere. Alcance. Invada. Caia. Seja tudo o quiser ser, mas, acima de tudo, seja você sempre.";
    r_text[6] = "Eu faço da dificuldade a minha motivação. A volta por cima vem na continuação.";
    r_text[7] = "Pedras no caminho? Eu guardo todas. Um dia vou construir um castelo.";
    r_text[8] = "O sucesso é ir de fracasso em fracasso sem perder o entusiasmo.";
    r_text[9] = "Não se limite. Muitas pessoas se limitam ao que eles acham que podem fazer. Você pode ir tão longe quanto sua mente permite. O que você acredita, lembre-se, você pode alcançar.";
    r_text[10] = "Não deixe que as pessoas te façam desistir daquilo que você mais quer na vida. Acredite. Lute. Conquiste. E acima de tudo, seja feliz!";

    var fraseN = Math.floor(11 * Math.random());

    document.getElementById("frase_gerada").innerHTML = r_text[fraseN];
}