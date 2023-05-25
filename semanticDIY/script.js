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
		let targetIngredient = $(possibleIngredients[i]).prev()[0].innerText;
		//console.log(possibleIngredients[i].innerText);
		/*if (possibleIngredients[i].innerText == myIngredientName) {
			console.log($(possibleIngredients[i]).next().find('.collapse-content'));
			//$(possibleIngredients[i]).next().find('.collapse-content').addClass('collapsed');
			$(possibleIngredients[i]).next().find('.collapse-content').classList.toggle('collapsed');
		}*/
		if (targetIngredient == myIngredientName){
			//console.log(targetIngredient);
			//console.log($(possibleIngredients[i])[0]);
			$($(possibleIngredients[i])[0]).addClass('collapsed');
			$('.allProductsContent').addClass('collapsed');
		}
	}

}


/*function addIngredients(myIngredients) {
	let myIngredientsName = myIngredients.innerText;
	let possibleIngredient = $('#allIngredients').next().find('.collapse-content');

	for (let i=0; i<possibleIngredient.length; i++) {
		let targetIngredients = $(possibleIngredient[i]).prev()[0].innerText;
		if (targetIngredients == myIngredientsName){
			$($(possibleIngredient[i])[0]).addClass('collapsed');
			$('.allIngredientsContent').addClass('collapsed');
		}*/





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