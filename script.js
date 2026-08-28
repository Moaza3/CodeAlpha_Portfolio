const skills = [
  { icon: '🌐', name: 'HTML' },
  { icon: '🎨', name: 'CSS' },
  { icon: '⚡', name: 'JavaScript' },
  { icon: '⚛️', name: 'React' },
  { icon: '🐘', name: 'PHP' },
  { icon: '🐍', name: 'Python' },
  { icon: '➕', name: 'C++' },
  { icon: '🗄️', name: 'MySQL' },
  { icon: '🔧', name: 'Git & GitHub' },
  { icon: '📱', name: 'Responsive Design' },
];

const experience = [
  {
    role: 'Frontend Developer Intern',
    company: 'Code Alpha',
    status: 'Current',
    desc: 'Focusing on frontend web development — building interactive, polished user interfaces with HTML, CSS, and JavaScript.',
  },
  {
    role: 'Full Stack Web Developer Intern',
    company: 'Code Saviours',
    status: 'Current',
    desc: 'Working across the full stack — handling both frontend and backend development in a real software house environment.',
  },
];

const projects = [
  {
    emoji: '💼',
    title: 'CodeAlpha Portfolio',
    desc: 'This very portfolio site — built with HTML, CSS, and JavaScript during my Code Alpha internship.',
    tags: ['HTML', 'CSS', 'JavaScript'],
    code: 'https://github.com/Moaza3/CodeAlpha_Portfolio',
    theme: 'teal',
  },
  {
    emoji: '🎓',
    title: 'Forces Academy — Fullstack System',
    desc: 'A full-stack web application built during my Code Saviours internship, covering both frontend and backend.',
    tags: ['PHP', 'MySQL'],
    code: 'https://github.com/Moaza3/forces-academy-fullstack-codesaviours-si26-moaza',
    theme: 'navy',
  },
  {
    emoji: '🧮',
    title: 'CodeAlpha Calculator',
    desc: 'A calculator built with vanilla JavaScript as part of my Code Alpha tasks.',
    tags: ['JavaScript'],
    code: 'https://github.com/Moaza3/CodeAlpha_Calculator',
    theme: 'gold',
  },
  {
    emoji: '🖼️',
    title: 'CodeAlpha Image Gallery',
    desc: 'An interactive image gallery built with JavaScript, part of my Code Alpha internship tasks.',
    tags: ['JavaScript'],
    code: 'https://github.com/Moaza3/codealpha_imagegallery',
    theme: 'pink',
  },
  {
    emoji: '🎬',
    title: 'Netflix Clone',
    desc: 'A Netflix landing page clone focused on layout and styling with HTML and CSS.',
    tags: ['HTML', 'CSS'],
    code: 'https://github.com/Moaza3/netflix-clone-html-css',
    theme: 'navy',
  },
  {
    emoji: '📚',
    title: 'Course Registration System',
    desc: 'A course registration system built in Python.',
    tags: ['Python'],
    code: 'https://github.com/Moaza3/course-registration-system',
    theme: 'sky',
  },
];

const skillsGrid = document.getElementById('skillsGrid');
skills.forEach(function (skill) {
  const card = document.createElement('div');
  card.className = 'skill-card tilt reveal';
  card.innerHTML = `
    <div class="skill-icon-wrap">
      <span class="skill-icon">${skill.icon}</span>
    </div>
    <span class="skill-name">${skill.name}</span>
  `;
  skillsGrid.appendChild(card);
});

const timeline = document.getElementById('timeline');
experience.forEach(function (job) {
  const item = document.createElement('div');
  item.className = 'timeline-item tilt reveal';
  item.innerHTML = `
    <div class="timeline-dot"></div>
    <div>
      <span class="timeline-status">${job.status}</span>
      <div class="timeline-role">${job.role}</div>
      <div class="timeline-company">${job.company}</div>
      <p class="timeline-desc">${job.desc}</p>
    </div>
  `;
  timeline.appendChild(item);
});

const projectsGrid = document.getElementById('projectsGrid');
projects.forEach(function (project) {
  const card = document.createElement('div');
  card.className = 'project-card tilt reveal';
  card.innerHTML = `
    <div class="project-thumb theme-${project.theme}">${project.emoji}</div>
    <div class="project-body">
      <div class="project-title">${project.title}</div>
      <p class="project-desc">${project.desc}</p>
      <div class="project-tags">
        ${project.tags.map(function (tag) { return `<span class="tag">${tag}</span>`; }).join('')}
      </div>
      <div class="project-links">
        <a href="${project.code}" target="_blank" rel="noopener noreferrer">View Code →</a>
      </div>
    </div>
  `;
  projectsGrid.appendChild(card);
});

const cards = document.querySelectorAll('.tilt');
cards.forEach(function (card) {
  card.addEventListener('mousemove', function (event) {
    const box = card.getBoundingClientRect();
    const x = (event.clientX - box.left) / box.width - 0.5;
    const y = (event.clientY - box.top) / box.height - 0.5;
    const rotateX = -y * 7;
    const rotateY = x * 7;
    card.style.transform = `perspective(700px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-6px)`;
  });
  card.addEventListener('mouseleave', function () {
    card.style.transform = '';
  });
});

