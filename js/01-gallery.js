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

  if (event.target.classList.contains("gallery__image")) {
    const source = event.target.getAttribute("data-source");

    const instance = basicLightbox.create(`
        <img src="${source}" alt="Image description" />
      `);
    instanceshow();
  }
});

renderGallery();

console.log(galleryItems);
