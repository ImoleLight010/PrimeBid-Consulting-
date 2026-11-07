const btn = document.querySelector('.menu-btn');
const list = document.querySelector('.nav ul');
if (btn && list) {
  btn.addEventListener('click', () => {
    const open = list.classList.toggle('open');
    btn.setAttribute('aria-expanded', open);
  });
}
const year = document.getElementById('year');
if (year) year.textContent = new Date().getFullYear();
