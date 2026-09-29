/* =========================================================
   ÉTAT GLOBAL
========================================================= */
var currentLayout = "azerty"; // "azerty" | "qwerty"
var currentMode = "training"; // "training" | "challenge"
var currentCombo = null;      // { champ, combo, comboIdx, champIdx }
var playing = false;
var inputIndex = 0;
var startTime = 0, maxTime = 0, rafId = null;
var score = 0, streak = 0, perfects = 0;

/* =========================================================
   HELPERS
========================================================= */
function $(id) { return document.getElementById(id); }
function initials(name) { return name.substring(0, 2).toUpperCase(); }
function diffDots(n) {
  var html = "";
  for (var i = 0; i < 5; i++) html += '<span class="diff-dot' + (i < n ? " on" : "") + '"></span>';
  return html;
}

// Récupère les touches d'un combo selon la disposition
function getKeys(combo) {
  return currentLayout === "azerty" ? combo.keys_azerty : combo.keys_qwerty;
}

// ⚡ Convertit les marqueurs {Q} {W} {E} {R} dans les textes d'explication
// selon la disposition active. Ex: {Q} devient "A" en AZERTY.
function renderText(text) {
  if (!text) return "";
  var map = currentLayout === "azerty"
    ? { Q: "A", W: "Z", E: "E", R: "R" }
    : { Q: "Q", W: "W", E: "E", R: "R" };

  return text.replace(/\{([QWER])\}/g, function(match, key) {
    return '<strong>' + map[key] + '</strong>';
  });
}

/* =========================================================
   AUDIO
========================================================= */
var audioCtx = null;
function beep(freq, dur, type) {
  try {
    if (!audioCtx) audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    var osc = audioCtx.createOscillator();
    var gain = audioCtx.createGain();
    osc.frequency.value = freq;
    osc.type = type || "sine";
    gain.gain.setValueAtTime(0.08, audioCtx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + (dur||0.08));
    osc.connect(gain).connect(audioCtx.destination);
    osc.start();
    osc.stop(audioCtx.currentTime + (dur||0.08));
  } catch(e) {}
}

/* =========================================================
   NAVIGATION
========================================================= */
function showPage(name) {
  var pages = document.querySelectorAll(".page");
  for (var i = 0; i < pages.length; i++) pages[i].classList.remove("active");
  $("page-" + name).classList.add("active");

  var tabs = document.querySelectorAll(".nav-tab");
  for (var j = 0; j < tabs.length; j++) {
    tabs[j].classList.toggle("active", tabs[j].getAttribute("data-page") === name);
  }
}

function initNavigation() {
  document.querySelectorAll(".nav-tab").forEach(function(tab) {
    tab.addEventListener("click", function() {
      var p = this.getAttribute("data-page");
      if (p === "detail") return;
      showPage(p);
    });
  });
  $("backBtn").addEventListener("click", function() { showPage("champions"); });
}

/* =========================================================
   PAGE: LISTE CHAMPIONS
========================================================= */
function renderChampGrid() {
  var html = "";
  CHAMPIONS.forEach(function(c, idx) {
    html += '<div class="champ-card" data-idx="' + idx + '">';
    html +=   '<div class="champ-card-header">';
    html +=     '<div class="champ-avatar">' + initials(c.name) + '</div>';
    html +=     '<div>';
    html +=       '<div class="champ-name">' + c.name.toUpperCase() + '</div>';
    html +=       '<div class="champ-role">' + c.role + '</div>';
    html +=     '</div>';
    html +=   '</div>';
    html +=   '<div class="champ-desc">' + c.desc + '</div>';
    html +=   '<div class="champ-meta">';
    html +=     '<span>' + c.combos.length + ' combos</span>';
    html +=     '<span>Difficulté <span class="diff-dots">' + diffDots(c.difficulty) + '</span></span>';
    html +=   '</div>';
    html += '</div>';
  });
  $("champGrid").innerHTML = html;

  document.querySelectorAll(".champ-card").forEach(function(card) {
    card.addEventListener("click", function() {
      var idx = parseInt(this.getAttribute("data-idx"));
      openChampDetail(idx);
    });
  });
}

