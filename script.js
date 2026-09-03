const toggleButton = document.getElementById('theme-toggle');

toggleButton.addEventListener('click', function () {
  document.body.classList.toggle('dark-mode');

  if (document.body.classList.contains('dark-mode')) {
    toggleButton.textContent = '☀️ Light Mode';
  } else {
    toggleButton.textContent = '🌙 Dark Mode';
  }
});

const searchInput = document.getElementById('search-input');
const searchableItems = document.querySelectorAll('.searchable');

searchInput.addEventListener('input', function () {
  const query = searchInput.value.toLowerCase().trim();

  searchableItems.forEach(function (item) {
    const text = item.getAttribute('data-search');
    if (text.includes(query)) {
      item.style.display = '';
    } else {
      item.style.display = 'none';
    }
  });
});

const backToTopButton = document.getElementById('back-to-top');

window.addEventListener('scroll', function () {
  if (window.scrollY > 300) {
    backToTopButton.classList.add('show');
  } else {
    backToTopButton.classList.remove('show');
  }
});

backToTopButton.addEventListener('click', function () {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

const faqQuestions = document.querySelectorAll('.faq-question');

faqQuestions.forEach(function (question) {
  question.addEventListener('click', function () {
    const item = question.parentElement;
    item.classList.toggle('active');
  });
});