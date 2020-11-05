/*
 * <section class="photo-card">
 *   <div class="img-container">
 *     <img class="person-photo-img" src="https://vignette3.wikia.nocookie.net/starwars/images/6/62/LukeGreenSaber-MOROTJ.png" />
 *   </div>
 *   <div class="caption">
 *     Luke ready to fight.
 *   </div>
 * </section>
 */
function generatePhotoCard(photoURL, caption) {
  var photoCardSection = document.createElement('section');

  photoCardSection.classList.add("photo-card");
  photoCardSection.classList.add("another-class");
  photoCardSection.classList.remove("another-class");
  photoCardSection.setAttribute("id", "special-id");

  var imgContainerDiv = document.createElement('div');
  imgContainerDiv.classList.add("img-container");
  photoCardSection.appendChild(imgContainerDiv);

  var personPhotoImg = document.createElement('img');
  personPhotoImg.classList.add("person-photo-img");
  personPhotoImg.src = photoURL;
  imgContainerDiv.appendChild(personPhotoImg);

  var captionDiv = document.createElement('div');
  captionDiv.classList.add("caption");
  captionDiv.textContent = caption;
  photoCardSection.appendChild(captionDiv);

  console.log("== photoCardSection:", photoCardSection);

  var photoCardContainer = document.getElementById("photo-card-container");
  photoCardContainer.appendChild(photoCardSection);
}

function removeLastPhotoCard() {
  var photoCards = document.getElementsByClassName("photo-card");
  var lastPhotoCard = photoCards[photoCards.length - 1];
  // lastPhotoCard.remove();
  lastPhotoCard.parentNode.removeChild(lastPhotoCard);
}

generatePhotoCard("http://placekitten.com/480/480", "Luke as a kitty");
generatePhotoCard("http://placekitten.com/480/480", "Another kitty");
