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

document.querySelectorAll('.nav').forEach((nav) => {
  const toggle = nav.querySelector('.menu-toggle');
  const links = nav.querySelector('.nav-links');

  if (!toggle || !links) {
    return;
  }

  const closeMenu = () => {
    nav.classList.remove('is-open');
    toggle.setAttribute('aria-expanded', 'false');
  };

  toggle.addEventListener('click', () => {
    const isOpen = nav.classList.toggle('is-open');
    toggle.setAttribute('aria-expanded', String(isOpen));
  });

  links.addEventListener('click', (event) => {
    if (event.target.closest('a')) {
      closeMenu();
    }
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
      closeMenu();
    }
  });

  window.addEventListener('scroll', closeMenu, { passive: true });
  window.addEventListener('resize', () => {
    if (window.innerWidth > 900) {
      closeMenu();
    }
  });
});
