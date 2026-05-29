let searchIndex = null;
let searchLoadPromise = null;

const SEARCH_TYPE_LABELS = {
  protocol: "Protocol",
  guide: "Guide",
  page: "Page",
  glossary: "Glossary",
  tool: "Tool",
};

function loadSearchIndex() {
  if (searchIndex) return Promise.resolve(searchIndex);
  if (searchLoadPromise) return searchLoadPromise;

  searchLoadPromise = fetch("/search.json")
    .then((res) => {
      if (!res.ok) throw new Error("Search index unavailable");
      return res.json();
    })
    .then((data) => {
      searchIndex = data.map(normalizeSearchItem);
      return searchIndex;
    })
    .catch(() => {
      searchIndex = [];
      return searchIndex;
    });

  return searchLoadPromise;
}

function normalizeSearchItem(item) {
  const tags = Array.isArray(item.tags)
    ? item.tags.join(" ")
    : String(item.tags || "");
  const haystack = [item.title, item.description, tags, item.type]
    .join(" ")
    .toLowerCase();
  return { ...item, haystack };
}

function openSearch() {
  const overlay = document.getElementById("search-overlay");
  const input = document.getElementById("site-search-input");
  if (!overlay || !input) return;

  overlay.classList.add("open");
  overlay.setAttribute("aria-hidden", "false");
  document.body.classList.add("search-open");

  loadSearchIndex().then(() => {
    input.value = "";
    renderSearchResults("");
    input.focus();
  });

  if (typeof closeMobileMenu === "function") closeMobileMenu();
}

function closeSearch() {
  const overlay = document.getElementById("search-overlay");
  if (!overlay) return;
  overlay.classList.remove("open");
  overlay.setAttribute("aria-hidden", "true");
  document.body.classList.remove("search-open");
}

function renderSearchResults(query) {
  const resultsEl = document.getElementById("search-results");
  const metaEl = document.getElementById("search-meta");
  if (!resultsEl || !metaEl || !searchIndex) return;

  const q = query.trim().toLowerCase();
  if (!q) {
    resultsEl.innerHTML = "";
    metaEl.textContent = "Type to search protocols, guides, and glossary terms.";
    return;
  }

  const tokens = q.split(/\s+/).filter(Boolean);
  const matches = searchIndex
    .filter((item) => tokens.every((token) => item.haystack.includes(token)))
    .slice(0, 12);

  if (!matches.length) {
    resultsEl.innerHTML = "";
    metaEl.textContent = `No results for “${query.trim()}”.`;
    return;
  }

  metaEl.textContent = `${matches.length} result${matches.length === 1 ? "" : "s"}`;
  resultsEl.innerHTML = matches
    .map((item) => {
      const typeLabel = SEARCH_TYPE_LABELS[item.type] || "Page";
      const desc = item.description
        ? `<p class="search-result-desc">${escapeHtml(item.description)}</p>`
        : "";
      return `<a class="search-result" href="${escapeHtml(item.url)}" onclick="closeSearch()">
        <span class="search-result-type">${escapeHtml(typeLabel)}</span>
        <span class="search-result-title">${escapeHtml(item.title)}</span>
        ${desc}
      </a>`;
    })
    .join("");
}

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function initSiteSearch() {
  const overlay = document.getElementById("search-overlay");
  const input = document.getElementById("site-search-input");
  if (!overlay || !input) return;

  input.addEventListener("input", () => renderSearchResults(input.value));

  input.addEventListener("keydown", (event) => {
    if (event.key === "Escape") closeSearch();
    if (event.key === "Enter") {
      const first = overlay.querySelector(".search-result");
      if (first) {
        first.click();
        event.preventDefault();
      }
    }
  });

  overlay.addEventListener("click", (event) => {
    if (event.target === overlay) closeSearch();
  });

  document.addEventListener("keydown", (event) => {
    if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k") {
      event.preventDefault();
      if (overlay.classList.contains("open")) closeSearch();
      else openSearch();
    }
    if (event.key === "Escape" && overlay.classList.contains("open")) closeSearch();
  });
}

document.addEventListener("DOMContentLoaded", initSiteSearch);
