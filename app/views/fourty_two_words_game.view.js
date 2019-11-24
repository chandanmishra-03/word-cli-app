const { to } = require('../services/util.service');
const { prompt } = require('inquirer');
const _ = require('lodash');
const { getRandomWord, getDefinitionsOfWord, getSynonymsOfWord, getAntonymsOfWord, getExamplesOfWord } = require('../controllers/fourty_two_words.controller');
const { shuffle } = require('strility');

const play = async function() {
    let err,  word, synonyms, definations, antonyms;
    [err, word] = await to(getRandomWord());
    // console.log(word);
    [err, synonyms] = await to(getSynonymsOfWord(word));
    if(synonyms["synonym"]){
        synonyms = synonyms["synonym"]["words"];
    }
    else{synonyms = []};

    [err, antonyms] = await  to(getAntonymsOfWord(word));
    if(antonyms["antonym"]){
        antonyms = antonyms["antonym"]["words"];
    }
    else{antonyms = []};
    [err, definations] = await to(getDefinitionsOfWord(word));

    console.log("\nWelcome to the word guessing game.\n".bgGrey.bold.red);

    console.log("\nHere given a word's definition and synonym/antonym, you need to guess the correct word.\n".italic);


    console.log("\nDefination : ".bold+ _.sample(definations)["text"])
    if (antonyms.length > 0){
        console.log("Antonym: ".bold+ _.sample(antonyms));
    }else{
        if(synonyms.length >0){
            console.log("Synonym: ".bold+ _.sample(synonyms));
        };
    };


    let initial_answers = await prompt([{type: 'input', name:'input_answer', message: '\nEnter your answer: '}]);
    var quit = false;
    while (!quit){
        if(initial_answers["input_answer"] == word || synonyms.includes(initial_answers["input_answer"])){
            console.log("\nCongratulations!!! Your answer is correct.".bold.green);
            quit = true;
        }
        else{
            console.log("\nOpps!! You did it wrong.".bold.red);
            let choice_answers = await prompt([{type: 'rawlist', name:'input_choice', message: '\nSelect any one of these: ', choices: ["Try again", "Hint", "Quit"]}]);
            let choice = choice_answers['input_choice'];
            console.log(choice);
            if (choice == "Try again") {
                let next_answers = await prompt([
                    {type: 'input', name:'input_answer', message: '\nEnter your answer: '}
                ]);

                    initial_answers["input_answer"] = next_answers["input_answer"];


            }else if(choice == "Hint"){
                let random_choice = _.sample([0,1,2]);
                if(random_choice == 0){
                    console.log("\nJumbled word: ".bold+ String(shuffle(word)).yellow);

                }
                else if(random_choice == 1){
                    console.log("\nDefinition : ".bold+ _.sample(definations)["text"].yellow);
                }
                else{
                    if (antonyms.length > 0){
                        console.log("\nAntonym: "+ _.sample(antonyms).yellow);
                    }else{
                        if(synonyms.length >0){
                            console.log("\nSynonym: "+ _.sample(synonyms).yellow);
                        };
                    };
                };

                let next_answers = await prompt([
                    {type: 'input', name:'input_answer', message: '\nEnter your answer: '}
                ]);

                initial_answers["input_answer"] = next_answers["input_answer"];
            }
            else if(choice == "Quit"){
                console.log("Right answer is: "+word.bold)
                console.log("Thank you for playing.".bold.green);
                quit =true;
            };

        };
    };



};
module.exports.play = play;
