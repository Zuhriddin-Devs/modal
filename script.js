const elShowModalBtn = document.querySelector('#show-modal-btn');
const elmodalExitBtn = document.querySelector('#modal-exit-btn');
const elModal = document.querySelector('.modal');
const elOverlay = document.querySelector('.overlay');

elShowModalBtn.addEventListener('click', () => {
    elModal.classList.remove('hidden');
    elOverlay.classList.remove('hidden');
});