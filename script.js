function textToGoob(text) {
    let binaryText = '';
    for (let i = 0; i < text.length; i++) {
        binaryText += text.charCodeAt(i).toString(2).padStart(8, '0');
    }
    return binaryText.replace(/0/g, 'goo').replace(/1/g, 'goob');
}

function goobToText(goobText) {
    const binaryText = goobText.replace(/goob/g, '1').replace(/goo/g, '0');
    let text = '';
    for (let i = 0; i < binaryText.length; i += 8) {
        text += String.fromCharCode(parseInt(binaryText.slice(i, i + 8), 2));
    }
    return text;
}

function convert() {
    const inputText = document.getElementById('inputText').value;
    const resultText = document.getElementById('resultText');
    const conversionType = document.querySelector('input[name="conversion"]:checked').value;

    if (conversionType === 'A Goob') {
        resultText.value = textToGoob(inputText);
    } else {
        resultText.value = goobToText(inputText);
    }
}

function copyToClipboard() {
    const resultText = document.getElementById('resultText');
    resultText.select();
    document.execCommand('copy');
}
