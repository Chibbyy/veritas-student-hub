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

const favoriteButtons = document.querySelectorAll('.favorite-btn');

function getFavorites() {
  const saved = localStorage.getItem('veritas-favorites');
  return saved ? JSON.parse(saved) : [];
}

function saveFavorites(favorites) {
  localStorage.setItem('veritas-favorites', JSON.stringify(favorites));
}

function updateStar(button, isFavorite) {
  button.textContent = isFavorite ? '★' : '☆';
}

const currentFavorites = getFavorites();

favoriteButtons.forEach(function (button) {
  const id = button.getAttribute('data-id');
  updateStar(button, currentFavorites.includes(id));

  button.addEventListener('click', function () {
    let favorites = getFavorites();
    const id = button.getAttribute('data-id');

    if (favorites.includes(id)) {
      favorites = favorites.filter(function (favId) { return favId !== id; });
    } else {
      favorites.push(id);
    }

    saveFavorites(favorites);
    updateStar(button, favorites.includes(id));
  });
});