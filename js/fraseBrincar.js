const btn_brincar = document.getElementById("mostrarFrase");
btn_brincar.addEventListener("click", obterFraseBrincar);

function obterFraseBrincar() {
    var r_text = new Array();

    r_text[1] = "Thiago";
    r_text[2] = "Natalia";
    r_text[3] = "Iael";
    r_text[4] = "Jais";
    r_text[5] = "Nina";
    
    var fraseN = Math.floor(6 * Math.random());
    // document.write(r_text[fraseN]);

    document.getElementById("frase_gerada").innerHTML = r_text[fraseN];
}