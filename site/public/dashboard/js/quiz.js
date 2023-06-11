var listaPerguntas = [
    {
        pergunta: "Quem é o filho da fada madrinha?",
        alternativas: ["Pata Mansa", "Encantado", "João Trombeta", "Fiona"],
        respostaCerta: 1
    },
    {
        pergunta: "O que o burro vira ao tomar a poção Felizes para Sempre ",
        alternativas: ["Lobo", "Alazão", "Sapo", "Gato"],
        respostaCerta: 1
    },
    {
        pergunta: "Aonde o Shrek mora?",
        alternativas: ["Montanha", "Pântano", "Castelo", "Lagoa"],
        respostaCerta: 1
    },
    {
        pergunta: "Com quem Shrek assina um contrato e muda a sua vida?",
        alternativas: ["Farquaad", "João Trombeta", "Rumpelstiltskin", "Humpty Dumpty"],
        respostaCerta: 2
    },
    {
        pergunta: "Qual personagem tem ursos como a sua família?",
        alternativas: ["Dragão", "Merlin", "Cachinhos Dourados", "Jack e Jill"],
        respostaCerta: 2
    },
    {
        pergunta: "Quem é o melhor amigo do Shrek?",
        alternativas: ["Encantado", "Harold", "Burro", "Biscoito"],
        respostaCerta: 2
    },
    {
        pergunta: "Quem é o verdadeiro sucessor ao trono?",
        alternativas: ["Fiona", "Arthur", "Três Porquinhos", "Shrek"],
        respostaCerta: 3
    },
    {
        pergunta: "Qual personagem se parece um ovo?",
        alternativas: ["Lillian", "Pata Mansa", "Lobo Mau", "Humpty Dumpty"],
        respostaCerta: 3
    },
    {
        // pergunta: "Qual desses, apesar de uma infância difícil, sempre se manteve otimista?",
        pergunta: "Pergunta secreta",
        alternativas: ["1", "2", "3", "4"],
        respostaCerta: 0
    },
    {
        //pergunta: "O Gato de Botas luta por sua vida contra quem?"
        pergunta: "Pergunta secreta 2",
        alternativas: ["1", "2", "3", "4"],
        respostaCerta: 0
    },
]
var nomeUsuario = sessionStorage.NOME_USUARIO
var tempo = 60
var acertos = 0
var questao = 1
var aleatorio = 0

setTimeout(() => {
    sortear()
    spanNomeUsuario.innerHTML = `${nomeUsuario}`
    spanQuestao.innerHTML = `${questao}`
    spanAcertos.innerHTML = `${acertos}`
}, "300")

function sortear() {
    if (listaPerguntas.length > 0) {
        aleatorio = parseInt(Math.random() * listaPerguntas.length)
        var alternativaQuestoes = listaPerguntas[aleatorio].alternativas

        spanPergunta.innerHTML = `${listaPerguntas[aleatorio].pergunta}`
        spanBotao1.innerHTML = `${listaPerguntas[aleatorio].alternativas[0]}`
        spanBotao2.innerHTML = `${listaPerguntas[aleatorio].alternativas[1]}`
        spanBotao3.innerHTML = `${listaPerguntas[aleatorio].alternativas[2]}`
        spanBotao4.innerHTML = `${listaPerguntas[aleatorio].alternativas[3]}`
    }
}

function validacao(alternativaSelecionada) {
    var alternativaCorreta = listaPerguntas[aleatorio].respostaCerta

    if (alternativaCorreta == alternativaSelecionada) {
        acertos++
        spanPergunta.innerHTML = `RESPOSTA CORRETA!`
        console.log("Você acertou!")
    } else {
        spanPergunta.innerHTML = `RESPOSTA ERRADA!`
        console.log("lIXOOO!")
    }

    questao++
    spanAcertos.innerHTML = acertos
    listaPerguntas.splice(aleatorio, 1)

    if (questao <= 10) {
        setTimeout(() => {
            sortear()
            spanQuestao.innerHTML = questao
        }, 500)
    } else if (acertos < 10) {
        setTimeout(() => {
            divFim.innerHTML = `
            <div class="classPergunta">
                <span id="spanPergunta">
                <b>VOCÊ TERMINOU O QUIZ!! <br><br>
                Quantidade de acertos: ${acertos} de ${questao - 1}
                </span>
            </div>

            <div id="divBotoes" class="botoes ">
                <div class="linha fim">
                    <button onclick="continuar()" class="botao texto">
                        Continuar
                    </button>
                </div>
            </div>`
        }, 1000)


        var idUsuario = sessionStorage.ID_USUARIO

        fetch("/usuarios/acertosQ", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                // crie um atributo que recebe o valor recuperado aqui
                // Agora vá para o arquivo routes/usuario.js
                acertosMinigame: acertos,
                idServer: idUsuario
            })
        }).then(function (resposta) {

            console.log("resposta: ", resposta);

            if (resposta.ok) {
                Swal.fire({
                    title: 'Error!',
                    text: 'Do you want to continue',
                    imageUrl: 'https://static.wikia.nocookie.net/shrek/images/0/0c/Shrek_closeup.JPG/revision/latest/scale-to-width-down/136?cb=20220601234009',
                    confirmButtonText: 'Cool'
                    // imageUrl: 'https://static.wikia.nocookie.net/shrek/images/0/0c/Shrek_closeup.JPG/revision/latest/scale-to-width-down/136?cb=20220601234009',
                    // imageHeight: 1500,
                    // imageAlt: 'A tall image'
                })
                cardErro.style.display = "block";

                mensagem_erro.innerHTML = "Cadastro realizado com sucesso! Redirecionando para tela de Login...";

            } else {
                throw ("Houve um erro ao tentar realizar o cadastro!");
            }
        }).catch(function (resposta) {
            console.log(`#ERRO: ${resposta}`);
        });
    }
}

function continuar() {
    window.location.href = "estatistica.html"
}