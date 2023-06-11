var medidaModel = require("../models/medidaModel");

function buscarUltimasAcertos(req, res) {

    var idUsuario = req.params.idUsuario;

    console.log(`Recuperando as ultimas medidas`);

    medidaModel.buscarUltimasAcertos(idUsuario).then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar as ultimas medidas.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

function buscarUltimasAcertos2(req, res) {

    var idUsuario = req.params.idUsuario;

    console.log(`Recuperando as ultimas medidas`);

    medidaModel.buscarUltimasAcertos2(idUsuario).then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar as ultimas medidas.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

function media(req, res) {

    var idUsuario = req.params.idUsuario;

    console.log(`Recuperando as ultimas medidas`);

    medidaModel.media(idUsuario).then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar as ultimas medidas.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

function media2(req, res) {

    var idUsuario = req.params.idUsuario;

    console.log(`Recuperando as ultimas medidas`);

    medidaModel.media2(idUsuario).then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar as ultimas medidas.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

module.exports = {
    buscarUltimasAcertos,
    buscarUltimasAcertos2,
    media,
    media2
}