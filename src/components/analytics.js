// analytics.js
export const pageview = (url) => {
  window.gtag("config", import.meta.env.VITE_GA_ID, {
    page_path: url,
  });
};
