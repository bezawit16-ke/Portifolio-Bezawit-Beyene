// Scroll-reveal animations
document.addEventListener('DOMContentLoaded', function () {
  var revealEls = document.querySelectorAll('.reveal');
  var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });
  revealEls.forEach(function (el) { observer.observe(el); });

  // stagger index vars for children
  document.querySelectorAll('.reveal-stagger').forEach(function (group) {
    var children = group.querySelectorAll('.reveal-child');
    children.forEach(function (child, i) {
      child.style.setProperty('--i', i);
    });
  });
});

// Case study data — written from actual resume details, no invented "live" claims
var caseStudies = {
  'evangadi-ai-forum': {
    title: 'Evangadi AI Forum',
    tags: ['Node.js', 'Gemini API', 'RAG'],
    problem: 'Evangadi\'s student community needed a way to get accurate answers quickly instead of digging through old forum threads.',
    approach: 'Built as part of a team, using Node.js and MySQL for the backend, with a Retrieval-Augmented Generation (RAG) pipeline on top of the Gemini API so answers stay grounded in real forum content and chat history rather than hallucinated responses.',
    outcome: 'Delivered a working full-stack AI forum with persistent chat history and REST APIs connecting the frontend to the AI layer.',
    repo: 'https://github.com/bezawit16-ke/evangadi-ai-forum'
  },
  'chatgpt-clone': {
    title: 'ChatGPT Clone',
    tags: ['JavaScript', 'AI Integration'],
    problem: 'Wanted hands-on practice building a real conversational AI interface from scratch, rather than only consuming AI APIs at a surface level.',
    approach: 'Rebuilt the core chat experience — message threading, input handling, and AI response integration — using JavaScript.',
    outcome: 'A working chat interface that mirrors core ChatGPT functionality end-to-end, used as a personal learning project in AI integration.',
    repo: 'https://github.com/bezawit16-ke/chatgpt-clone'
  },
  'movienetdb': {
    title: 'MovieNetDB',
    tags: ['Web Dev', 'Database'],
    problem: 'Needed a project to practice structuring and querying a real relational dataset behind a usable web interface.',
    approach: 'Built a movie database web app supporting browsing, searching, and organizing film records.',
    outcome: 'A functional database-driven web app demonstrating full-stack CRUD and search functionality.',
    repo: 'https://github.com/bezawit16-ke/movienetdb'
  },
  'akaki-adventist-school': {
    title: 'Student Registration System',
    tags: ['Web Dev', 'MySQL'],
    problem: 'Akaki Adventist Boarding School needed a proper digital system to register and manage student records instead of manual paperwork.',
    approach: 'Built a full registration system with a MySQL database backend to store and manage student information reliably.',
    outcome: 'A working registration system adopted for real use at the school.',
    repo: 'https://github.com/bezawit16-ke/akaki-adventist-school'
  },
  'stock-sentiment': {
    title: 'Stock Sentiment Analysis',
    tags: ['Python', 'NLP', '10 Academy'],
    problem: 'Wanted to test whether financial news sentiment actually correlates with stock price movement, a common but often untested assumption.',
    approach: 'Used Python and NLP techniques to score news sentiment, then compared it against historical stock price movements as part of the 10 Academy program.',
    outcome: 'A documented analysis (see the full report/notebook on GitHub) exploring the relationship between sentiment and price action.',
    repo: 'https://github.com/bezawit16-ke/new-sentiment-stock-analysis'
  },
  'fintech-analytics': {
    title: 'Fintech Customer Analytics',
    tags: ['Python', 'Sentiment Analysis'],
    problem: 'Ethiopian banks (CBE, BOA, Dashen) have limited visibility into what drives customer satisfaction in their mobile apps.',
    approach: 'Collected and analyzed banking app reviews using Python and sentiment analysis to surface satisfaction drivers.',
    outcome: 'Identified concrete patterns in what customers praise and complain about across the three banks — documented in the repo.',
    repo: 'https://github.com/bezawit16-ke/customer-experience-analytics'
  },
  'insurance-risk': {
    title: 'Insurance Risk Analytics',
    tags: ['Python', 'Data Analysis'],
    problem: 'Insurers need to segment risk accurately to price policies fairly and sustainably.',
    approach: 'Built a Python-based risk analysis exploring segmentation approaches and the data patterns behind them.',
    outcome: 'A structured risk segmentation analysis with documented insights, available in the repo.',
    repo: 'https://github.com/bezawit16-ke/insurance-risk-analytics-acis'
  },
  'solar-challenge': {
    title: 'Solar Challenge — Week 0',
    tags: ['Python', 'Analytics'],
    problem: 'First assignment of the 10 Academy program — establishing an analytics engineering workflow from raw data.',
    approach: 'Applied Python-based data engineering and analysis fundamentals to the week\'s dataset and challenge brief.',
    outcome: 'Completed as the foundational first task of the 10 Academy analytics engineering track.',
    repo: 'https://github.com/bezawit16-ke/solar-challange-week-0'
  }
};

function openCaseStudy(key) {
  var data = caseStudies[key];
  if (!data) return;
  document.getElementById('modalTitle').textContent = data.title;
  document.getElementById('modalTags').innerHTML = data.tags.map(function (t) {
    return '<span class="tag">' + t + '</span>';
  }).join('');
  document.getElementById('modalProblem').textContent = data.problem;
  document.getElementById('modalApproach').textContent = data.approach;
  document.getElementById('modalOutcome').textContent = data.outcome;
  document.getElementById('modalRepoLink').href = data.repo;
  document.getElementById('caseStudyModal').classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeCaseStudy() {
  document.getElementById('caseStudyModal').classList.remove('open');
  document.body.style.overflow = '';
}

document.addEventListener('DOMContentLoaded', function () {
  document.querySelectorAll('[data-case-study]').forEach(function (btn) {
    btn.addEventListener('click', function () {
      openCaseStudy(btn.getAttribute('data-case-study'));
    });
  });
  document.getElementById('modalClose').addEventListener('click', closeCaseStudy);
  document.getElementById('caseStudyModal').addEventListener('click', function (e) {
    if (e.target.id === 'caseStudyModal') closeCaseStudy();
  });
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') closeCaseStudy();
  });
});
