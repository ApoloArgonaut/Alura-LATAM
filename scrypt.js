document.addEventListener('DOMContentLoaded', function () {
    function encryptText() {
        let textInput = document.getElementById('textInput').value;
        let shift = 3; // El número de posiciones para desplazarse en el cifrado César
        let encryptedText = caesarCipher(textInput, shift);
        document.getElementById('textOutput').value = encryptedText;
    }

    function decryptText() {
        let textInput = document.getElementById('textInput').value;
        let shift = 3; // El número de posiciones para desplazarse en el cifrado César
        let decryptedText = caesarCipher(textInput, -shift);
        document.getElementById('textOutput').value = decryptedText;
    }

    function caesarCipher(str, shift) {
        const alphabet = 'abcdefghijklmnopqrstuvwxyz';
        const alphabetLength = alphabet.length;
        shift = shift % alphabetLength;

        const shiftedStr = str.split('').map(char => {
            const isLowerCase = char === char.toLowerCase();
            const isUpperCase = char === char.toUpperCase();

            if (alphabet.includes(char.toLowerCase())) {
                const startIndex = alphabet.indexOf(char.toLowerCase());
                const newIndex = (startIndex + shift + alphabetLength) % alphabetLength;
                const newChar = alphabet[newIndex];

                return isUpperCase ? newChar.toUpperCase() : newChar;
            } else {
                return char; // No cifra caracteres que no están en el alfabeto
            }
        }).join('');

        return shiftedStr;
    }

    function copyToClipboard() {
        const text = document.getElementById('textOutput').value;
        navigator.clipboard.writeText(text).then(() => {
            alert('Texto copiado al portapapeles');
        }).catch(err => {
            console.error('Error al copiar el texto: ', err);
        });
    }

    // Asigna las funciones a los botones
    document.querySelector('.btn-encrypt').onclick = encryptText;
    document.querySelector('.btn-desencrypt').onclick = decryptText;
    document.querySelector('.btn-copy').onclick = copyToClipboard;
});
