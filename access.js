console.log("== document.body:", document.body);
console.log("== document.body.childNodes:", document.body.childNodes);

var header = document.body.childNodes[1];
console.log("== header:", header);
console.log("== header.parentNode:", header.parentNode);

var images = document.getElementsByTagName('img');
console.log("== images:", images);
for (var i = 0; i < images.length; i++) {
  console.log("  -- images[" + i + "]:", images[i]);
}

var photoCards = document.getElementsByClassName('photo-card');
console.log("== photoCards:", photoCards);

var photoCardContainer = document.getElementById('photo-card-container');
console.log("== photoCardContainer:", photoCardContainer);

var rightNavItem = document.querySelector('.navitem.right');
console.log("== rightNavItem:", rightNavItem);

var navItemLinks = document.querySelectorAll('.navitem a');
console.log("== navItemLinks:", navItemLinks);

var firstPhotoCard = photoCards[0];
console.log("== firstPhotoCard:", firstPhotoCard);
console.log("== firstPhotoCard.textContent:", firstPhotoCard.textContent);
console.log("== firstPhotoCard.textContent.trim():", firstPhotoCard.textContent.trim());
console.log("== firstPhotoCard.innerHTML:", firstPhotoCard.innerHTML);
console.log("== images[0].src:", images[0].src);
images[0].src = "http://placekitten.com/480/480";

firstPhotoCard.innerHTML = "<p>This is a new paragraph</p>";

var userSuppliedValue = "<img onerror=\"alert('Hacked!')\" src=x>";
firstPhotoCard.innerHTML = userSuppliedValue;
