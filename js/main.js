function firstWordOfString(string) {
    const firstWordArray = [];
    const sentenceArray = string.split('.');

    for (let sentence of sentenceArray) {
        sentence = sentence.trim();
        if (sentence.length === 0) {
            continue
        }
        const indexOfSpace = sentence.indexOf(' ');
        let firstWord
        if (indexOfSpace === -1) {
            firstWord = sentence
        } else {
            firstWord = sentence.substring(0, indexOfSpace);
        }
        firstWordArray.push(firstWord);
    }

    return firstWordArray;
}

const message = prompt();
alert(firstWordOfString(message).toString());
