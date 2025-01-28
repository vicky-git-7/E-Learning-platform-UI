document.addEventListener('DOMContentLoaded', () => {
    const progress = document.getElementById('progress');
    let progressValue = 0;
  
    setInterval(() => {
      if (progressValue < 100) {
        progressValue += 10;
        progress.style.width = `${progressValue}%`;
      }
    }, 1000);
  });
  