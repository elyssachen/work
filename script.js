window.addEventListener('DOMContentLoaded', () => {
    const birds = document.querySelectorAll('.bird');
  
    const cornerLabel = document.createElement('div');
    cornerLabel.className = 'corner-title';
    document.body.appendChild(cornerLabel);
  
    birds.forEach((bird, i) => {
      bird.style.opacity = '0';
      bird.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
      bird.classList.add('loading');
  
      setTimeout(() => {
        bird.style.opacity = '1';
        bird.classList.remove('loading');
      }, i * 400);
  
      const originalSrc = bird.getAttribute('src');
      const greySrc = bird.getAttribute('data-hover');
  
      bird.addEventListener('mouseenter', () => {
        bird.setAttribute('src', greySrc);
        cornerLabel.innerText = bird.dataset.title;
        cornerLabel.style.opacity = '1';
      });
  
      bird.addEventListener('mouseleave', () => {
        bird.setAttribute('src', originalSrc);
        cornerLabel.style.opacity = '0';
      });
  
      bird.addEventListener('click', () => {
        const projectName = bird.getAttribute('data-project');
       const projectRoutes = {
    project0: 'project/index.html',
    project1: 'project/index.html',
    project2: 'project/index.html',
    project3: 'project/index.html',
    project4: 'project/index.html',
    project5: 'project/index.html',
    project6: 'project/index.html',
    project7: 'project/index.html'
    };
  
    if (projectRoutes[projectName]) {
      window.location.href = projectRoutes[projectName];
    }
  });
    });
  });


  window.addEventListener("DOMContentLoaded", () => {
    const grad = document.querySelector(".grad");
    const vh = window.innerHeight;
    const maxOffset = 100 * vh;
    const randomOffset = Math.floor(Math.random() * maxOffset);
    grad.style.marginTop = `-${randomOffset}px`;
  });


  