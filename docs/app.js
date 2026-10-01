(() => {
  "use strict";

  const lectures = window.ITCO603_LECTURES || {};
  const lectureNumber = Number(document.body.dataset.lcn);
  const lecture = lectures[lectureNumber];
  const root = document.getElementById("lecture-app");

  if (!root || !lecture) {
    if (root) root.innerHTML = '<main class="container"><div class="notice">Lecture content is unavailable.</div></main>';
    return;
  }

  const escapeHtml = (value) => String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");

  const listItems = (items) => items.map((item) => `<li>${escapeHtml(item)}</li>`).join("");

  root.innerHTML = `
    <header class="lecture-header">
      <div class="container">
        <nav class="topbar" aria-label="Course navigation">
          <a class="brand" href="index.html">ITCO603</a>
          <div class="top-links">
            <a href="index.html">Course home</a>
            <a href="practice.html">Practice lab</a>
          </div>
        </nav>
        <p class="eyebrow">LCN${lectureNumber} · ${escapeHtml(lecture.kicker)}</p>
        <h1>${escapeHtml(lecture.title)}</h1>
        <p class="hero-copy">${escapeHtml(lecture.summary)}</p>
        <div class="lecture-nav" aria-label="Page sections">
          <a href="#objectives">Objectives</a>
          <a href="#concepts">Concepts</a>
          <a href="#activities">Hands-on</a>
          <a href="#practice">Practice</a>
          <a href="#problems">Problem solving</a>
          <a href="#takeaways">Takeaways</a>
        </div>
      </div>
    </header>

    <main class="container lecture-main">
      <section id="objectives" class="section-block">
        <p class="section-label">Learning objectives</p>
        <h2>What you should be able to do</h2>
        <ul class="check-list">${listItems(lecture.objectives)}</ul>
      </section>

      <section id="concepts" class="section-block">
        <p class="section-label">Important concepts</p>
        <h2>The ideas worth remembering</h2>
        <div class="concept-grid">
          ${lecture.concepts.map((concept) => `
            <article class="concept-card">
              <h3>${escapeHtml(concept[0])}</h3>
              <p>${escapeHtml(concept[1])}</p>
            </article>
          `).join("")}
        </div>
      </section>

      <section id="activities" class="section-block">
        <p class="section-label">Hands-on learning</p>
        <h2>Try it with your team</h2>
        <div class="activity-grid">
          ${lecture.handsOn.map((activity, index) => `
            <article class="activity-card">
              <span class="activity-number">${index + 1}</span>
              <h3>${escapeHtml(activity[0])}</h3>
              <p>${escapeHtml(activity[1])}</p>
              <p class="deliverable"><strong>Team output:</strong> Record one concise, evidence-based response.</p>
            </article>
          `).join("")}
        </div>
      </section>

      <section id="practice" class="section-block">
        <p class="section-label">Knowledge check</p>
        <h2>Practice questions</h2>
        <div class="practice-grid">
          <article class="practice-panel">
            <div class="panel-heading">
              <div><span class="badge">Multiple choice</span><h3>Concept check</h3></div>
              <span id="mcq-progress" class="score-pill"></span>
            </div>
            <div id="mcq-quiz"></div>
          </article>
          <article class="practice-panel">
            <div class="panel-heading">
              <div><span class="badge badge-alt">True or false</span><h3>Reasoning check</h3></div>
              <span id="tf-progress" class="score-pill"></span>
            </div>
            <div id="tf-quiz"></div>
          </article>
        </div>
      </section>

      <section id="problems" class="section-block problem-section">
        <p class="section-label">Problem-solving lab</p>
        <h2>Apply the method to a realistic case</h2>
        <p class="section-intro">Use a seed to reproduce the same challenge with classmates. Work first, then reveal the suggested solution.</p>
        <div class="problem-controls">
          <label for="problem-seed">Challenge seed</label>
          <input id="problem-seed" type="text" value="ITCO603-${lectureNumber}" maxlength="40">
          <button id="generate-problem" class="button" type="button">Generate case</button>
        </div>
        <article id="problem-card" class="problem-card"></article>
      </section>

      <section id="takeaways" class="section-block takeaway-block">
        <p class="section-label">Lecture recap</p>
        <h2>${escapeHtml(lecture.recap)}</h2>
        <ol class="takeaway-list">${listItems(lecture.takeaways)}</ol>
      </section>

      <nav class="lecture-pagination" aria-label="Lecture pagination">
        ${lectureNumber > 1 ? `<a href="lcn${lectureNumber - 1}.html">← LCN${lectureNumber - 1}</a>` : '<span></span>'}
        ${lectureNumber < Object.keys(lectures).length ? `<a href="lcn${lectureNumber + 1}.html">LCN${lectureNumber + 1} →</a>` : '<a href="practice.html">Practice lab →</a>'}
      </nav>
    </main>

    <footer><div class="container"><strong>ITCO603 · Systems Analysis and Design</strong><span>Learn the concept. Test the evidence. Improve the design.</span></div></footer>
  `;

  function renderQuestionSet(config) {
    let current = 0;
    let score = 0;
    const host = document.getElementById(config.hostId);
    const progress = document.getElementById(config.progressId);

    function draw() {
      if (current >= config.questions.length) {
        host.innerHTML = `
          <div class="result-card">
            <div class="result-score">${score}/${config.questions.length}</div>
            <h4>Practice complete</h4>
            <p>${score === config.questions.length ? "Excellent—your reasoning is consistent." : "Review the explanations, then try again."}</p>
            <button class="button restart-button" type="button">Try again</button>
          </div>`;
        progress.textContent = "Complete";
        host.querySelector(".restart-button").addEventListener("click", () => {
          current = 0;
          score = 0;
          draw();
        });
        return;
      }

      const question = config.questions[current];
      progress.textContent = `${current + 1} of ${config.questions.length}`;
      const choices = config.getChoices(question);
      host.innerHTML = `
        <p class="question-text">${escapeHtml(question.question ?? question.q)}</p>
        <div class="answer-list">
          ${choices.map((choice, index) => `<button class="answer-button" type="button" data-index="${index}">${escapeHtml(choice)}</button>`).join("")}
        </div>
        <div class="feedback" hidden></div>
      `;

      const buttons = [...host.querySelectorAll(".answer-button")];
      buttons.forEach((button) => button.addEventListener("click", () => {
        if (host.dataset.answered === "true") return;
        host.dataset.answered = "true";
        const selected = Number(button.dataset.index);
        const correct = config.isCorrect(question, selected);
        if (correct) score += 1;
        buttons.forEach((item, index) => {
          item.disabled = true;
          if (config.isCorrect(question, index)) item.classList.add("correct");
          else if (index === selected) item.classList.add("incorrect");
        });
        const feedback = host.querySelector(".feedback");
        feedback.hidden = false;
        feedback.className = `feedback ${correct ? "feedback-correct" : "feedback-review"}`;
        feedback.innerHTML = `<strong>${correct ? "Correct." : "Review this one."}</strong> ${escapeHtml(question.explanation ?? question.why)}<button class="button next-button" type="button">${current + 1 === config.questions.length ? "See score" : "Next question"}</button>`;
        feedback.querySelector(".next-button").addEventListener("click", () => {
          current += 1;
          delete host.dataset.answered;
          draw();
        });
      }));
    }

    draw();
  }

  renderQuestionSet({
    hostId: "mcq-quiz",
    progressId: "mcq-progress",
    questions: lecture.mcqs,
    getChoices: (question) => question.options,
    isCorrect: (question, index) => index === question.answer
  });

  renderQuestionSet({
    hostId: "tf-quiz",
    progressId: "tf-progress",
    questions: lecture.trueFalse,
    getChoices: () => ["True", "False"],
    isCorrect: (question, index) => (index === 0) === question.answer
  });

  function hashSeed(value) {
    let hash = 2166136261;
    for (let index = 0; index < value.length; index += 1) {
      hash ^= value.charCodeAt(index);
      hash = Math.imul(hash, 16777619);
    }
    return hash >>> 0;
  }

  function renderProblem() {
    const seedInput = document.getElementById("problem-seed");
    const seed = seedInput.value.trim() || `ITCO603-${lectureNumber}`;
    seedInput.value = seed;
    const problem = lecture.problems[hashSeed(`${lectureNumber}:${seed}`) % lecture.problems.length];
    const card = document.getElementById("problem-card");
    card.innerHTML = `
      <div class="problem-meta"><span>LCN${lectureNumber} · ${escapeHtml(problem.level)}</span><span>Seed: ${escapeHtml(seed)}</span></div>
      <h3>${escapeHtml(problem.title)}</h3>
      <div class="problem-prompt"><strong>Your task</strong><p>${escapeHtml(problem.question)}</p></div>
      <button id="reveal-solution" class="button button-secondary" type="button">Reveal worked solution</button>
      <div id="worked-solution" class="worked-solution" hidden>
        <h4>Suggested approach</h4>
        <p>${escapeHtml(problem.solution)}</p>
      </div>`;
    card.querySelector("#reveal-solution").addEventListener("click", (event) => {
      const solution = card.querySelector("#worked-solution");
      const isHidden = solution.hidden;
      solution.hidden = !isHidden;
      event.currentTarget.textContent = isHidden ? "Hide worked solution" : "Reveal worked solution";
    });
  }

  document.getElementById("generate-problem").addEventListener("click", renderProblem);
  document.getElementById("problem-seed").addEventListener("keydown", (event) => {
    if (event.key === "Enter") renderProblem();
  });
  renderProblem();
})();
