document.onscroll = () => {
  const windowTop = document.documentElement.scrollTop;
  const headerElement = document.getElementsByTagName('header')[0];
  const i18nElement = document.getElementById('preact-i18n');

  if (windowTop > 80) {
    headerElement.classList.add('scrolled');
    i18nElement.classList.add('scrolled');
  } else {
    headerElement.classList.remove('scrolled');
    i18nElement.classList.remove('scrolled');
  }
};
const navbar = () => {
  $('.drawer').drawer();
  $('.drawer-menu-item').click(function(e) {
    if (!e.target.classList.contains('not-closed-menu-item')) {
      $('.drawer').drawer('close');
    }
  });
};

navbar();
