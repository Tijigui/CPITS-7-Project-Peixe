const btn_companhia = document.getElementById("mostrarFrase");
btn_companhia.addEventListener("click", obterFraseCompanhia);

function obterFraseCompanhia() {
    var r_text = new Array();

    r_text[1] = "Boa companhia é estar ao lado de quem faz você se sentir bem.";
    r_text[2] = "Com uma boa companhia você se sente em paz.";
    r_text[3] = "Nos somos a nossa melhor companhia.";
    r_text[4] = "Bom lado da vida é estar ao lado de quem nos faz bem.";
    r_text[5] = "Boas energias são boas companhias.";

    var fraseN = Math.floor(6 * Math.random());

    document.getElementById("frase_gerada").innerHTML = r_text[fraseN];
}