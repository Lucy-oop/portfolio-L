const toggle = document.getElementById('modeToggle');
  const body = document.body;

  // Check if user previously selected mode
  if (localStorage.getItem('theme') === 'light') {
    body.classList.add('light-mode');
    toggle.checked = true;
  }

  toggle.addEventListener('change', () => {
    body.classList.toggle('light-mode');
    if (body.classList.contains('light-mode')) {
      localStorage.setItem('theme', 'light');
    } else {
      localStorage.setItem('theme', 'dark');
    }
  });



// preloader

const preloader = document.querySelector('#preloader');
if(preloader){
  window.addEventListener('load', () =>{
    preloader.remove();

  });
}

