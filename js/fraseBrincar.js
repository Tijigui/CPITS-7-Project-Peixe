const btn_brincar = document.getElementById("mostrarFrase");
btn_brincar.addEventListener("click", obterFraseBrincar);

function obterFraseBrincar() {
    var r_text = new Array();

    r_text[1] = "Brincar é deixar a imaginação e criatividade correrem soltas";
    r_text[2] = "Chame a criança que mora em você para brincar com as que vivem com você";
    r_text[3] = "A brincadeira permite que a gente ultrapasse a realidade transformando-a pela imaginação";
    r_text[4] = "Brincar é aprender a viver a vida com alegria";
    r_text[5] = "Nós não paramos de brincar porque envelhecemos, envelhecemos porque deixamos de brincar;";
    
    var fraseN = Math.floor(6 * Math.random());
    // document.write(r_text[fraseN]);

    document.getElementById("frase_gerada").innerHTML = r_text[fraseN];
}