import { galleryItems } from "./gallery-items.js";
// Change code below this line
const galleryContainer = document.querySelector(".gallery");
const galleryHTML = galleryItems
  .map(
    (item) => `
      <div class="gallery__item">
        <a class="gallery__link" href="${item.original}">
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
galleryContainer.insertAdjacentHTML("afterbegin", galleryHTML);
galleryContainer.addEventListener("click", imgOnClick);
function imgOnClick(evt) {
  if (evt.target.nodeName !== "IMG") {
    return;
  }
  const closeButton = (e) => {
    if (e.key === "Escape") instance.close();
  };
  const instance = basicLightbox.create(
    `<img src="${evt.target.dataset.source}" width="800" height="600">`,
    {
      onShow: () => {
        document.addEventListener("keydown", closeButton);
      },
      onClose: () => {
        document.removeEventListener("keydown", closeButton);
      },
    }
  );
  instance.show();
}
const blockOnSave = document.querySelectorAll(".gallery__image");
for (const image of blockOnSave) {
  image.addEventListener("click", (event) => {
    event.preventDefault();
  });
}
