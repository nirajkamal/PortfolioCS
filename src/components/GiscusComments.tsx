import { useEffect } from 'react';

export function GiscusComments() {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://giscus.app/client.js';
    script.async = true;
    script.crossOrigin = 'anonymous';
    
    // Set attributes for Giscus configuration
    script.setAttribute('data-repo', 'nirajkamal/nirajkamal.github.io');
    script.setAttribute('data-repo-id', 'R_kgDOQFk1LQ');
    script.setAttribute('data-category', 'General');
    script.setAttribute('data-category-id', 'DIC_kwDOQFk1Lc4CxMLG');
    script.setAttribute('data-mapping', 'title');
    script.setAttribute('data-strict', '1');
    script.setAttribute('data-reactions-enabled', '1');
    script.setAttribute('data-reactions-position', 'top');
    script.setAttribute('data-emit-metadata', '0');
    script.setAttribute('data-input-position', 'top');
    script.setAttribute('data-theme', getTheme());
    script.setAttribute('data-lang', 'en');
    script.setAttribute('data-loading', 'lazy');

    const commentsContainer = document.getElementById('giscus');
    if (commentsContainer) {
      commentsContainer.appendChild(script);
    }

    // Listen for theme changes
    const handleThemeChange = () => {
      const theme = getTheme();
      const giscusIframe = document.querySelector('iframe.giscus-frame') as HTMLIFrameElement;
      if (giscusIframe) {
        giscusIframe.contentWindow?.postMessage(
          { giscus: { setConfig: { theme } } },
          'https://giscus.app'
        );
      }
    };

    const observer = new MutationObserver(() => {
      const currentTheme = getTheme();
      const giscusIframe = document.querySelector('iframe.giscus-frame') as HTMLIFrameElement;
      if (giscusIframe) {
        giscusIframe.contentWindow?.postMessage(
          { giscus: { setConfig: { theme: currentTheme } } },
          'https://giscus.app'
        );
      }
    });

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class'],
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div 
      className="giscus-container"
      style={{ marginTop: '2rem', paddingTop: '1.5rem', borderTop: '2px solid var(--border)' }}
    >
      <div 
        id="giscus" 
        className="giscus"
        style={{ minHeight: '400px' }}
      />
    </div>
  );
}

function getTheme(): string {
  // Check if dark mode is enabled
  if (document.documentElement.classList.contains('dark')) {
    return 'dark';
  }
  return 'light';
}
