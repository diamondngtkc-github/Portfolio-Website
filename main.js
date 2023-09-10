document.getElementById('back-to-top-button').addEventListener('click', function() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
  
  window.addEventListener('scroll', function() {
    var button = document.getElementById('back-to-top-button');
    if (window.pageYOffset > 200) {
      button.style.display = 'block';
    } else {
      button.style.display = 'none';
    }
  });
  