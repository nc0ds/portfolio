import en from '../locales/en-us.mjs';

const { localStorage } = window;
const lang = localStorage.getItem('nathancaio_portfolio@language');

const currentUserLanguage = window.navigator.language;

if (currentUserLanguage !== 'pt-BR') {
  localStorage.setItem('en-us');
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
