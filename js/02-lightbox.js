import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryContainer = document.querySelector(".gallery");

function renderGallery() {
  const galleryHTML = galleryItems
    .map(
      (item) => `
    <li class="gallery__item">
      <a class="gallery__link" href="${large - image.jpg}">
        <img
          class="gallery__image"
          src="${small - image.jpg}"
          alt="Image description"
        />
      </a>
    </li>
  `
    )
    .join("");

  galleryContainer.innerHTML = galleryHTML;
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

initLightbox();

console.log(galleryItems);
