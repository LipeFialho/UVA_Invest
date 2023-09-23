function IniciaChat(){
    let btnIniciaChat = document.getElementById('btnIniciaChat');
    let divConsultaChat = document.getElementById('consulta-chat');
    let txtEstrategia = document.getElementById('txtEstrategia');
    let txtArea = document.getElementById('txt-area');

    btnIniciaChat.style.display="none";
    divConsultaChat.style.display="flex";

    txtArea.value = "Analisando que estamos em um cenário de pandemia, qual é a melhor forma de seguir a estratégia de investimento a seguir: \n" + '"' + txtEstrategia.innerText + '"'; 
    
}



// Receber o SELECTOR do formulário
const divConsultaChat = document.getElementById('consulta-chat');

// Chave da API do OPENAI
const OPENAI_API_KEY = "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";

// Verificar se tem a chave
if(OPENAI_API_KEY === ""){
    document.getElementById('pergunta').innerHTML = "<span style='color: #f00;'>Necessário colocar a chave na API no arquivo custom.js</span>";
}

// Acessa o IF quando tem o SELETOR na página HTML
if (divConsultaChat) {

    // Aguardar o usuário clicar no botão Enviar
    divConsultaChat.addEventListener("submit", async (e) => {

        // Bloquear o recarregamento da página
        e.preventDefault();

        // Substituir o texto do botão para "Pesquisando..."
        document.getElementById('btnSendChat').value = "Pesquisando...";

        // Receber o valor do campo pergunta
        let pergunta = document.getElementById('txt-area').value;
        //console.log(pergunta);

        // Enviar o texto da pergunta para a página HTML
        document.getElementById('pergunta').innerHTML = pergunta;
        
        // Limpar a resposta
        document.getElementById('resposta').innerHTML = "<span></span>";

        // Requisição para chatgpt
        await fetch("https://api.openai.com/v1/completions", {

            // Método para enviar os dados
            method: "POST",

            // Dados ennviados no cabeçalho da requisição
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                Authorization: "Bearer " + OPENAI_API_KEY,
            },

            // Enviar os dados no corpo da requisição
            body: JSON.stringify({
                model: "text-davinci-003", //Modelo
                prompt: pergunta, // Texto da pergunta
                max_tokens: 2048, // Tamanho da resposta
                temperature: 0.5 // Criatividade na resposta
            }),
        })
            // Acessa o then quando obtiver resposta
            .then((resposta) => resposta.json())
            .then((dados) => {
                // Enviar o texto da resposta para a página HTML
                document.getElementById('resposta').innerHTML = dados.choices[0].text;
            })
            // Retorna catch quando gerar erro
            .catch(() => {
                // Enviar o texto da resposta para a página HTML
                document.getElementById('resposta').innerHTML = "Sem resposta";
            });

        // Substituir o texto do botão para "Enviar"
        document.getElementById('btnSendChat').value = "Enviar";
        document.getElementById('txt-area').value="";
    });
}
