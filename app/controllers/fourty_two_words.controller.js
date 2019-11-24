const fetch = require("node-fetch");
const { to, arrayToObject, TE } = require('../services/util.service');
const CONFIG = require('../configs/config');

const getRandomWord = async function() {
    let err, response, result;

    const endPoint = CONFIG.apihost + '/words/randomWord?api_key=' +  CONFIG.api_key ;
    [err, response] = await to(fetch(endPoint));
    if(err) TE(err);
    [err, result] = await to(response.json());
    if(err) TE(err);

    result = result['word'];
    return result;
};
module.exports.getRandomWord = getRandomWord;


const getDefinitionsOfWord = async function(inputWord) {
    let err, response, result;

    const endPoint = CONFIG.apihost + '/word/'+ inputWord +'/definitions?api_key=' +  CONFIG.api_key ;
    [err, response] = await to(fetch(endPoint));
    if(err) TE(err);

    [err, result] = await to(response.json());
    if(err) TE(err);


    return result;
};
module.exports.getDefinitionsOfWord = getDefinitionsOfWord;


const getSynonymsOfWord = async function(inputWord) {
    let err, response, result;

    const endPoint = CONFIG.apihost + '/word/'+ inputWord +'/relatedWords?api_key=' +  CONFIG.api_key ;
    [err, response] = await to(fetch(endPoint));
    if(err) TE(err);

    [err, result] = await to(response.json());
    if(err) TE(err);


    result = arrayToObject(result, "relationshipType");
    return result;
}

module.exports.getSynonymsOfWord = getSynonymsOfWord;


const getAntonymsOfWord = async function(inputWord) {
    let err, response, result;

    const endPoint = CONFIG.apihost + '/word/'+ inputWord +'/relatedWords?api_key=' +  CONFIG.api_key ;
    [err, response] = await to(fetch(endPoint));
    if(err) TE(err);

    [err, result] = await to(response.json());
    if(err) TE(err);

    result = arrayToObject(result, "relationshipType");
    return result;
};

module.exports.getAntonymsOfWord = getAntonymsOfWord;

const getExamplesOfWord = async function(inputWord) {
    let err, response, result;

    const endPoint = CONFIG.apihost + '/word/'+ inputWord +'/examples?api_key=' +  CONFIG.api_key ;
    [err, response] = await to(fetch(endPoint));
    if(err) TE(err);
    [err, result] = await to(response.json());
    if(err) TE(err);

    result = result["examples"] || [];

    return result;
};
module.exports.getExamplesOfWord = getExamplesOfWord;