import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryContainer = document.querySelector(".gallery");

function renderGallery() {
  const galleryHTML = galleryItems
    .map(
      (item) => `
    <li class="gallery__item">
      <a class="gallery__link" href="${item.largeImage}">
        <img
          class="gallery__image"
          src="${item.smallImage}"
          alt="${item.alt}"
        />
      </a>
    </li>
  `
    )
    .join("");

  galleryContainer.gallery;

  innerHTML = galleryHTML;
}

function initLightbox() {
  const lightbox = new SimpleLightbox(".gallery a", {
    captions: true,

    captionsData: "alt",

    captionPosition: "bottom",

    captionDelay: 250,
  });

  lightbox.on("error", () => {
    console.log("Error loading image.");
  });
}

renderGallery();

initLight;
initLightbox();

console.log(galleryItems);
