const scriptElements = Array.from(document.querySelectorAll('script'));
const data = await Promise.all(scriptElements.map(async (script) => {
  if (script.src) {
    try {
      const response = await fetch(script.src);
      const text = await response.text();
      return { type: 'external', src: script.src, code: text };
    } catch (e) {
      return { type: 'external', src: script.src, error: 'Could not fetch script content due to cross-origin restrictions or network error.' };
    }
  } else {
    return { type: 'inline', code: script.textContent };
  }
}));
