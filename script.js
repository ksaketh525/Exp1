const f = document.getElementById('form');
const r = document.getElementById('res');
const o = document.getElementById('out');
const p = document.getElementById('photo');
const s = document.getElementById('sign');

f.onsubmit = e => {
  e.preventDefault();
  if (!f.checkValidity()) return f.reportValidity();

  let t = '';
  for (const [k, v] of new FormData(f)) {
    if (k !== 'photo' && k !== 'signature') {
      t += `${k}: ${v}\n`;
    }
  }
  o.textContent = t;

  ['photo', 'signature'].forEach(n => {
    const file = f[n].files[0];
    if (file) {
      const R = new FileReader();
      R.onload = e => (n === 'photo' ? p : s).src = e.target.result;
      R.readAsDataURL(file);
    }
  });

  f.style.display = 'none';
  r.style.display = 'block';
};

function newForm() {
  f.reset();
  f.style.display = 'block';
  r.style.display = 'none';
  p.src = s.src = '';
}
