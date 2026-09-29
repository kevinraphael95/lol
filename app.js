/* =========================================================
   LAYOUT SWITCH
========================================================= */
function initLayoutSwitch() {
  document.querySelectorAll(".layout-pill button").forEach(function(btn) {
    btn.addEventListener("click", function() {
      document.querySelectorAll(".layout-pill button").forEach(function(b) { b.classList.remove("active"); });
      this.classList.add("active");
      currentLayout = this.getAttribute("data-layout");

      if ($("page-detail").classList.contains("active")) {
        var titleEl = $("champDetail").querySelector("h2");
        if (titleEl) {
          var name = titleEl.textContent;
          for (var i = 0; i < CHAMPIONS.length; i++) {
            if (CHAMPIONS[i].name.toUpperCase() === name) {
              openChampDetail(i);
              break;
            }
          }
        }
      }
      if (currentCombo && $("page-training").classList.contains("active")) {
        renderTraining();
      }
    });
  });
}

/* =========================================================
   THEME SWITCH
========================================================= */
function initThemeSwitch() {
  var themeBtn = $("themeBtn");
  if (!themeBtn) return;

  // Charger le thème sauvegardé (ou détecter la préférence système)
  var saved = null;
  try { saved = localStorage.getItem("lol-trainer-theme"); } catch(e) {}
  var prefersLight = window.matchMedia && window.matchMedia("(prefers-color-scheme: light)").matches;
  var theme = saved || (prefersLight ? "light" : "dark");
  applyTheme(theme);

  themeBtn.addEventListener("click", function() {
    var current = document.documentElement.getAttribute("data-theme");
    var next = current === "dark" ? "light" : "dark";
    applyTheme(next);
    try { localStorage.setItem("lol-trainer-theme", next); } catch(e) {}
  });
}

function applyTheme(theme) {
  document.documentElement.setAttribute("data-theme", theme);
  var btn = $("themeBtn");
  if (btn) btn.setAttribute("data-theme", theme);
}

/* =========================================================
   INIT
========================================================= */
window.addEventListener("DOMContentLoaded", function() {
  initNavigation();
  initKeyboard();
  initLayoutSwitch();
  initModeSwitch();
  initThemeSwitch();
  renderChampGrid();
});
