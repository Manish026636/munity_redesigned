import React from 'react';
import { useTranslation } from 'react-i18next';

function Translate() {
  const { t, i18n } = useTranslation();

  function handleClick(lang) {
    i18n.changeLanguage(lang);
  }

  return (
    <div>
      <button onClick={() => handleClick('en')}>English</button>
      <button onClick={() => handleClick('fr')}>French</button>
      <div>{t('Welcome to my app')}</div>
    </div>
  );
}

export default Translate;