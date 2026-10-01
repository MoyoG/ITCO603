(() => {
  "use strict";

  const lectures = window.ITCO603_LECTURES || {};
  const lectureIds = Object.keys(lectures).map(Number).sort((a, b) => a - b);
  const select = document.getElementById("lecture-select");
  const seedInput = document.getElementById("lab-seed");
  const problemHost = document.getElementById("lab-problem");

  const escapeHtml = (value) => String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");

  const hashSeed = (value) => {
    let hash = 2166136261;
    for (let index = 0; index < value.length; index += 1) {
      hash ^= value.charCodeAt(index);
      hash = Math.imul(hash, 16777619);
    }
    return hash >>> 0;
  };

  select.innerHTML = lectureIds.map((id) => `<option value="${id}">LCN${id} · ${escapeHtml(lectures[id].title)}</option>`).join("");

  document.getElementById("lecture-practice-links").innerHTML = lectureIds.map((id) => `
    <a class="lecture-card mini-card" href="lcn${id}.html#practice">
      <span class="lecture-number">LCN${id}</span>
      <h3>${escapeHtml(lectures[id].title)}</h3>
      <span class="card-link">Open questions →</span>
    </a>`).join("");

  function generate() {
    const lectureId = Number(select.value);
    const lecture = lectures[lectureId];
    const seed = seedInput.value.trim() || "ITCO603-practice";
    seedInput.value = seed;
    const problem = lecture.problems[hashSeed(`${lectureId}:${seed}`) % lecture.problems.length];
    problemHost.innerHTML = `
      <div class="problem-meta"><span>LCN${lectureId} · ${escapeHtml(problem.level)}</span><span>Seed: ${escapeHtml(seed)}</span></div>
      <h3>${escapeHtml(problem.title)}</h3>
      <p class="scenario">${escapeHtml(lecture.title)}</p>
      <div class="problem-prompt"><strong>Your task</strong><p>${escapeHtml(problem.question)}</p></div>
      <button id="lab-reveal" class="button button-secondary" type="button">Reveal worked solution</button>
      <div id="lab-solution" class="worked-solution" hidden>
        <h4>Suggested approach</h4>
        <p>${escapeHtml(problem.solution)}</p>
      </div>`;
    document.getElementById("lab-reveal").addEventListener("click", (event) => {
      const solution = document.getElementById("lab-solution");
      const isHidden = solution.hidden;
      solution.hidden = !isHidden;
      event.currentTarget.textContent = isHidden ? "Hide worked solution" : "Reveal worked solution";
    });
  }

  document.getElementById("lab-generate").addEventListener("click", generate);
  seedInput.addEventListener("keydown", (event) => {
    if (event.key === "Enter") generate();
  });
  select.addEventListener("change", generate);
  generate();
})();
