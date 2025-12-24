(function () {
  const STORAGE_KEY = "site_lang";
  const DEFAULT_LANG = "en";

  function setLang(lang) {
    localStorage.setItem(STORAGE_KEY, lang);
    document.documentElement.setAttribute("data-lang", lang);

    document.querySelectorAll("[data-i18n]").forEach((el) => {
      const text = el.getAttribute(`data-${lang}`);
      if (text !== null) el.innerHTML = text;
    });

    document.querySelectorAll("[data-lang-btn]").forEach((btn) => {
      btn.classList.toggle("active", btn.getAttribute("data-lang-btn") === lang);
    });
  }

  function initLang() {
    const saved = localStorage.getItem(STORAGE_KEY) || DEFAULT_LANG;
    setLang(saved);

    document.querySelectorAll("[data-lang-btn]").forEach((btn) => {
      btn.addEventListener("click", () => setLang(btn.getAttribute("data-lang-btn")));
    });
  }

  function initYear() {
    const y = document.getElementById("year");
    if (y) y.textContent = new Date().getFullYear();
  }

  document.addEventListener("DOMContentLoaded", function () {
    initLang();
    initYear();
  });
})();
