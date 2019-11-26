# Word CLI App

Creating a command-line dictionary tool using [this](https://fourtytwowords.herokuapp.com/) API. 

In case you want to understand how this FourtyTwoWords API work, please check out [this postman document](https://documenter.getpostman.com/view/4572209/SW7c3T3T) . You can change the environment for testing with sample API key.

 
I have designed a node JS application which performs all mentioned task.

---
##### How to install ?

Clone this repo locally. 

```sh 
git clone <repo_name>
```

```sh
cd word-cli-app && sudo npm install -g ./ && sudo npm link
```

Great. Now you can use this functionality anywhere from your local machine.

**pre requisites: **
You need node JS installed in your local machine and internet connection as it connects to API server.

#### How to interact?

It takes terminal commands to interact. Here I have listed some commands and their use case.

|Name   |Command   |Use case |
|---|---|---|
| Word of the Day Full Dict | ```dict```  |  Display Word Definitions, Word Synonyms, Word Antonyms & Word Examples for a random word. |
| Word Full Dict | ```dict <word>```  |  Display Word Definitions, Word Synonyms, Word Antonyms & Word Examples for a given word. |
| Word Examples | ```dict ex <word>```  |  Display examples of usage of a given word in a sentence.  |
| Word Antonyms | ```dict ant <word>```  |  Display antonyms of a given word. |
| Word Synonyms | ```dict syn <word>```  |  Display synonyms of a given word. |
| Word Definitions | ```dict defn <word>```  |  Display definitions of a given word. |
| Word Game | ```dict play``` | play Game |


####  Folder & File Structure:

```sh

.
|-- app
|   |-- configs (Configuration required for this app. I have separated it to development and production, just to maintain different API access for different stage.)
|   |   |
|   |   |-- config.js
|   |   |-- development.js
|   |   `-- production.js
|   |   
|   |-- controllers (Controllers is responsible for all major and heavy operation. It performs all API calls and also perform error handling.)
|   |   `-- fourty_two_words.controller.js
|   |
|   |-- index.js (Main file in node js. Responsible for APP starting and interacting different function based on different commands and arguments.)
|   |-- services (It contains all those common function which has been used across different files.)
|   |   `-- util.service.js
|   |
|   `-- views (It is responsible for viewing required Items in terminal. )
|       |-- fourty_two_words.view.js
|       `-- fourty_two_words_game.view.js (It helps to do game operation. )
|
|-- package-lock.json
|-- package.json
`-- readme.md


```

#### Libraries:

| Name  | Version | Use case|
|---|---|---|
| await-to-js | ```^2.1.1```  | For Asynchronous use.  |
| colors | ```^1.4.0```  | Coloring outputs.  |
| commander | ```^4.0.1```  | Take commands and Arguments and route to functions. |
| inquirer | ```^7.0.0```  | For taking custom inputs as choices or any other format.  |
| lodash | ```^4.17.15```  | For Arrays and Objects manipulation. |
| node-fetch | ```^2.6.0```  | For API requests.  |
| strility | ```^1.3.1```  | Does String manipulation.  |


#### What & Why?

I have implemented it in a modular way so that we can change it easily in future modification and reuse the functions. Whole application is an asynchronous, which will help to handle multiple uses at a time without performance degrade. It will not wait where doesn't to be which will help for performance boost. I have separated the application to controller and view so tha all heavy operations and logic will be written in controller.


#### Future Improvement

I will make the interface more user friendly. Will use the local caching for not to put request with same data again and again. Maintaining a local cache which will help to play without internet. I will refactor the code to make it proper modular and removing the complex code.
