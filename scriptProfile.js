

let options = {
    root: null,
    rootMargin: "5px",
    threshold: 0.1,
  };

  let callback = function(entries, observer) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('intersecting');
        }
    })
  };
  
  let observer = new IntersectionObserver(callback, options);


  let targets = document.querySelectorAll('.obs');
  targets.forEach(target => {
    observer.observe(target);
  })

  // переход обратно на index.html


  let backBtn = document.querySelector('.back');

backBtn.addEventListener('click', () => {
  window.location.href = "index.html";
});
window.addEventListener('keyup', (e) => {
  if (e.code == "Escape") {
    window.location.href = "index.html";
  }
});




