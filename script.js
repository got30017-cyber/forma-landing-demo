const menuToggle = document.querySelector('.menu-toggle');
const navigation = document.querySelector('.primary-navigation');
const navigationLinks = navigation.querySelectorAll('a');

function setMenu(open) {
  menuToggle.setAttribute('aria-expanded', String(open));
  menuToggle.querySelector('.menu-toggle__label').textContent = open ? 'Закрыть' : 'Меню';
  navigation.classList.toggle('is-open', open);
  document.body.classList.toggle('menu-open', open);
}

menuToggle.addEventListener('click', () => {
  setMenu(menuToggle.getAttribute('aria-expanded') !== 'true');
});

navigationLinks.forEach((link) => {
  link.addEventListener('click', () => setMenu(false));
});

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && menuToggle.getAttribute('aria-expanded') === 'true') {
    setMenu(false);
    menuToggle.focus();
  }
});

const form = document.querySelector('.contact-form');
const successMessage = form.querySelector('.form-success');
const fields = {
  name: form.elements.name,
  contact: form.elements.contact,
  description: form.elements.description,
  budget: form.elements.budget,
};

const errorElements = {
  name: document.querySelector('#name-error'),
  contact: document.querySelector('#contact-error'),
  description: document.querySelector('#description-error'),
  budget: document.querySelector('#budget-error'),
};

function setFieldError(key, message) {
  const field = fields[key];
  errorElements[key].textContent = message;
  field.setAttribute('aria-invalid', String(Boolean(message)));
}

function isValidContact(value) {
  const normalized = value.trim();
  const telegramPattern = /^@[a-zA-Z0-9_]{5,32}$/;
  const phoneDigits = normalized.replace(/\D/g, '');
  return telegramPattern.test(normalized) || (phoneDigits.length >= 10 && phoneDigits.length <= 15);
}

function validateField(key) {
  const value = fields[key].value.trim();
  let error = '';

  if (!value) {
    error = key === 'budget' ? 'Выберите ориентир бюджета.' : 'Заполните это поле.';
  } else if (key === 'name' && value.length < 2) {
    error = 'Укажите имя минимум из двух символов.';
  } else if (key === 'contact' && !isValidContact(value)) {
    error = 'Введите корректный номер телефона или Telegram-имя с @.';
  } else if (key === 'description' && value.length < 10) {
    error = 'Расскажите о задаче чуть подробнее — минимум 10 символов.';
  }

  setFieldError(key, error);
  return !error;
}

Object.entries(fields).forEach(([key, field]) => {
  field.addEventListener('blur', () => validateField(key));
  field.addEventListener('input', () => {
    if (field.getAttribute('aria-invalid') === 'true') validateField(key);
    successMessage.hidden = true;
  });
});

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const results = Object.keys(fields).map(validateField);

  if (results.every(Boolean)) {
    form.reset();
    Object.keys(fields).forEach((key) => setFieldError(key, ''));
    successMessage.hidden = false;
    successMessage.focus();
  } else {
    const firstInvalid = form.querySelector('[aria-invalid="true"]');
    firstInvalid?.focus();
  }
});

window.addEventListener('resize', () => {
  if (window.innerWidth > 800) setMenu(false);
});

const revealItems = document.querySelectorAll('[data-reveal]');
const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

if ('IntersectionObserver' in window && !reduceMotion) {
  document.body.classList.add('reveal-ready');
  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('is-visible');
      observer.unobserve(entry.target);
    });
  }, { rootMargin: '0px 0px -8%', threshold: 0.08 });

  revealItems.forEach((item) => revealObserver.observe(item));
}
