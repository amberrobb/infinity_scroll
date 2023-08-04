// unleash api
const count = 10;
const apiKey = "1ukioNJ9ifaHVLE6g86s_YBmviJEESSDujMSWVJsgAs";
const apiURL = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${count}`;

// get photos from unsplash api
async function getPhotos() {
  try {
    const response = await fetch(apiURL);
    const data = await response.json();
    console.log(data);
  } catch (error) {}
}

getPhotos();
