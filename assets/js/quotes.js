/* ============================================================
   quotes.js · 金句库
   - 主题标签筛选 / 搜索 / 开场钩子·收尾升华精选
   - 暗底/米底皮肤切换（localStorage 记忆）
   - 复制（复用 main.js 的 copyText，含降级）
   - 支持 ?tag=xx 预筛（供频道页互链）
   卡片为静态 HTML，本脚本只控制 display / 皮肤 / 复制
   ============================================================ */
(function () {
  var grid = document.getElementById("quoteGrid");
  if (!grid) return;
  var cards = Array.prototype.slice.call(grid.querySelectorAll(".quote-card"));

  var state = { tag: "全部", q: "", mode: "all" };

  var tagChips = document.querySelectorAll("#tagFilter .chip");
  var search = document.getElementById("qSearch");
  var hookBtn = document.getElementById("bandHook");
  var closeBtn = document.getElementById("bandClose");
  var allBtn = document.getElementById("bandAll");

  function apply() {
    cards.forEach(function (c) {
      var ok = true;
      if (state.tag !== "全部" && c.getAttribute("data-tag") !== state.tag) ok = false;
      if (state.mode === "hook" && !c.hasAttribute("data-hook")) ok = false;
      if (state.mode === "close" && !c.hasAttribute("data-close")) ok = false;
      if (ok && state.q) {
        var text = (c.textContent || "").toLowerCase();
        if (text.indexOf(state.q) === -1) ok = false;
      }
      c.style.display = ok ? "" : "none";
    });
    var n = grid.querySelectorAll('.quote-card:not([style*="display: none"])').length;
    var cnt = document.getElementById("count");
    if (cnt) cnt.textContent = "共 " + n + " 条";
  }

  function setTag(t) {
    state.tag = t; state.mode = "all";
    tagChips.forEach(function (ch) {
      ch.classList.toggle("on", ch.getAttribute("data-tag") === t);
    });
    [hookBtn, closeBtn, allBtn].forEach(function (b) { if (b) b.classList.remove("on"); });
    if (allBtn) allBtn.classList.add("on");
    apply();
  }

  tagChips.forEach(function (ch) {
    ch.addEventListener("click", function () { setTag(ch.getAttribute("data-tag")); });
  });

  if (search) {
    search.addEventListener("input", function () { state.q = search.value.trim().toLowerCase(); apply(); });
  }
  if (hookBtn) hookBtn.addEventListener("click", function () {
    state.mode = "hook";
    [hookBtn, closeBtn, allBtn].forEach(function (b) { if (b) b.classList.remove("on"); });
    hookBtn.classList.add("on"); apply();
  });
  if (closeBtn) closeBtn.addEventListener("click", function () {
    state.mode = "close";
    [hookBtn, closeBtn, allBtn].forEach(function (b) { if (b) b.classList.remove("on"); });
    closeBtn.classList.add("on"); apply();
  });
  if (allBtn) allBtn.addEventListener("click", function () { setTag(state.tag); });

  /* ?tag= 预筛 */
  var params = new URLSearchParams(location.search);
  var t = params.get("tag");
  if (t) {
    var hit = document.querySelector('#tagFilter .chip[data-tag="' + t + '"]');
    if (hit) setTag(t);
  }

  /* 皮肤切换 */
  var skinBtn = document.getElementById("skinToggle");
  function applySkin(dark) {
    document.body.classList.toggle("dark-skin", dark);
    if (skinBtn) skinBtn.textContent = dark ? "切换：米底" : "切换：暗底";
  }
  var saved = null;
  try { saved = localStorage.getItem("quoteSkin"); } catch (e) {}
  applySkin(saved === "dark");
  if (skinBtn) skinBtn.addEventListener("click", function () {
    var dark = !document.body.classList.contains("dark-skin");
    applySkin(dark);
    try { localStorage.setItem("quoteSkin", dark ? "dark" : "light"); } catch (e) {}
  });

  /* 复制（事件委托） */
  grid.addEventListener("click", function (e) {
    var btn = e.target.closest ? e.target.closest(".copy-btn") : null;
    if (!btn) return;
    var text = btn.getAttribute("data-copy") || "";
    if (window.copyText) copyText(text, btn);
  });

  apply();
})();
