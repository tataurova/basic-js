const ALPHABET_LENGTH = 26;
const ASCII_DELTA = 96;

class VigenereCipheringMachine {
  constructor(isDirectMode = true) {
    this.directMode = isDirectMode;
  }

  encrypt(phrase, key) {
    phrase = phrase.toLowerCase();
    this._phraseArray = phrase.split(``);

    const fullKeyArray = this._formKeyArray(this._phraseArray, key);

    let resultNumberArray = []; // forming numbers of target letters
    for (let i = 0; i < phrase.length; i++) {
      let resultNumber;
      const letterNumber = phrase[i].charCodeAt() - ASCII_DELTA;
      const keyNumber = fullKeyArray[i].charCodeAt() - ASCII_DELTA;

      if (/[a-zA-Z]/.test(this._phraseArray[i])) { // add letter number to result array
        if (letterNumber + keyNumber > ALPHABET_LENGTH) {
          resultNumber = (letterNumber + keyNumber) - ALPHABET_LENGTH - 1;
        } else {
          resultNumber = letterNumber + keyNumber - 1;
        }
        resultNumberArray.push(resultNumber);
      } else {
        resultNumberArray.push(this._phraseArray[i]); // add symbol to result array
      }

    }

    const resultArray = this._getResultString(resultNumberArray);
    return this.directMode ? resultArray.join(``).toUpperCase() : resultArray.reverse().join(``).toUpperCase();
  }

  decrypt(phrase, key) {
    phrase = phrase.toLowerCase();
    this._phraseArray = phrase.split(``);

    const fullKeyArray = this._formKeyArray(phrase, key);

    let resultNumberArray = []; // forming numbers of target letters
    for (let i = 0; i < phrase.length; i++) {
      let resultNumber;
      const letterNumber = phrase[i].charCodeAt() - ASCII_DELTA;
      const keyNumber = fullKeyArray[i].charCodeAt() - ASCII_DELTA;

      if (/[a-zA-Z\`]/.test(this._phraseArray[i])) { // add letter number to result array

        if (letterNumber === keyNumber) {
          resultNumber = 1;

        } else if (letterNumber - keyNumber < 0) {
          resultNumber = ALPHABET_LENGTH - (keyNumber - letterNumber) + 1;

        } else {
          resultNumber = letterNumber - keyNumber + 1;
        }
        resultNumberArray.push(resultNumber);
      } else {
        resultNumberArray.push(this._phraseArray[i]); // add symbol to result array
      }
    }
    const resultArray = this._getResultString(resultNumberArray);
    return this.directMode ? resultArray.join(``).toUpperCase() : resultArray.reverse().join(``).toUpperCase();
  }

  _formKeyArray(phraseArray, key) {
    let keyArray = key.toLowerCase().split(``);
    let fullKeyArray = []; // forming key through all string

    let counter = keyArray.length;
    let j = 0;

    for (let i = 0; i < phraseArray.length; i++) {

      if (/[a-zA-Z`]/.test(phraseArray[i])) {
        fullKeyArray.push(keyArray[j]);
        j++;
        if (j >= counter) {
          j = 0;
        }
      } else {
        fullKeyArray.push(phraseArray[i]);
      }
    }
    return fullKeyArray;
  }

  _getResultString(resultNumberArray) {
    let resultArray = [];
    for (let i = 0; i < resultNumberArray.length; i++) { // forming target string
      if (typeof resultNumberArray[i] === `number`) {
        resultArray.push(String.fromCharCode(96 + resultNumberArray[i]));
      } else {
        resultArray.push(resultNumberArray[i]);
      }
    }
    return resultArray;
  }
}

module.exports = VigenereCipheringMachine;