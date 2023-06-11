var database = require("../database/config");

function buscarUltimasAcertos(idUsuario) {

    instrucaoSql = ''

    if (process.env.AMBIENTE_PROCESSO == "producao") {
        instrucaoSql = `
            select * from jogo1 
            where fkUsuario = ${idUsuario} 
            order by idJogo1 desc limit 4;`;
    } else if (process.env.AMBIENTE_PROCESSO == "desenvolvimento") {
        instrucaoSql = `
            select * from jogo1 
            where fkUsuario = ${idUsuario} 
            order by idJogo1 desc limit 4;`;
    } else {
        console.log("\nO AMBIENTE (produção OU desenvolvimento) NÃO FOI DEFINIDO EM app.js\n");
        return
    }

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarUltimasAcertos2(idUsuario) {

    instrucaoSql = ''

    if (process.env.AMBIENTE_PROCESSO == "producao") {
        instrucaoSql = `
            select * from jogo2
            where fkUsuario = ${idUsuario} 
            order by idJogo1 desc limit 4;`;
    } else if (process.env.AMBIENTE_PROCESSO == "desenvolvimento") {
        instrucaoSql = `
            select * from jogo2 
            where fkUsuario = ${idUsuario} 
            order by idJogo2 desc limit 4;`;
    } else {
        console.log("\nO AMBIENTE (produção OU desenvolvimento) NÃO FOI DEFINIDO EM app.js\n");
        return
    }

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function media(idUsuario) {

    instrucaoSql = ''

    if (process.env.AMBIENTE_PROCESSO == "producao") {
        instrucaoSql = `
            select truncate(avg(acertos),1) as media from jogo1
                where fkUsuario = ${idUsuario} ;`;
    } else if (process.env.AMBIENTE_PROCESSO == "desenvolvimento") {
        instrucaoSql = `
            select truncate(avg(acertos),1) as media from jogo1
                where fkUsuario = ${idUsuario} ;`;
    } else {
        console.log("\nO AMBIENTE (produção OU desenvolvimento) NÃO FOI DEFINIDO EM app.js\n");
        return
    }

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function media2(idUsuario) {

    instrucaoSql = ''

    if (process.env.AMBIENTE_PROCESSO == "producao") {
        instrucaoSql = `
            select truncate(avg(acertos),1) as media from jogo2
                where fkUsuario = ${idUsuario} ;`;
    } else if (process.env.AMBIENTE_PROCESSO == "desenvolvimento") {
        instrucaoSql = `
            select truncate(avg(acertos),1) as media from jogo2
                where fkUsuario = ${idUsuario} ;`;
    } else {
        console.log("\nO AMBIENTE (produção OU desenvolvimento) NÃO FOI DEFINIDO EM app.js\n");
        return
    }

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}


module.exports = {
    buscarUltimasAcertos,
    buscarUltimasAcertos2,
    media,
    media2
}
