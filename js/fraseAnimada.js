const btn_Animada = document.getElementById("mostrarFrase");
btn_Animada.addEventListener("click", obterFraseAnimada);

function obterFraseAnimada() {
    var r_text = new Array();

    r_text[1] = "Não esqueça que você tem o direito de fazer escolhas todos os dias. Escolha sempre ser melhor que ontem!";
    r_text[2] = "Traga o que é melhor de você, alinhe seus objetivos e dê sentido e propósito ao que você faz!";
    r_text[3] = "A maneira como você decide enxengar seu dia a dia será decisiva na maneira como você enfrentará seus desafios!";
    r_text[4] = "Todos somos líderes. Comece liderando você e suas próprias ações.";
    r_text[5] = "Não se conforme com o estado atual das coisas. Evolua através do questionamento: Comece questionando a si próprio.";
    r_text[6] = "Tenha orgulho do caminho que você percorreu até aqui. Tenha orgulho de você, confie em você!";

    var fraseN = Math.floor(7 * Math.random());

    document.getElementById("frase_gerada").innerHTML = r_text[fraseN];
}