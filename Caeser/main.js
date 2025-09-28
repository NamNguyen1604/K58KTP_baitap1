// Hàm Caesar Cipher
function caesarCipher(text, shift) {
  shift = ((shift % 26) + 26) % 26; // đảm bảo shift trong 0-25
  return text.replace(/[a-zA-Z]/g, function(char) {
    const base = char <= 'Z' ? 65 : 97;
    return String.fromCharCode(((char.charCodeAt(0) - base + shift) % 26) + base);
  });
}

// Mã hóa
document.getElementById('encodeBtn').addEventListener('click', () => {
  const shift = parseInt(document.getElementById('shift').value) || 0;
  const input = document.getElementById('inputText').value;
  const output = caesarCipher(input, shift);
  document.getElementById('outputText').value = output;
});

// Giải mã
document.getElementById('decodeBtn').addEventListener('click', () => {
  const shift = parseInt(document.getElementById('shift').value) || 0;
  const input = document.getElementById('inputText').value;
  const output = caesarCipher(input, -shift);
  document.getElementById('outputText').value = output;
});
