/*che odio
function toggleCollapse() {
  var content = document.querySelector('.collapse-content');
  content.classList.toggle('collapsed');
}*/


/* per collapse*/
function toggleCollapse() {
  var collapseContent = event.target.nextElementSibling;
  collapseContent.classList.toggle('collapsed');
}


/* per link interni*/
function addIngredient(myIngredient) {
	let myIngredientName = myIngredient.innerText;
	let possibleIngredients = $('#allProducts').next().find('.collapse-content');

	for (let i=0; i<possibleIngredients.length; i++) {
		//console.log(possibleIngredients[i].innerText);
		if (possibleIngredients[i].innerText == myIngredientName) {
			console.log($(possibleIngredients[i]).next().find('.collapse-content'));
			//$(possibleIngredients[i]).next().find('.collapse-content').addClass('collapsed');
			$(possibleIngredients[i]).next().find('.collapse-content').classList.toggle('collapsed');
		}
	}

	//console.log(possibleIngredients);
}


function takeScreenshot(event) {
  var screenshotSection = event.target.parentNode;
  html2canvas(screenshotSection).then(canvas => {
    var img = canvas.toDataURL();
    var screenshotGallery = document.querySelector("#screenshot-gallery");
    var screenshotImage = document.createElement("img");
    screenshotImage.src = img;
    screenshotGallery.appendChild(screenshotImage);
  });
}