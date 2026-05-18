document.querySelectorAll('[data-checklist]').forEach((list) => {
  const key = `academy:${location.pathname}:${list.dataset.checklist}`;
  const saved = new Set(JSON.parse(localStorage.getItem(key) || '[]'));
  list.querySelectorAll('input[type="checkbox"]').forEach((box, index) => {
    box.checked = saved.has(String(index));
    box.addEventListener('change', () => {
      if (box.checked) {
        saved.add(String(index));
      } else {
        saved.delete(String(index));
      }
      localStorage.setItem(key, JSON.stringify([...saved]));
    });
  });
});
