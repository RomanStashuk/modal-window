import '@/sass/style.scss';

const modalWindow = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModalWindow = document.querySelector('.btn--close-modal');
const btnsShowModalWindow = document.querySelectorAll('.btn--show-modal');

for (let btnShowModalWindow of btnsShowModalWindow) {
  btnShowModalWindow.addEventListener('click', showModalWindow);
}

function showModalWindow() {
  modalWindow.classList.remove('visually-hidden');
  overlay.classList.remove('visually-hidden');
}
