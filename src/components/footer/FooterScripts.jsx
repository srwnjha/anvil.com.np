import { useEffect } from 'react';

const useFooterScripts = () => {
  useEffect(() => {
    const base = process.env.PUBLIC_URL || '';
    const sources = [
      base + '/assets/js/bootstrap.min.js',
    ];

    const loaded = [];
    sources.forEach((src) => {
      if (document.querySelector(`script[src="${src}"]`)) return;
      const script = document.createElement('script');
      script.src = src;
      script.async = false;
      script.onerror = () => console.error(`Failed to load: ${src}`);
      document.body.appendChild(script);
      loaded.push(script);
    });

    return () => {
      loaded.forEach((s) => s.parentNode?.removeChild(s));
    };
  }, []);
};

export default useFooterScripts;
