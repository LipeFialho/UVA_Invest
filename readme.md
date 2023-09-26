*Inclusão do token da API*
    1. O primeiro passo é criar uma chave para utilizar a API, disponível em: "https://platform.openai.com/account/api-keys"
    2. Acessar o arquivo "./js/ChatGptApi.js"
    3. O token é informado na linha 20 do arquivo!
    4. Colocar a chave gerada dentro da aspas
    5. Segue trecho do código 
        const OPENAI_API_KEY = "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";


*ALTERAR O PROMPT DA PERGUNTA*
    1. Acessar o arquivo "./js/ChatGptApi.js"
    2. A pergunta é setada na Linha 10 desse arquivo!
    3. Segue trecho do código
            txtArea.value = "Analisando que estamos em um cenário de pandemia, qual é a melhor forma de seguir a estratégia de investimento a seguir: \n" + '"' + txtEstrategia.innerText + '"'; 

    4. Dicas: 
        Para quebrar linha dentro da aspas de pergunta, utilize "\n".
        Use o "+" para concatenar texto com a variável "txtEstrategia.innerText", nela está contido o texto determinado na estratégia 