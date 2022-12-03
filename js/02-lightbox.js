import { galleryItems } from "./gallery-items.js"
// Change code below this line
const galleryEl = document.querySelector(".gallery")

const createImages = (options) => options.map(
    ({ preview, original, description }) =>
      `<a class="gallery__link" href="${original}">
      <img class = "gallery__image" src= "${preview}"  alt= "${description}"></a>`)
    .join("");

galleryEl.insertAdjacentHTML("beforeend", createImages(galleryItems))


  const gallery = new SimpleLightbox(".gallery a", {
    captionsData: "alt",
    captionDelay: 250,
  })



