async function hashString(str) {
  const encoder = new TextEncoder();
  const data = encoder.encode(str);
  const hashBuffer = await crypto.subtle.digest("SHA-256", data);
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  return hashArray.map(byte => byte.toString(16).padStart(2, '0')).join('');
}

document.getElementById('email-solve').addEventListener('click', async function() {
  let f = document.getElementById('email-code').innerText;

  if (!f) {
    alert('Please enter the email code');
    return;
  }

  const targetHash = 'cff427d2ca8ade3416cc2a44df3b0cda7ab03d0710779378b33030f26d21ad06';
  let n = 0;
  let found = false;

  for (n = 0; n <= 152; n++) {
    let modifiedF = f.split("-"); 
    modifiedF = modifiedF.map(Number);

    let orig = modifiedF.map((value) => {
      return Math.round(Math.pow(value / (n * (n - 1)), 1 / (n - 2)));
    });

    let asciiString = orig.map((num) => {
      if (num >= 32 && num <= 126) {
        return String.fromCharCode(num);
      } else {
        return '';
      }
    }).join('');

    const hashedResult = await hashString(asciiString);
    document.getElementById('email-solved').textContent += `n = ${n} Result: ${asciiString}\n`;

    if (hashedResult === targetHash) {
      found = true;
      document.getElementById('email-solved').textContent = `${asciiString}`;
      break;
    }
  }
});
