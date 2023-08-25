import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryContainer = document.querySelector(".gallery");

function renderGallery() {
  const galleryHTML = galleryItems
    .map(
      (item) => `
      <div class="gallery__item">
        <a class="gallery__link" href="${item.orginal}">
          <img
            class="gallery__image"
            src="${item.preview}"
            data-source="${item.original}"
            alt="${item.description}"
          />
        </a>
      </div>
    `
    )
    .join("");

  galleryContainer.innerHTML = galleryHTML;
}
galleryContainer.addEventListener("click", (event) => {
  event.preventDefault();

  const blockOnSave = document.querySelectorAll(".gallery__image");
  for (const image of blockOnSave) {
    image.addEventListener("click", (event) => {
      event.preventDefault();
    });
  }
});
