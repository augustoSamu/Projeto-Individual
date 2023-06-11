var express = require("express");
var router = express.Router();

var medidaController = require("../controllers/medidaController");

router.get("/buscarUltimasAcertos/:idUsuario", function (req, res) {
    medidaController.buscarUltimasAcertos(req, res);
});

router.get("/buscarUltimasAcertos2/:idUsuario", function (req, res) {
    medidaController.buscarUltimasAcertos2(req, res);
});

router.get("/media/:idUsuario", function (req, res) {
    medidaController.media(req, res);
});

router.get("/media2/:idUsuario", function (req, res) {
    medidaController.media2(req, res);
});

module.exports = router;