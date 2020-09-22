const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
  constructor(isDirectMode = true) {
    this.directMode = isDirectMode;
  }

  encrypt(phrase, key) {
    let phraseArray = phrase.split(``);
    let keyArray = key.split(``);
    let fullKeyArray = []; // forming key through all string

    let counter = keyArray.length;
    let j = 0;

    for (let i = 0; i < phraseArray.length; i++) {

      if (/[a-zA-Z]/.test(phraseArray[i])) {
        fullKeyArray.push(keyArray[j]);
        j++;
        if (j >= counter) {
          j = 0;
        }
      } else {
        fullKeyArray.push(phraseArray[i]);
      }

    }

    let resultNumberArray = []; // forming numbers of target letters
    for (let i = 0; i < phrase.length; i++) {
      let resultNumber;
      if (/[a-zA-Z]/.test(phraseArray[i])) {
        if (phrase[i].charCodeAt() - 96 === fullKeyArray[i].charCodeAt() - 96) {
          resultNumber = phrase[i].charCodeAt() - 96
        } else if (phrase[i].charCodeAt() - 96 + fullKeyArray[i].charCodeAt() - 96 > 26) {
          resultNumber = phrase[i].charCodeAt() - 96 + fullKeyArray[i].charCodeAt() - 96 - 26 - 1;
        } else {
          resultNumber = phrase[i].charCodeAt() - 96 + fullKeyArray[i].charCodeAt() - 96 - 1;
        }
        resultNumberArray.push(resultNumber);
      } else {
        resultNumberArray.push(phraseArray[i]);
      }

    }
    let resultArray = [];
    for (let i = 0; i < resultNumberArray.length; i++) { // forming target string
      if (typeof resultNumberArray[i] === `number`) {
        resultArray.push(String.fromCharCode(96 + resultNumberArray[i]));
      } else {
        resultArray.push(resultNumberArray[i]);
      }
    }
    return this.directMode ? resultArray.join(``).toUpperCase() : resultArray.reverse().join(``).toUpperCase();
  }

  decrypt(phrase, key) {
    phrase = phrase.toLowerCase();
    let phraseArray = phrase.split(``);
    let keyArray = key.split(``);
    let fullKeyArray = []; // forming key through all string

    let counter = keyArray.length;
    let j = 0;

    for (let i = 0; i < phraseArray.length; i++) {

      if (/[a-zA-Z]/.test(phraseArray[i])) {
        fullKeyArray.push(keyArray[j]);
        j++;
        if (j >= counter) {
          j = 0;
        }
      } else {
        fullKeyArray.push(phraseArray[i]);
      }
    }

    let resultNumberArray = []; // forming numbers of target letters
    for (let i = 0; i < phrase.length; i++) {
      let resultNumber;
      if (/[a-zA-Z]/.test(phraseArray[i])) {

        if (phrase[i].charCodeAt() - 96 === fullKeyArray[i].charCodeAt() - 96) {
          resultNumber = 1;

        } else if ((phrase[i].charCodeAt() - 96) - (fullKeyArray[i].charCodeAt() - 96) < 0) {
          resultNumber = 26 - ((fullKeyArray[i].charCodeAt() - 96) - (phrase[i].charCodeAt() - 96)) + 1;

        } else {
          resultNumber = ((phrase[i].charCodeAt() - 96) - (fullKeyArray[i].charCodeAt() - 96)) +1;
        }
        resultNumberArray.push(resultNumber);
      } else {
        resultNumberArray.push(phraseArray[i]) +1;
      }
    }
    let resultArray = [];
    for (let i = 0; i < resultNumberArray.length; i++) { // forming target string
      if (typeof resultNumberArray[i] === `number`) {
        resultArray.push(String.fromCharCode(96 + resultNumberArray[i]));
      } else {
        resultArray.push(resultNumberArray[i]);
      }
    }
    return this.directMode ? resultArray.join(``).toUpperCase() : resultArray.reverse().join(``).toUpperCase();
  }
}

module.exports = VigenereCipheringMachine;