

const apiSrc = 'https://api.unsplash.com/photos/?client_id=iVGza8cJ_HqWulwFojyG5tk-swNH94CzcpGLGGCP30M';


const getPhotos = async(src) => {
  try {
    let response = await fetch(src);
    let parseRes = await response.json();
    return parseRes
  } catch(e) {
    console.log(e)
  }
}


const addPhotosToPage = (photos) => {
  const photoSection = document.querySelector('.photos-sec');
  const defaultAlt = 'opis zdjęcia';
  photos.forEach(photo => {
    
    const newImg = document.createElement('div');
    newImg.classList.add('img-box')
    
    newImg.innerHTML =`<div class='desc'>${photo.alt_description ? photo.alt_description : defaultAlt}</div><img src=${photo.links.download} alt='${photo.alt_description ? photo.alt_description : defaultAlt}' /> `
    photoSection.appendChild(newImg); 

    newImg.addEventListener('mouseover', (e) => {
      newImg.classList.add('active');
    });


    newImg.addEventListener('mouseout', (e) => {
      newImg.classList.remove('active');

    });
  })
}


getPhotos(apiSrc)
  .then((res)=>addPhotosToPage(res))