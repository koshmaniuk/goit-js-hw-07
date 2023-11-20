import { galleryItems } from './gallery-items.js';
// Change code below this line

const list = document.querySelector(".gallery")

const markup = galleryItems.map(({preview, original, description}) => `
    <li class="gallery__item">
    <a class="gallery__link" href="${original}">
    <img class="gallery__image" src="${preview}" data-source="${original}" alt="${description}"/>
    </a>
    </li>`).join("")
    
list.insertAdjacentHTML('beforeend', markup)

list.addEventListener('click', handleClick);

function handleClick(event) {
    event.preventDefault()

if (event.target === event.currentTarget) {
    return;
}
    const instance = basicLightbox.create(`<img src="${event.target.dataset.source}" width="800" height="600"/>`, {
        onShow: (instance) => {document.addEventListener("keydown", escPress)},
        onClose: (instance) => {document.removeEventListener("keydown", escPress)}
    })
    instance.show()

    function escPress(event) {
        if (event.code === "Escape") {
            instance.close()
        }
    }
}
