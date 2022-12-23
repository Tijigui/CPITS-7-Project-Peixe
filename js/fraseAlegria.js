const btn_alegria = document.getElementById("mostrarFrase");
btn_alegria.addEventListener("click", obterFraseAlegria);

function obterFraseAlegria() {

    var r_text = new Array();

    r_text[1] = "Não se pode ter um arco-íris sem um pouquinho de chuva. Tenha um bom dia!";
    r_text[2] = "Espalhe coisas boas porque a gente merece e o mundo precisa.";
    r_text[3] = "Que eu seja todo dia como um girassol, de costas para o escuro e de frente pra luz.";
    r_text[4] = "Que eu seja todo dia como um girassol, de costas para o escuro e de frente pra luz.";
    r_text[5] = "Hoje você tem duas opções: ser feliz ou ser mais feliz ainda!";
    r_text[6] = "Para hoje: sorrisos, uma mente tranquila e um coração cheio de paz!";

    var fraseN = Math.floor(8 * Math.random());

    document.getElementById("frase_gerada").innerHTML = r_text[fraseN];
}