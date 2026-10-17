function setupTabs(tabSelector, panelSelector) {
  const tabs = document.querySelectorAll(tabSelector);
  const panels = document.querySelectorAll(panelSelector);

  tabs.forEach(function (tab) {
    tab.addEventListener('click', function () {
      tabs.forEach(function (t) { t.classList.remove('active'); });
      panels.forEach(function (p) { p.classList.remove('active'); });

      tab.classList.add('active');
      document.getElementById(tab.dataset.target).classList.add('active');
    });
  });
}

setupTabs('.nav-tab', '.page');
setupTabs('.tab', '.panel');

// Twinkling stars
const starsEl = document.getElementById('stars');

if (starsEl) {
  const count = window.innerWidth < 600 ? 50 : 100;

  function place(star) {
    star.style.left = Math.random() * 100 + '%';
    star.style.top = Math.random() * 100 + '%';
  }

  for (let i = 0; i < count; i++) {
    const star = document.createElement('span');
    const size = 1 + Math.random() * 2;

    star.className = 'star';
    star.style.width = size + 'px';
    star.style.height = size + 'px';
    star.style.setProperty('--dur', (2 + Math.random() * 4) + 's');
    star.style.setProperty('--delay', (-Math.random() * 6) + 's');

    place(star);
    star.addEventListener('animationiteration', function () {
      place(star);
    });

    starsEl.appendChild(star);
  }
}