function IniciaChat(){
    let btnIniciaChat = document.getElementById('btnIniciaChat');
    let divConsultaChat = document.getElementById('consulta-chat');
    let txtEstrategia = document.getElementById('txtEstrategia');
    let txtArea = document.getElementById('txt-area');

    btnIniciaChat.style.display="none";
    divConsultaChat.style.display="flex";

    txtArea.value = 'Tendo em vista o contexto atual do mundo:\n "- Guerra Russia x Ucrania (2022- dias atuais); \n - Aumento da dívida pública americana, devido à pademia (2020 -2022); \n - Taxa de juros americana  em 5,25% (2023); \n - Taxa média de juros america nos ultimos 10 anos em 4,27%; \n - Inflação brasil acumulado no ano (2023): 3,23%; \n - taxa média de inflação ultimos 10 anos (2012 - 2013): 7,7%; \n - rentabilidade IBOV 2023: 11,12%; \n - rentabilidade IBOV ultimos 10 anos (2012-2013): 90%;" \n\n  Faça uma sugestão de melhoria na alocação dos recursos no mesmo formato percentual anterior e indicando como "valor disponível em caixa", caso o somatório total seja inferior a 100% da estratégia de investimentos a seguir: \n' + '"' + txtEstrategia.innerText + '"'; 
    
}



// Receber o SELECTOR do formulário
const divConsultaChat = document.getElementById('consulta-chat');

// Chave da API do OPENAI
const OPENAI_API_KEY = "";//INCLUIR O TOKEN DENTRO DA ASPAS AO LADO

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
        document.getElementById('pergunta').innerHTML = "<u>Pergunta</u>: " + pergunta;
        
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
                document.getElementById('resposta').innerHTML = "<u>Resposta</u>:  " + dados.choices[0].text;
            })
            // Retorna catch quando gerar erro
            .catch(() => {
                // Enviar o texto da resposta para a página HTML
                document.getElementById('resposta').innerHTML = "<u>Sem resposta</u>";
            });

        // Substituir o texto do botão para "Enviar"
        document.getElementById('btnSendChat').value = "Enviar";
        document.getElementById('txt-area').value="";
    });
}
