/* Zonex landing — minimal JS; smooth scroll via CSS */
(function () {
  'use strict';
  // Optional: focus management for anchor links (accessibility)
  document.querySelectorAll('a[href^="#"]').forEach(function (a) {
    var id = a.getAttribute('href');
    if (id === '#') return;
    a.addEventListener('click', function () {
      var target = document.querySelector(id);
      if (target) target.setAttribute('tabindex', '-1');
    });
  });
})();
