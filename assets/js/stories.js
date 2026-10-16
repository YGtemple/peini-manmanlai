/* ============================================================
   stories.js · 成长故事页
   卡片已静态写在 HTML（无 JS 时全部可见可用）；本脚本只做分类筛选（display 控制）。
   ============================================================ */
(function () {
  var chips = document.querySelectorAll("#storyFilter .chip");
  if (!chips.length) return;
  var grid = document.getElementById("storyGrid");
  chips.forEach(function (chip) {
    chip.addEventListener("click", function () {
      chips.forEach(function (c) { c.classList.remove("on"); });
      chip.classList.add("on");
      var f = chip.getAttribute("data-filter");
      grid.querySelectorAll(".story").forEach(function (el) {
        el.style.display = (f === "全部" || el.getAttribute("data-cat") === f) ? "" : "none";
      });
    });
  });
})();
