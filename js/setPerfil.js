//pega os radio button e inicializa a variável soma
var rb1 = document.getElementById('rb1');
var rb2 = document.getElementById('rb2');
var rb3 = document.getElementById('rb3');
var rb4 = document.getElementById('rb4');
var rb5 = document.getElementById('rb5');
var rb6 = document.getElementById('rb6');
var rb7 = document.getElementById('rb7');
var rb8 = document.getElementById('rb8');
var rb9 = document.getElementById('rb9');
var rb10 = document.getElementById('rb10');
var rb11 = document.getElementById('rb11');
var rb12 = document.getElementById('rb12');
var rb13 = document.getElementById('rb13');
var rb14 = document.getElementById('rb14');
var rb15 = document.getElementById('rb15');
var soma = 0;

//realiza as somas conforme as respostas e valida o formulário
function checkForm() {
    if (rb1.checked) { soma = soma + 1; }
    else if (rb2.checked) { soma = soma + 2; }
    else if (rb3.checked) { soma = soma + 3; }
    else {
        alert("A primeira pergunta não foi respondida");
        soma = 0;
        return false;
    }

    if (rb4.checked) { soma = soma + 1; }
    else if (rb5.checked) { soma = soma + 2; }
    else if (rb6.checked) { soma = soma + 3; }
    else {
        alert("A segunda pergunta não foi respondida.");
        soma = 0;
        return false;
    }

    if (rb7.checked) { soma = soma + 1; }
    else if (rb8.checked) { soma = soma + 2; }
    else if (rb9.checked) { soma = soma + 3; }
    else {
        alert("A terceira pergunta não foi respondida.")
        soma = 0;
        return false;
    }

    if (rb10.checked) { soma = soma + 1; }
    else if (rb11.checked) { soma = soma + 2; }
    else if (rb12.checked) { soma = soma + 3; }
    else {
        alert("A quarta pergunta não foi respondida");
        soma = 0;
        return false;
    }

    if (rb13.checked) { soma = soma + 1; }
    else if (rb14.checked) { soma = soma + 2; }
    else if (rb15.checked) { soma = soma + 3; }
    else {
        alert("A quinta pergunta não foi respondida");
        soma = 0;
        return false;
    }

    //redireciona para a página do perfil conforme o valor da soma
    if (soma <= 6) { window.location.href = "Conservador.html"; }
    else if (soma >= 7 && soma <= 9) { window.location.href = "Moderado1.html"; }
    else if (soma >= 10 && soma <= 13) { window.location.href = "Moderado2.html"; }
    else if (soma >= 14) { window.location.href = "Agressivo.html"; }
}

