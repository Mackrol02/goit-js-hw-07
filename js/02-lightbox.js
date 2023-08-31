import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryContainer = document.querySelector(".gallery");


  const galleryHTML = galleryItems
    .map(
      (item) => `
    <li class="gallery__item">
      <a class="gallery__link" href="${item.original}">
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




  const lightbox = new SimpleLightbox(".gallery a", {
    captions: true,

    captionsData: "alt",

    captionPosition: "bottom",

    captionDelay: 250,
  });