/* =========================================================
   PAGE: DÉTAIL CHAMPION
========================================================= */
function openChampDetail(idx) {
  var c = CHAMPIONS[idx];
  var html = "";

  // -------- Sidebar --------
  html += '<div class="champ-detail-side">';
  html +=   '<div class="champ-detail-avatar">' + initials(c.name) + '</div>';
  html +=   '<h2>' + c.name.toUpperCase() + '</h2>';
  html +=   '<div class="champ-detail-title">' + c.title + '</div>';
  html +=   '<div class="champ-detail-role">' + c.role + '</div>';
  html +=   '<div class="info-row"><span>Combos</span><span>' + c.combos.length + '</span></div>';
  html +=   '<div class="info-row"><span>Sorts</span><span>' + c.spells.length + '</span></div>';
  html +=   '<div class="info-row"><span>Difficulté</span><span>' + c.difficulty + ' / 5</span></div>';
  html +=   '<div class="info-row"><span>Clavier</span><span>' + currentLayout.toUpperCase() + '</span></div>';
  html += '</div>';

  // -------- Main --------
  html += '<div class="champ-detail-main">';

  // Gameplay
  html +=   '<h3>Gameplay</h3>';
  html +=   '<div class="gameplan">' + renderText(c.gameplan) + '</div>';

  // Compétences
  html +=   '<h3>Compétences</h3>';
  html +=   '<div class="spells-grid">';
  c.spells.forEach(function(s) {
    var keyClass = "spell-key";
    if (s.key === "P") keyClass += " passive";
    if (s.key === "R") keyClass += " ult";
    var displayedKey = s.key === "P"
      ? "P"
      : (currentLayout === "azerty"
          ? { Q: "A", W: "Z", E: "E", R: "R" }[s.key]
          : s.key);

    html += '<div class="spell-row">';
    html +=   '<div class="' + keyClass + '">' + displayedKey + '</div>';
    html +=   '<div class="spell-info">';
    html +=     '<div class="spell-name">' + s.name;
    if (s.cd) html += '<span class="spell-cd">CD ' + s.cd + '</span>';
    html +=     '</div>';
    html +=     '<div class="spell-desc">' + s.desc + '</div>';
    html +=   '</div>';
    html += '</div>';
  });
  html +=   '</div>';

  // Combos
  html +=   '<h3>Combos</h3>';
  html +=   '<div class="combo-list">';
  c.combos.forEach(function(combo, ci) {
    var keys = getKeys(combo).split("");
    html += '<div class="combo-item">';
    html +=   '<div class="combo-header">';
    html +=     '<div class="combo-name">' + combo.name + '</div>';
    html +=     '<div class="combo-tag">' + combo.tag + '</div>';
    html +=   '</div>';
    html +=   '<div class="combo-keys-visual">';
    keys.forEach(function(k) {
      html += '<div class="combo-key-chip">' + k + '</div>';
    });
    html +=   '</div>';
    html +=   '<div class="combo-explain">' + renderText(combo.explain) + '</div>';
    html +=   '<div class="combo-actions">';
    html +=     '<button class="practice-btn" data-champ="' + idx + '" data-combo="' + ci + '" data-mode="training">S\'entraîner</button>';
    html +=     '<button class="practice-btn" data-champ="' + idx + '" data-combo="' + ci + '" data-mode="challenge">Défi chrono</button>';
    html +=   '</div>';
    html += '</div>';
  });
  html +=   '</div>';
  html += '</div>';

  $("champDetail").innerHTML = html;
  showPage("detail");

  document.querySelectorAll(".practice-btn").forEach(function(btn) {
    btn.addEventListener("click", function(e) {
      e.stopPropagation();
      var ci = parseInt(this.getAttribute("data-champ"));
      var co = parseInt(this.getAttribute("data-combo"));
      var mode = this.getAttribute("data-mode");
      launchTraining(ci, co, mode);
    });
  });
}

