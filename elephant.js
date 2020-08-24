(function () {
  if (window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

  const happy_elephants = document.querySelector('.happy-elephants');
  
  const flicker = function() {
    happy_elephants.style.opacity = Math.random();
    window.setTimeout(function () {
      happy_elephants.style.opacity = 1;
      window.setTimeout(flicker, Math.floor(Math.random() * 3000));
    }, Math.floor(Math.random() * 150));    
  }

  window.setTimeout(flicker, 2000);
}());