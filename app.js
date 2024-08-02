function codificar(){
   
 
    let texto =  document.getElementById('decodado').value;

    let decodificado = texto.split('');
    let texto_codificado = "";

    for (let num = 0; num < decodificado.length; num++){

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
    document.getElementById('codado').value = texto_codificado;

}

function decodificar(){
   
    let texto =  document.getElementById('codado').value;

    let texto_decodificado = texto.replace(/ai/g, 'a');
    texto_decodificado = texto_decodificado.replace(/enter/g, 'e');
    texto_decodificado = texto_decodificado.replace(/imes/g, 'i');
    texto_decodificado = texto_decodificado.replace(/ober/g, 'o');
    texto_decodificado = texto_decodificado.replace(/ufat/g, 'u');

    document.getElementById('decodado').value = texto_decodificado;
}

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

