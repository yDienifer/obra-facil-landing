// Acessando o botão
var botao = document.getElementById("btnParaEnvioDoForm");

// Acessando o formulário
var formulário = document.getElementsByName("lead").item(0);

// Acessando os inputs 
var inputs = document.querySelectorAll('form[name="lead"] input');

// sequencia de passos
formulário.onsubmit = function (event) {
    event.preventDefault(); // previne o envio padrão do formulário
    let resposta = confirm("Tem certeza que está tudo certo?");

    if (resposta) {
        alert("O formulário foi enviado com sucesso!");
        formulário.submit(); // envia o formulário
        location.reload(); // atualiza a página
    } else {
        alert("Por favor, revise as informações");
        document.getElementById("mensagem").textContent = "Por favor, revise os dados.";
        for (var i = 0; i < inputs.length; i++) {
            inputs[i].style.borderColor = "red";
        }
    }
    return resposta;
}