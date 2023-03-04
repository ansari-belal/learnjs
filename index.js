const toggleMenu = document.querySelector('.toggle-menu');
const sidebarMenu = document.querySelector('.sidebar-menu');
const wrapper = document.querySelector('.nav_wrapper');
const copyBtn = document.getElementById('copy');
const header = document.getElementById('header');


toggleMenu.addEventListener('click', function() {
  sidebarMenu.classList.add('show-menu');
  setTimeout(function() {
    wrapper.classList.add('show_nav_wrapper');
  }, 150);
});

wrapper.addEventListener('click', function() {
  sidebarMenu.classList.remove('show-menu');
  wrapper.classList.remove('show_nav_wrapper');
  //sidebarMenu.scrollTop = 0
});


window.addEventListener('scroll', (e) => {
  if(window.scrollY > 100){
     header.style.transition = "transform 0.3s ease"
     header.style.transform = "translateY(-100%)"
  }else {
     header.style.transition = "transform 0.3s ease"
     header.style.transform = "translateY(0)"
  }
})

async function copyToClipboard(text) {
  try {
    await navigator.clipboard.writeText(text);
    copyBtn.innerText = "copied"
    console.log('Text copied to clipboard');
  } catch (err) {
    console.error('Failed to copy text: ', err);
  }
}

copyBtn.addEventListener('click', (e) => {
  const text = e.target.parentNode.nextElementSibling.firstElementChild.firstElementChild.innerText
  copyToClipboard(text)
})