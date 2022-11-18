import '@/sass/style.scss';

const modalWindow = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModalWindow = document.querySelector('.btn--close-modal');
const btnsShowModalWindow = document.querySelectorAll('.btn--show-modal');

for (let btnShowModalWindow of btnsShowModalWindow) {
  btnShowModalWindow.addEventListener('click', showModalWindow);
}

btnCloseModalWindow.addEventListener('click', closeModalWindow);
overlay.addEventListener('click', closeModalWindow);

document.addEventListener('keydown', (evt) => {
  if (
    evt.key === 'Escape' &&
    !modalWindow.classList.contains('visually-hidden')
  ) {
    closeModalWindow();
  }
});

function showModalWindow() {
  modalWindow.classList.remove('visually-hidden');
  overlay.classList.remove('visually-hidden');
}

function closeModalWindow() {
  modalWindow.classList.add('visually-hidden');
  overlay.classList.add('visually-hidden');
}
