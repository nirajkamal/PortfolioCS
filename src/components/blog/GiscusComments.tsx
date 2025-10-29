import { useEffect, useRef } from 'react';

interface GiscusCommentsProps {
  postSlug: string;
  postTitle: string;
}

export function GiscusComments({ postSlug, postTitle }: GiscusCommentsProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // Clear previous content
    containerRef.current.innerHTML = '';

    const script = document.createElement('script');
    script.src = 'https://giscus.app/client.js';
    script.async = true;
    script.crossOrigin = 'anonymous';
    
    // Giscus configuration - your actual repo settings
    script.setAttribute('data-repo', 'nirajkamal/nirajkamal.github.io');
    script.setAttribute('data-repo-id', 'R_kgDOQFk1LQ');
    script.setAttribute('data-category', 'Announcements');
    script.setAttribute('data-category-id', 'DIC_kwDOQFk1Lc4CxMLa');
    script.setAttribute('data-mapping', 'pathname');
    script.setAttribute('data-strict', '1');
    script.setAttribute('data-reactions-enabled', '1');
    script.setAttribute('data-emit-metadata', '0');
    script.setAttribute('data-input-position', 'top');
    script.setAttribute('data-theme', 'preferred_color_scheme');
    script.setAttribute('data-lang', 'en');

    script.onload = () => {
      console.log('Giscus script loaded successfully');
    };

    script.onerror = () => {
      console.error('Failed to load Giscus');
    };

    containerRef.current.appendChild(script);
  }, [postSlug, postTitle]);

  return (
    <div
      ref={containerRef}
      className="giscus-wrapper mt-8 pt-8 border-t-2 border-border"
      style={{ minHeight: '200px' }}
    />
  );
}
