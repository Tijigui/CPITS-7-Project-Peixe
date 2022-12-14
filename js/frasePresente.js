const btn_presente = document.getElementById("mostrarFrase");
btn_presente.addEventListener("click", obterFrasePresente);

function obterFrasePresente() {
    var r_text = new Array();

    r_text[1] = "1";
    r_text[2] = "2";
    r_text[3] = "3";
    r_text[4] = "4";
    r_text[5] = "5";

    var fraseN = Math.floor(6 * Math.random());
 
    document.getElementById("frase_gerada").innerHTML = r_text[fraseN];
}