class VigenereCipher {
    constructor(key, alphabet) {
        if (!key || !key.length) {
            throw new Error('Missing Key');
        }

        this.key = key;
        this.keyLength = key.length;
        this.alphabet = alphabet;
        this.alphabetLength = alphabet.length;
        this.baseAsciiValue = 97; // letter a in ascii
    }

    encode(phrase) {
        if (!phrase || !phrase.length) {
            return '';
        }

        const messageLength = phrase.length;
        let key;
        let encodedMessage = '';

        if (messageLength > this.keyLength) {
            key = this.key.repeat(Math.ceil(messageLength / this.keyLength)).substring(0, messageLength);
        } else {
            key = this.key.substring(0, messageLength);
        }

        for (let i = 0; i < messageLength; i += 1) {
            if (this.alphabet.indexOf(phrase[i]) === -1) {
                encodedMessage += phrase[i];
            } else {
                const keyCharacterIndex = this.alphabet.indexOf(key[i]);
                const messageCharacterIndex = this.alphabet.indexOf(phrase[i]);
                const encodedCharacterIndex = (keyCharacterIndex + messageCharacterIndex) % this.alphabetLength;
                encodedMessage += this.alphabet[encodedCharacterIndex];
            }
        }

        return encodedMessage;
    }

    decode(phrase) {
        if (!phrase || !phrase.length) {
            return '';
        }

        const messageLength = phrase.length;
        let key;
        let decodedMessage = '';

        if (messageLength > this.keyLength) {
            key = this.key.repeat(Math.ceil(messageLength / this.keyLength)).substring(0, messageLength);
        } else {
            key = this.key.substring(0, messageLength);
        }

        for (let i = 0; i < messageLength; i += 1) {
            if (this.alphabet.indexOf(phrase[i]) === -1) {
                decodedMessage += phrase[i];
            } else {
                const keyCharacterIndex = this.alphabet.indexOf(key[i]);
                const messageCharacterIndex = this.alphabet.indexOf(phrase[i]);
                let decodedCharacterIndex = messageCharacterIndex - keyCharacterIndex;

                if (decodedCharacterIndex >= 0) {
                    decodedCharacterIndex %= this.alphabetLength;
                } else {
                    decodedCharacterIndex = (decodedCharacterIndex % this.alphabetLength) + this.alphabetLength;
                }

                decodedMessage += this.alphabet[decodedCharacterIndex];
            }
        }

        return decodedMessage;
    }
}

module.exports = VigenereCipher;
