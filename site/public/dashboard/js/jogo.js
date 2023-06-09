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
        nome: "rei harold"
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
    }
]

var tempo = 60
var acertos = 0
var restantes = listaImagens.length
var aleatorio = 0

setTimeout(() => {
    outro()
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