/* =========================================================
   ENTRAÎNEMENT
========================================================= */
function launchTraining(champIdx, comboIdx, mode) {
  currentCombo = {
    champ: CHAMPIONS[champIdx],
    combo: CHAMPIONS[champIdx].combos[comboIdx],
    comboIdx: comboIdx,
    champIdx: champIdx
  };
  currentMode = mode;

  document.querySelectorAll(".mode-switch button").forEach(function(b) {
    b.classList.toggle("active", b.getAttribute("data-mode") === mode);
  });

  score = 0; streak = 0; perfects = 0;
  playing = false;
  inputIndex = 0;

  renderTraining();
  showPage("training");
}

function renderTraining() {
  if (!currentCombo) {
    $("trainingContent").innerHTML =
      '<div class="empty-state"><h3>Choisis un combo</h3>' +
      '<p>Va dans la page Champions, sélectionne un champion puis clique sur "S\'entraîner".</p></div>';
    return;
  }

  var c = currentCombo.champ;
  var combo = currentCombo.combo;
  var keys = getKeys(combo).split("");

  var html = "";
  html += '<div class="training-header">';
  html +=   '<div class="training-champ">' + c.name.toUpperCase() + '</div>';
  html +=   '<div class="training-combo-name">' + combo.name + ' — ' + combo.tag + '</div>';
  html +=   '<div class="training-explain">' + renderText(combo.explain) + '</div>';
  html += '</div>';

  html += '<div class="key-display" id="keyDisplay">';
  keys.forEach(function(k, i) {
    html += '<div class="key-box" id="kb' + i + '">' + k + '</div>';
  });
  html += '</div>';

  html += '<div class="timer-bar ' + (currentMode === "training" ? "hidden" : "") + '" id="timerBar">';
  html +=   '<div class="timer-fill" id="timerFill" style="width:100%"></div>';
  html += '</div>';

  html += '<div class="training-stats">';
  html +=   '<div class="training-stat"><div class="v" id="score">0</div><div class="l">Score</div></div>';
  html +=   '<div class="training-stat"><div class="v" id="streak">0</div><div class="l">Combo</div></div>';
  html +=   '<div class="training-stat"><div class="v" id="perfects">0</div><div class="l">Perfect</div></div>';
  html += '</div>';

  html += '<div class="training-feedback" id="feedback"></div>';
  html += '<button class="btn-primary" id="startBtn">Commencer</button>';
  html += '<div class="hint">Appuie sur les touches dans l\'ordre affiché</div>';

  $("trainingContent").innerHTML = html;

  $("startBtn").addEventListener("click", function() {
    score = 0; streak = 0; perfects = 0;
    $("score").textContent = 0;
    $("streak").textContent = 0;
    $("perfects").textContent = 0;
    startRound();
  });
}

function startRound() {
  if (!currentCombo) return;
  inputIndex = 0;
  startTime = performance.now();
  var keys = getKeys(currentCombo.combo);
  maxTime = keys.length * 900;
  playing = true;

  var fb = $("feedback");
  fb.textContent = "";
  fb.className = "training-feedback";

  if (currentMode === "challenge") {
    $("timerFill").style.width = "100%";
    loop();
  }
  updateKeyDisplay();
}

function updateKeyDisplay() {
  var keys = getKeys(currentCombo.combo).split("");
  for (var i = 0; i < keys.length; i++) {
    var box = $("kb" + i);
    if (!box) continue;
    var cls = "key-box";
    if (i < inputIndex) cls += " done";
    else if (i === inputIndex) cls += " active";
    box.className = cls;
  }
}

function loop() {
  if (!playing || currentMode !== "challenge") return;
  var elapsed = performance.now() - startTime;
  var remaining = Math.max(0, 1 - elapsed / maxTime);
  var fill = $("timerFill");
  if (fill) fill.style.width = (remaining * 100) + "%";
  if (remaining <= 0) { endRound(false, "TEMPS ÉCOULÉ"); return; }
  rafId = requestAnimationFrame(loop);
}

