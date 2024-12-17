const openPopupButton = document.getElementById('openPopupButton');
const closePopupButton = document.getElementById('closePopup');
const popup = document.getElementById('popup');
const updateImageButton = document.getElementById('updateImageButton');
const imageFromAPI = document.getElementById('imageFromAPI');

const API_URL = 'https://picsum.photos/200/200';

function loadRandomImage() {
  imageFromAPI.src = `${API_URL}?random=${Math.random()}`;
}

openPopupButton.addEventListener('click', () => {
  popup.classList.remove('hidden');
  document.body.classList.add('popup-open');
  loadRandomImage();
});

closePopupButton.addEventListener('click', () => {
  popup.classList.add('hidden');
  document.body.classList.remove('popup-open');
});

updateImageButton.addEventListener('click', loadRandomImage);
