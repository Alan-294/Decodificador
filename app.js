function codificar(){
    //Pega o texto á que vai ser codificado e coloca na váriavel "texto"
    texto =  document.getElementById('decodado').value;

    //Coloca todos os caracteres do texto dentro de um array
    let decodificado = texto.split('');

    //Cria uma váriavel do tipo String que por enquanto está vazia
    let texto_codificado = "";

    //Um laço de repetição que vai percorrer cada caractere do texto
    for (let num = 0; num < decodificado.length; num++){

        //Troca todas as vogais por palavras sem sentido
        if(decodificado[num] == "a"){
            texto_codificado = texto_codificado+"ai";
            } else if(decodificado[num] == "e"){
                texto_codificado = texto_codificado+"enter";
                } else if(decodificado[num] == "i"){
                    texto_codificado = texto_codificado+"imes";
                        } else if(decodificado[num] == "o"){
                           texto_codificado = texto_codificado+"ober";
                            } else if(decodificado[num] == "u"){
                                texto_codificado = texto_codificado+"ufat";
                                } else{
                                    texto_codificado = texto_codificado+ decodificado[num];
                                }

    }
    //Devolve para o html o texto mas agora codificado
    document.getElementById('codado').value = texto_codificado;

}

function decodificar(){

    //Pega o texto á que vai ser decodificado e coloca na váriavel "texto"
    texto =  document.getElementById('codado').value;

    //Substitui cada palavra codificada e a substitui pela sua vogal correspondente
    texto_decodificado = texto.replace(/ai/g, 'a');
    texto_decodificado = texto_decodificado.replace(/enter/g, 'e');
    texto_decodificado = texto_decodificado.replace(/imes/g, 'i');
    texto_decodificado = texto_decodificado.replace(/ober/g, 'o');
    texto_decodificado = texto_decodificado.replace(/ufat/g, 'u');

    //Retorna o texto agora decodificado para o html
    document.getElementById('decodado').value = texto_decodificado;
}

//Toda vez que um usuario clicar no botão copiar esquerdo, ele vai ativar a sequencia abaixo para copiar o texto na área esquerda
document.getElementById('Ccodificar').addEventListener("click", async () => {
    try {
        const decodado = document.getElementById("decodado").value;
        await navigator.clipboard.writeText(decodado);
        alert("Texto copiado com sucesso: " + decodado)
    } catch (err) {
        console.error("Erro ao copiar texto: ", err);
        alert("Falha ao copiar texto. Por favor, tente novamente.");
    }
});


//Toda vez que um usuario clicar no botão copiar direito, ele vai ativar a sequencia abaixo para copiar o texto na área direita
document.getElementById('Cdecodificar').addEventListener("click", async () => {
    try {
        const codado = document.getElementById("codado").value;
        await navigator.clipboard.writeText(codado);
        alert("Texto copiado com sucesso: " + codado)
    } catch (err) {
        console.error("Erro ao copiar texto: ", err);
        alert("Falha ao copiar texto. Por favor, tente novamente.");
    }
});