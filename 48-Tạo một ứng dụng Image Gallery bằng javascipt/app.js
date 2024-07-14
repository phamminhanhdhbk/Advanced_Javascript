let images = [];

function uploadImage() {
  const fileInput = document.getElementById('fileInput');
  const files = fileInput.files;

  for (let i = 0; i < files.length; i++) {
    const file = files[i];
    const reader = new FileReader();

    reader.onload = function(e) {
      const imageData = e.target.result;
      const imageObj = { data: imageData, id: Date.now() };
      images.push(imageObj);
      renderImages();
    };

    reader.readAsDataURL(file);
  }

  fileInput.value = ''; // Clear file input after upload
}

function renderImages() {
  const imageGrid = document.getElementById('imageGrid');
  imageGrid.innerHTML = '';

  images.forEach(image => {
    const div = document.createElement('div');
    div.classList.add('grid-item');

    const img = document.createElement('img');
    img.src = image.data;
    img.alt = 'Image';
    img.onclick = function() {
      showFullImage(image.data);
    };

    const deleteButton = document.createElement('button');
    deleteButton.innerText = 'Delete';
    deleteButton.onclick = function() {
      deleteImage(image.id);
    };

    div.appendChild(img);
    div.appendChild(deleteButton);
    imageGrid.appendChild(div);
  });
}

function deleteImage(id) {
  images = images.filter(image => image.id !== id);
  renderImages();
}

function showFullImage(imageData) {
  const fullImageView = document.getElementById('fullImageView');
  const fullImage = document.getElementById('fullImage');
  fullImage.src = imageData;
  fullImageView.style.display = 'block';
}

function closeFullImage() {
  const fullImageView = document.getElementById('fullImageView');
  fullImageView.style.display = 'none';
}
