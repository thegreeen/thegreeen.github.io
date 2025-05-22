// Theme toggle functionality
document.addEventListener('DOMContentLoaded', () => {
  const themeToggle = document.querySelector('.theme-toggle');
  const themeIcon = document.getElementById('theme-icon');
  const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');
  
  // Check for saved theme preference or use the system preference
  const currentTheme = localStorage.getItem('theme') || 
    (prefersDarkScheme.matches ? 'dark' : 'light');
  
  // Set initial theme
  document.documentElement.setAttribute('data-theme', currentTheme);
  themeIcon.innerText = currentTheme === 'dark' ? '🌙' : '☀️';
  
  // Toggle theme when clicked
  themeToggle.addEventListener('click', () => {
    const newTheme = document.documentElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
    
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    themeIcon.innerText = newTheme === 'dark' ? '🌙' : '☀️';
  });
  
  // Create animated chart waves (for decoration)
  createChartWaves();
  highlightCurrentNav();
});

// Highlight current navigation item based on URL
function highlightCurrentNav() {
  const currentPath = window.location.pathname;
  const navLinks = document.querySelectorAll('nav a');
  
  navLinks.forEach(link => {
    const linkPath = new URL(link.href).pathname;
    
    if (
      (currentPath === '/' && linkPath === '/') || 
      (currentPath !== '/' && linkPath !== '/' && currentPath.includes(linkPath))
    ) {
      link.classList.add('active');
    }
  });
}

// Create decorative chart waves
function createChartWaves() {
  const cards = document.querySelectorAll('.card');
  
  cards.forEach(card => {
    // Add chart waves to all cards
    if (true) {
      const wave = document.createElement('div');
      wave.classList.add('chart-wave');
      card.appendChild(wave);
      
      // Generate random wave path
      const width = card.offsetWidth;
      const height = 60;
      const points = 12;
      
      let pathData = `M0,${height} `;
      
      for (let i = 0; i <= points; i++) {
        const x = i * (width / points);
        const randomY = Math.random() * 30 + 15;
        pathData += `L${x},${randomY} `;
      }
      
      pathData += `L${width},${height} L0,${height}Z`;
      
      const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
      svg.setAttribute('viewBox', `0 0 ${width} ${height}`);
      svg.style.position = 'absolute';
      svg.style.bottom = '0';
      svg.style.left = '0';
      svg.style.width = '100%';
      svg.style.height = '60px';
      svg.style.zIndex = '0';
      svg.style.opacity = '0.2';
      
      const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
      path.setAttribute('d', pathData);
      path.setAttribute('fill', 'var(--chart-color)');
      
      svg.appendChild(path);
      wave.appendChild(svg);
    }
  });
}

// Animate progress bars on page load
document.addEventListener('DOMContentLoaded', () => {
  const progressBars = document.querySelectorAll('.progress-fill');
  
  // Add delay before animation for a nice effect
  setTimeout(() => {
    progressBars.forEach(bar => {
      const width = bar.style.width;
      bar.style.width = '0';
      
      setTimeout(() => {
        bar.style.width = width;
      }, 300);
    });
  }, 500);
});