const { to } = require('../services/util.service');
const colors = require('colors');
const { getRandomWord, getDefinitionsOfWord, getSynonymsOfWord, getAntonymsOfWord, getExamplesOfWord } = require('../controllers/fourty_two_words.controller');


const getRandomWordView = async function() {
    let err,  result;
    [err, result] = await to(getRandomWord());
    if(err){
        console.log(err);
    };
    return result;
};
module.exports.getRandomWordView = getRandomWordView;



const getDefinitionsOfWordView = async function(inputWord) {
    let err,  result;
    [err, result] = await to(getDefinitionsOfWord(inputWord));

    if(err){
        console.log(colors.red("This word doesn't have any definitions in our dictionary."));
    }
    else if(result.error){
        console.log(colors.red("This word doesn't have any definitions in our dictionary."));
    }
    else{

        let index=1;
        console.log("\nDefinitions:".underline);
        result.forEach(item => {

            console.log('\n%s : %s', colors.bold(index), colors.green(item["text"]));
            index++;
        })};
};
module.exports.getDefinitionsOfWordView = getDefinitionsOfWordView;


const getSynonymsOfWordView = async function(inputWord) {
    let err,  result;
    let index=1;
    [err, result] = await to(getSynonymsOfWord(inputWord));
    if(err){
        console.log(colors.red("This word doesn't have any synonyms in our dictionary."));
    }
    else if(result.error){
        console.log(colors.red("This word doesn't have any synonyms in our dictionary."));
    }
    else{if(result["synonym"]){
        console.log("\nSynonyms:".underline);
        result["synonym"]["words"].forEach(item => {
            console.log('\n%s : %s', colors.bold(index), colors.green(item));
            index++;
        })}
    else {    console.log('\n%s', colors.red("This word doesn't have any synonyms in our dictionary."));
    };};
}

module.exports.getSynonymsOfWordView = getSynonymsOfWordView;


const getAntonymsOfWordView = async function(inputWord) {
    let err,  result;
    [err, result] = await to(getAntonymsOfWord(inputWord));
    if(err){
        console.log(colors.red("This word doesn't have any antonyms in our dictionary."));
    }
    else if(result.error){
        console.log(colors.red("This word doesn't have any antonyms in our dictionary."));
    }
    else{

        let index=1;
        if(result["antonym"]){
            console.log("\nAntonyms:".underline);
            result["antonym"]["words"].forEach(item => {
                console.log('\n%s : %s', colors.bold(index), colors.green(item));
                index++;
            })
        }
        else{
            console.log('\n%s', colors.red("This word doesn't have any antonyms in our dictionary."));
        };};};

module.exports.getAntonymsOfWordView = getAntonymsOfWordView;

const getExamplesOfWordView = async function(inputWord) {
    let err,  result;
    [err, result] = await to(getExamplesOfWord(inputWord));
    if(err){
        console.log(colors.red("This word doesn't have any examples in our dictionary."));
    }
    else if(result.error){
        console.log(colors.red("This word doesn't have any examples in our dictionary."));
    }

    else{
        console.log("\nExamples:".underline);
        let index=1;
        result.forEach(item => {
            console.log('\n%s : %s', colors.bold(index), colors.green(item["text"]));
            index++;
        })
    };};
module.exports.getExamplesOfWordView = getExamplesOfWordView;