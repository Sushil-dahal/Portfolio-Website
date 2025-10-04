// Mobile drawer open/close
const drawer = document.getElementById('drawer');
const openMenu = document.getElementById('openMenu');
const links = drawer.querySelectorAll('.jump');

const toggleDrawer = (open) => {
  if(open){
    drawer.classList.add('open');
    drawer.setAttribute('aria-hidden','false');
  } else {
    drawer.classList.remove('open');
    drawer.setAttribute('aria-hidden','true');
  }
};

openMenu.addEventListener('click', () => toggleDrawer(true));
drawer.addEventListener('click', e => { if(e.target === drawer) toggleDrawer(false); });
links.forEach(a => a.addEventListener('click', () => toggleDrawer(false)));

// Back-to-top button
const toTop = document.getElementById('toTop');
window.addEventListener('scroll', () => {
  toTop.classList.toggle('show', window.scrollY > 600);
});
toTop.addEventListener('click', () => window.scrollTo({top:0, behavior:'smooth'}));
