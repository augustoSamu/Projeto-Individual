var listaImagens = [
    {
        imagem: "<img src='../assets/pshrek.svg'>",
        nome: "shrek"
    },
    {
        imagem: "<img src='../assets/pfiona.svg'>",
        nome: "fiona"
    },
    {
        imagem: "<img src='../assets/pburro.svg'>",
        nome: "burro"
    },
    {
        imagem: "<img src='../assets/pdragao.svg'>",
        nome: "dragao"
    },
    {
        imagem: "<img src='../assets/pharold.svg'>",
        nome: "harold"
    },
    {
        imagem: "<img src='../assets/plillian.svg'>",
        nome: "lillian"
    },
    {
        imagem: "<img src='../assets/pmerlin.svg'>",
        nome: "merlin"
    },
    {
        imagem: "<img src='../assets/parthur.svg'>",
        nome: "arthur"
    },
    {
        imagem: "<img src='../assets/pFarquaad.svg'>",
        nome: "farquaad"
    },
    {
        imagem: "<img src='../assets/pencantado.svg'>",
        nome: "encantado"
    },
    {
        imagem: "<img src='../assets/pfada.svg'>",
        nome: "fada madrinha"
    },
    {
        imagem: "<img src='../assets/prumpelstiltskin.svg'>",
        nome: "rumpelstiltskin"
    },
    {
        imagem: "<img src='../assets/plobomau.svg'>",
        nome: "lobo mau"
    },
    {
        imagem: "<img src='../assets/ppinoquio.svg'>",
        nome: "pinoquio"
    },
    {
        imagem: "<img src='../assets/pbiscoito.svg'>",
        nome: "biscoito"
    },
    {
        imagem: "<img src='../assets/pporquinhos.svg'>",
        nome: "tres porquinhos"
    },
    {
        imagem: "<img src='../assets/pgato.svg'>",
        nome: "gato de botas"
    },
    {
        imagem: "<img src='../assets/ppata.svg'>",
        nome: "pata mansa"
    },
    {
        imagem: "<img src='../assets/pperrito.svg'>",
        nome: "perrito"
    },
    {
        imagem: "<img src='../assets/pcachinhos.svg'>",
        nome: "cachinhos dourados"
    },
    {
        imagem: "<img src='../assets/phumpty.svg'>",
        nome: "humpty dumpty"
    },
    {
        imagem: "<img src='../assets/pjj.svg'>",
        nome: "jack e jill"
    },
    {
        imagem: "<img src='../assets/pmorte.svg'>",
        nome: "morte"
    },
    {
        imagem: "<img src='../assets/ptrombeta.svg'>",
        nome: "joao trombeta"
    },
]

var nomeUsuario = sessionStorage.NOME_USUARIO
var tempo = 60
var acertos = 0
var restantes = listaImagens.length
var aleatorio = 0

setTimeout(() => {
    outro()
    spanNomeUsuario.innerHTML = `${nomeUsuario}`
    spanAcertos.innerHTML = `${acertos}`
    spanRestantes.innerHTML = `${restantes}`
}, "500")

var relogio = setInterval(() => {
    if (tempo == 0) {
        listaImagens = []
        divInfo.innerHTML = ``
        divJogo.innerHTML = `
                <b>ACABOU O TEMPO!! <br><br>
                Quantidade de acertos: ${acertos}<br>
                Tempo percorrido: ${60 - tempo}s`
        divBotoes.innerHTML = `
                <button onclick="continuar()" class="botao jogo">
                 Continuar
                </button>`


        var idUsuario = sessionStorage.ID_USUARIO

        fetch("/usuarios/acertosM", {
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
                    // title: 'Error!',
                    // text: 'Do you want to continue',
                    // imageUrl: 'https://static.wikia.nocookie.net/shrek/images/0/0c/Shrek_closeup.JPG/revision/latest/scale-to-width-down/136?cb=20220601234009',
                    // confirmButtonText: 'Cool'
                    imageUrl: 'https://static.wikia.nocookie.net/shrek/images/0/0c/Shrek_closeup.JPG/revision/latest/scale-to-width-down/136?cb=20220601234009',
                    imageHeight: 1500,
                    imageAlt: 'A tall image'
                })
                cardErro.style.display = "block";

                mensagem_erro.innerHTML = "Cadastro realizado com sucesso! Redirecionando para tela de Login...";

            } else {
                throw ("Houve um erro ao tentar realizar o cadastro!");
            }
        }).catch(function (resposta) {
            console.log(`#ERRO: ${resposta}`);
        });



        clearInterval(relogio)
    } else {
        tempo--
        spanTempo.innerHTML = `${tempo}`
    }
}, 1000);


function outro() {
    if (listaImagens.length > 0) {
        aleatorio = parseInt(Math.random() * listaImagens.length)

        divImagem.innerHTML = `${listaImagens[aleatorio].imagem}`
        divResposta.innerHTML = ``;
        inputNome.value = '';
    }
}

function verificar() {
    var nome = listaImagens[aleatorio].nome
    var iptNome = inputNome.value.toLowerCase()
    var input = document.getElementById("inputNome");


    if (nome == iptNome) {
        input.style.backgroundColor = "#04A777";
        listaImagens.splice(aleatorio, 1)

        setTimeout(() => {
            input.style.backgroundColor = "";
            outro()
            divResposta.innerHTML = ``;
        }, "1000")
        acertos++
        restantes--
        spanAcertos.innerHTML = `${acertos}`
        spanRestantes.innerHTML = `${restantes}`

        if (restantes == 0) {
            spanTempo.innerHTML = `${tempo}`
            clearInterval(relogio)
            divInfo.innerHTML = ``
            divJogo.innerHTML = `
                <b>VOCÊ ACERTOU TODOS OS PERSONAGENS!! <br><br>
                Quantidade de acertos: ${acertos}<br>
                Tempo percorrido: ${60 - tempo}s`
            divBotoes.innerHTML = `
                <button onclick="continuar()" class="botao jogo">
                 Continuar
                </button>`



            fetch("/usuarios/acertosM", {
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
                        // title: 'Error!',
                        // text: 'Do you want to continue',
                        // imageUrl: 'https://static.wikia.nocookie.net/shrek/images/0/0c/Shrek_closeup.JPG/revision/latest/scale-to-width-down/136?cb=20220601234009',
                        // confirmButtonText: 'Cool'
                        imageUrl: 'https://static.wikia.nocookie.net/shrek/images/0/0c/Shrek_closeup.JPG/revision/latest/scale-to-width-down/136?cb=20220601234009',
                        imageHeight: 1500,
                        imageAlt: 'A tall image'
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

    } else {
        input.style.backgroundColor = "#D90368";
        setTimeout(() => {
            input.style.backgroundColor = "";
            divResposta.innerHTML = ``;
        }, "1000")
    }
}

function continuar() {
    window.location.href = "estatistica.html"
}