function endRound(success, msg, ratio) {
  playing = false;
  if (rafId) cancelAnimationFrame(rafId);

  var fb = $("feedback");

  if (success) {
    var points, label, cls;
    if (currentMode === "training") {
      points = 50; label = "Combo réussi"; cls = "training-feedback fb-perfect";
      beep(1000, 0.15);
    } else {
      if (ratio < 0.4) { points = 100; label = "Perfect !"; cls = "training-feedback fb-perfect"; perfects++; beep(1200, 0.15); }
      else if (ratio < 0.7) { points = 60; label = "Good"; cls = "training-feedback fb-good"; beep(800, 0.12); }
      else { points = 30; label = "OK"; cls = "training-feedback fb-good"; beep(500, 0.1); }
    }
    streak++;
    var bonus = Math.min(streak * 5, 50);
    score += points + bonus;
    fb.textContent = label + " +" + (points + bonus);
    fb.className = cls;
  } else {
    streak = 0;
    fb.textContent = msg || "Raté";
    fb.className = "training-feedback fb-miss";
    beep(100, 0.3, "sawtooth");
  }

  $("score").textContent = score;
  $("streak").textContent = streak;
  $("perfects").textContent = perfects;

  var keys = getKeys(currentCombo.combo).split("");
  for (var i = 0; i < keys.length; i++) {
    var box = $("kb" + i);
    if (box) box.className = "key-box done";
  }

  setTimeout(function() {
    if (!playing && currentCombo) startRound();
  }, 1200);
}

/* =========================================================
   CLAVIER
========================================================= */
function initKeyboard() {
  document.addEventListener("keydown", function(e) {
    if (e.code === "Space" && !playing && currentCombo && $("page-training").classList.contains("active")) {
      e.preventDefault();
      startRound();
      return;
    }

    if (!playing || !currentCombo) return;

    var expectedKeys = getKeys(currentCombo.combo).toUpperCase();
    var expected = expectedKeys[inputIndex];
    if (!expected) return;

    var pressed = e.key.toUpperCase();

    if (pressed === expected) {
      inputIndex++;
      beep(600 + inputIndex * 100);
      updateKeyDisplay();
      if (inputIndex >= expectedKeys.length) {
        if (currentMode === "training") {
          endRound(true, null, 0.3);
        } else {
          var elapsed = performance.now() - startTime;
          endRound(true, null, elapsed / maxTime);
        }
      }
    } else {
      beep(150, 0.15, "sawtooth");
      var box = $("kb" + inputIndex);
      if (box) {
        box.classList.add("miss");
        (function(b) { setTimeout(function() { b.classList.remove("miss"); }, 300); })(box);
      }
      if (currentMode === "challenge") startTime -= 200;
    }
  });
}

/* =========================================================
   LAYOUT SWITCH
========================================================= */
function initLayoutSwitch() {
  document.querySelectorAll(".layout-pill button").forEach(function(btn) {
    btn.addEventListener("click", function() {
      document.querySelectorAll(".layout-pill button").forEach(function(b) { b.classList.remove("active"); });
      this.classList.add("active");
      currentLayout = this.getAttribute("data-layout");

      // Rafraîchir la page active
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
   MODE SWITCH
========================================================= */
function initModeSwitch() {
  document.querySelectorAll(".mode-switch button").forEach(function(btn) {
    btn.addEventListener("click", function() {
      document.querySelectorAll(".mode-switch button").forEach(function(b) { b.classList.remove("active"); });
      this.classList.add("active");
      currentMode = this.getAttribute("data-mode");
      if (currentCombo) renderTraining();
    });
  });
}

/* =========================================================
   INIT
========================================================= */
window.addEventListener("DOMContentLoaded", function() {
  initNavigation();
  initKeyboard();
  initLayoutSwitch();
  initModeSwitch();
  renderChampGrid();
});
