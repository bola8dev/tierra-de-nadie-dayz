document.addEventListener('click', (e)=>{
  const el = e.target.closest('[data-copy]');
  if(!el) return;
  const sel = el.getAttribute('data-copy');
  const node = document.querySelector(sel);
  if(node){
    navigator.clipboard.writeText(node.textContent.trim()).then(()=>{
      el.textContent = 'Copiado ✔';
      setTimeout(()=> el.textContent = 'Copiar IP', 1200);
    }).catch(()=>{
      el.textContent = 'Error';
      setTimeout(()=> el.textContent = 'Copiar IP', 1200);
    });
  }
});
