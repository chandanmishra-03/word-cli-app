#!/usr/bin/env node
const program = require('commander');
const { getRandomWordView, getDefinitionsOfWordView, getSynonymsOfWordView, getAntonymsOfWordView, getExamplesOfWordView } = require('./views/fourty_two_words.view');
const { play } = require("./views/fourty_two_words_game.view");



program
    .command('definition <word>') // sub-command name
    .alias('defn') // alternative sub-command
    .description('Get definition of a word.') // command description

    // function to execute when command is uses
    .action(function (word) {
        getDefinitionsOfWordView(word);
    });

program
    .command('synonym <word>') // sub-command name
    .alias('syn') // alternative sub-command
    .description('Get synonyms of a word.') // command description

    // function to execute when command is uses
    .action(function (word) {
        getSynonymsOfWordView(word);
    });

program
    .command('antonym <word>') // sub-command name
    .alias('ant') // alternative sub-command
    .description('Get antonyms of a word.') // command description

    // function to execute when command is uses
    .action(function (word) {
        getAntonymsOfWordView(word);
    });

program
    .command('example <word>') // sub-command name
    .alias('ex') // alternative sub-command is
    .description('Get examples of a word.') // command description

    // function to execute when command is uses
    .action(function (word) {
        getExamplesOfWordView(word);
    });



