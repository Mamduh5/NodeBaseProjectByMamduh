const supportedLanguages = ['en', 'th'];  // Add other supported languages here

/**
 * Get the language from request headers or fallback to default 'en'
 */
const getLanguage = (ctx) => {
  const lang = ctx.headers['accept-language'] || 'en';
  
  if (supportedLanguages.includes(lang) ? lang : 'en') {
    ctx.language = lang;

    return ctx.language;
  }
  else
  {
    ctx.throw(400, 'Unsupported language');
  }
  
};

export { getLanguage };
