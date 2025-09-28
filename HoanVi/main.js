// Hàm mã hóa Hoán vị
function permuteEncrypt(text, keyArr) {
  const n = keyArr.length;
  let result = '';
  for (let i = 0; i < text.length; i += n) {
    let block = text.slice(i, i + n).padEnd(n, 'X');
    for (let k of keyArr) result += block[k - 1] || 'X';
  }
  return result;
}

// Hàm giải mã Hoán vị
function permuteDecrypt(text, keyArr) {
  const n = keyArr.length;
  let result = '';
  for (let i = 0; i < text.length; i += n) {
    let block = text.slice(i, i + n);
    let arr = Array(n);
    keyArr.forEach((pos, idx) => arr[pos - 1] = block[idx]);
    result += arr.join('');
  }
  return result.trim();
}

// Mã hóa
document.getElementById('encodeBtn').onclick = () => {
  const key = document.getElementById('key').value.split(',').map(Number);
  const input = document.getElementById('inputText').value.replace(/\s+/g,'').toUpperCase();
  document.getElementById('outputText').value = permuteEncrypt(input, key);
};

// Giải mã
document.getElementById('decodeBtn').onclick = () => {
  const key = document.getElementById('key').value.split(',').map(Number);
  const input = document.getElementById('inputText').value.replace(/\s+/g,'').toUpperCase();
  document.getElementById('outputText').value = permuteDecrypt(input, key);
};
