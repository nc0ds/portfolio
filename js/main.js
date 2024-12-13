import en from '../locales/en-us.mjs';

const { localStorage } = window;
const langStorageKey = 'nathancaio_portfolio@language';
const lang = localStorage.getItem(langStorageKey);

const currentUserLanguage = window.navigator.language;

if (!lang && currentUserLanguage !== 'pt-BR') {
  localStorage.setItem(langStorageKey, 'en-us');
  window.location.reload();
}

const switchLangBtn = document.querySelector(
  'button[name=switch-language-btn]'
);

switchLangBtn.addEventListener('click', () => {
  localStorage.setItem(
    'nathancaio_portfolio@language',
    lang === 'en-us' ? 'pt-br' : 'en-us'
  );
  window.location.reload();
});

if (lang === 'en-us') {
  const itens = document.querySelectorAll('[data-locale]');

  for (let i = 0; i < itens.length; i++) {
    const itemLocale = en[itens[i].getAttribute('data-locale')];

    if (itemLocale) {
      itens[i].innerHTML = itemLocale;
    }
  }
}
