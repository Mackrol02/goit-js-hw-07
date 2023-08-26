import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryContainer = document.querySelector(".gallery");

function renderGallery() {
  const galleryHTML = galleryItems
    .map(
      (item) => `
    <li class="gallery__item">
      <a class="gallery__link" href="${item.orginal}">
        <img
          class="gallery__image"
          src="${item.preview}"
          alt="${item.description}"
        />
      </a>
    </li>
  `
    )
    .join("");
  galleryContainer.insertAdjacentHTML("afterbegin", galleryHTML);
  galleryContainer.addEventListener("click", initLightbox);
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

console.log(galleryItems);
