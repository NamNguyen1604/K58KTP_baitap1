// GCD
function gcd(a, b) {
  a = Math.abs(a);
  b = Math.abs(b);
  while (b !== 0) {
    let r = a % b;
    a = b;
    b = r;
  }
  return a;
}

// Nghịch đảo modulo m
function modInverse(a, m) {
  a = ((a % m) + m) % m;
  const m0 = m;
  let x0 = 0, x1 = 1;

  if (m === 1) return 0;

  while (a > 1) {
    let q = Math.floor(a / m);
    let t = m;

    m = a % m;
    a = t;
    t = x0;
    x0 = x1 - q * x0;
    x1 = t;
  }

  if (x1 < 0) {
    x1 += m0;
  }

  return x1;
}

function affineCipher(text, a, b, decode = false) {
  const m = 26;
  text = text.toLowerCase();
  return text.replace(/[a-z]/g, ch => {
    const x = ch.charCodeAt(0) - 97;
    let y;
    if (!decode) {
      y = (a * x + b) % m;
      if (y < 0) y += m;
    } else {
      const aInv = modInverse(a, m);
      if (aInv === null || gcd(a, m) !== 1) {
        return ch;
      }
      y = (aInv * (x - b)) % m;
      if (y < 0) y += m;
    }
    return String.fromCharCode(y + 97);
  });
}

// Hàm xử lý chung: hiển thị và lưu
function processAndSave(text, a, b, decode = false) {
  if (!Number.isInteger(a) || gcd(a, 26) !== 1) {
    alert("Giá trị a phải nguyên dương và gcd(a,26)=1");
    return;
  }
  const result = affineCipher(text, a, b, decode);
  document.getElementById('outputText').value = result;

  const saveBox = document.getElementById('saveBox');
  saveBox.value += (decode ? "Giải mã: " : "Mã hóa: ") + result + "\n";
}

// Sự kiện nút
document.getElementById('encodeBtn').onclick = () => {
  const a = parseInt(document.getElementById('a').value, 10);
  const b = parseInt(document.getElementById('b').value, 10);
  const text = document.getElementById('inputText').value;
  processAndSave(text, a, b, false);
};

document.getElementById('decodeBtn').onclick = () => {
  const a = parseInt(document.getElementById('a').value, 10);
  const b = parseInt(document.getElementById('b').value, 10);
  const text = document.getElementById('inputText').value;
  processAndSave(text, a, b, true);
};
