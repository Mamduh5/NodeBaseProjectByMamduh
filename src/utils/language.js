const supportedLanguages = ['en', 'th'];  // Add other supported languages here

/**
 * Get the language from request headers or fallback to default 'en'
 */
const getLanguage = (ctx) => {
  const lang = ctx?.headers?.['accept-language'] || 'en';
  return supportedLanguages.includes(lang) ? lang : 'en';
};

export { getLanguage };
