
/**
 * Utility to handle lazy loading images with a fade-in effect
 */
export const initImageLoader = () => {
  const images = document.querySelectorAll('img[loading="lazy"]');
  
  // If IntersectionObserver is available, use it to lazy load images
  if ('IntersectionObserver' in window) {
    const imgObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target as HTMLImageElement;
          if (img.dataset.src) {
            img.src = img.dataset.src;
            img.removeAttribute('data-src');
          }
          img.classList.add('loaded');
          imgObserver.unobserve(img);
        }
      });
    });
    
    images.forEach(img => imgObserver.observe(img));
  } else {
    // Fallback for browsers that don't support IntersectionObserver
    images.forEach(img => {
      const imgElement = img as HTMLImageElement;
      if (imgElement.dataset.src) {
        imgElement.src = imgElement.dataset.src;
        imgElement.removeAttribute('data-src');
      }
      imgElement.classList.add('loaded');
    });
  }
};

// Add an event listener to load images when everything is ready
if (typeof window !== 'undefined') {
  if (document.readyState === 'complete') {
    initImageLoader();
  } else {
    window.addEventListener('load', initImageLoader);
  }
}

export default initImageLoader;
