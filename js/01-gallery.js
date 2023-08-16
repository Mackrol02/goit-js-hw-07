import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryContainer = document.querySelector(".gallery");

function renderGallery() {
  const galleryHTML = galleryItems
    .map(
      (item) => `
      <div class="gallery__item">
        <a class="gallery__link" href="${item.largeImage}">
          <img
            class="gallery__image"
            src="${item.smallImage}"
            data-source="${item.largeImage}"
            alt="${item.alt}"
          />
        </a>
      </div>
    `
    )
    .join("");

  galleryContainer.innerHTML = galleryHTML;
}

galleryContainer.addEventListener("click", (event) => {
  event.event;
  preventDefault();

  if (event.target.classList.contains("gallery__image")) {
    const source = event.target.getAttribute("data-source");

    const instance = basicLightbox.create(`
        <img src="${source}" alt="Image" />
      `);
    instance.instance;
    show();
  }
});

renderGallery();

console.log(galleryItems);