const cursorGlow = document.getElementById('cursorGlow');
const hero = document.querySelector('.hero');

document.addEventListener('mousemove', function (event) {
  cursorGlow.style.left = event.clientX + 'px';
  cursorGlow.style.top = event.clientY + 'px';
  const heroBox = hero.getBoundingClientRect();
  cursorGlow.style.opacity = event.clientY < heroBox.bottom ? '1' : '0';
});

const shapes = document.querySelectorAll('.shape');
hero.addEventListener('mousemove', function (event) {
  const box = hero.getBoundingClientRect();
  const x = (event.clientX - box.left) / box.width - 0.5;
  const y = (event.clientY - box.top) / box.height - 0.5;
  shapes.forEach(function (shape, index) {
    const strength = (index + 1) * 14;
    const moveX = x * strength;
    const moveY = y * strength;
    shape.style.transform = `translate(${moveX}px, ${moveY}px)`;
  });
});

const revealObserver = new IntersectionObserver(function (entries) {
  entries.forEach(function (entry) {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });

const revealElements = document.querySelectorAll('.reveal');
revealElements.forEach(function (element) {
  revealObserver.observe(element);
});

// Animated count-up for the About section stats
const statNumbers = document.querySelectorAll('.stat-number');
const statObserver = new IntersectionObserver(function (entries) {
  entries.forEach(function (entry) {
    if (entry.isIntersecting) {
      const el = entry.target;
      const target = parseInt(el.dataset.count, 10);
      let current = 0;
      const step = Math.max(1, Math.round(target / 30));
      const timer = setInterval(function () {
        current += step;
        if (current >= target) {
          current = target;
          clearInterval(timer);
        }
        el.textContent = current;
      }, 40);
      statObserver.unobserve(el);
    }
  });
}, { threshold: 0.4 });

statNumbers.forEach(function (el) {
  statObserver.observe(el);
});

const navLinks = document.querySelectorAll('.nav-links a');
const aboutTextWrap = document.getElementById('aboutTextWrap');
const aboutToggle = document.getElementById('aboutToggle');

function setAboutExpanded(expanded) {
  aboutTextWrap.classList.toggle('expanded', expanded);
  aboutToggle.textContent = expanded ? 'Read less ↑' : 'Read more ↓';
}

aboutToggle.addEventListener('click', function () {
  setAboutExpanded(!aboutTextWrap.classList.contains('expanded'));
});

navLinks.forEach(function (link) {
  link.addEventListener('click', function (event) {
    event.preventDefault();
    const id = link.getAttribute('href');
    const section = document.querySelector(id);
    if (id === '#about') {
      setAboutExpanded(true);
    }
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});

const navbar = document.getElementById('navbar');
window.addEventListener('scroll', function () {
  navbar.style.boxShadow = window.scrollY > 20 ? '0 6px 20px rgba(47,65,86,0.1)' : 'none';
});

const year = document.getElementById('year');
year.textContent = new Date().getFullYear();

// Feedback / rating widget
const FEEDBACK_KEY = 'moaza-portfolio-feedback';
const stars = document.querySelectorAll('.star');
const feedbackText = document.getElementById('feedbackText');
const submitFeedback = document.getElementById('submitFeedback');
const feedbackThanks = document.getElementById('feedbackThanks');
const feedbackAverage = document.getElementById('feedbackAverage');
let selectedRating = 0;

function paintStars(value) {
  stars.forEach(function (star) {
    const starValue = parseInt(star.dataset.value, 10);
    star.classList.toggle('active', starValue <= value);
  });
}

function loadFeedback() {
  try {
    const raw = localStorage.getItem(FEEDBACK_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

function renderAverage() {
  const entries = loadFeedback();
  if (entries.length === 0) {
    feedbackAverage.textContent = '';
    return;
  }
  const total = entries.reduce(function (sum, entry) { return sum + entry.rating; }, 0);
  const avg = (total / entries.length).toFixed(1);
  feedbackAverage.textContent =
    'Average rating so far: ' + avg + ' ★ (' + entries.length + (entries.length === 1 ? ' review' : ' reviews') + ' on this device)';
}

stars.forEach(function (star) {
  star.addEventListener('mouseenter', function () {
    paintStars(parseInt(star.dataset.value, 10));
  });
  star.addEventListener('mouseleave', function () {
    paintStars(selectedRating);
  });
  star.addEventListener('click', function () {
    selectedRating = parseInt(star.dataset.value, 10);
    paintStars(selectedRating);
  });
});

submitFeedback.addEventListener('click', function () {
  if (selectedRating === 0) {
    feedbackThanks.textContent = 'Please pick a star rating first 🙂';
    feedbackThanks.style.color = '#c0665a';
    return;
  }

  const entries = loadFeedback();
  entries.push({
    rating: selectedRating,
    text: feedbackText.value.trim(),
    date: new Date().toISOString(),
  });

  try {
    localStorage.setItem(FEEDBACK_KEY, JSON.stringify(entries));
  } catch {
    // storage unavailable, still show a thank-you
  }

  feedbackThanks.style.color = '';
  feedbackThanks.textContent = 'Thank you for your feedback! 💛';
  feedbackText.value = '';
  selectedRating = 0;
  paintStars(0);
  renderAverage();
});

renderAverage();