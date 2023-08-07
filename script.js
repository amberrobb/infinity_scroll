const imageContainer = document.getElementById("image-container");
const loader = document.getElementById("loader");

let photoArray = [];

// unleash api
const count = 10;
const apiKey = "1ukioNJ9ifaHVLE6g86s_YBmviJEESSDujMSWVJsgAs";
const apiURL = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${count}`;

function displayPhotos() {
  photoArray.forEach((photo) => {
    // crate an a element
    const item = document.createElement("a");
    item.setAttribute("href", photo.links.html);
    item.setAttribute("target", "_blank");
    // create img for photo
    const img = document.createElement("img");
    img.setAttribute("src", photo.urls.regular);
    img.setAttribute("alt", photo.alt_description);
    img.setAttribute("title", photo.alt_description);
    // put <img> into <a>, then put both insige imageContainer
    item.appendChild(img);
    imageContainer.appendChild(item);
  });
}

// get photos from unsplash api
async function getPhotos() {
  try {
    const response = await fetch(apiURL);
    photoArray = await response.json();
    console.log(photoArray);
    displayPhotos();
  } catch (error) {}
}

// check to see if scrolling is near bottom of the page
window.addEventListener("scroll", () => {
  if (
    window.innerHeight + window.scrollY >=
    document.body.offsetHeight - 1000
  ) {
    getPhotos();
    console.log("load more");
  }
});

getPhotos();
