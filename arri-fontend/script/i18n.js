const i18n = {}

function i18n(lang) {
  const i18n_tmp = import(`@/i18n/${lang}`);
  if (i18n_tmp != null) i18n_data = i18n_tmp;
  
}

export default i18n