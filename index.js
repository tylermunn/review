var ratingBtns = document.querySelectorAll(".rating-btn");
var submitBtn = document.querySelector(".submit-btn");

console.log(ratingBtns.length);

for (i of ratingBtns) {

    i.addEventListener("click", onClick);


    function onClick() {
        var rating = this.innerHTML;
        var selectAudio = new Audio("sounds/selector.mp3");
        selectAudio.play();
        console.log("Your rating was: " + rating);
    }
}


submitBtn.addEventListener("click", function () {
    var submitAudio = new Audio("sounds/submit.mp3");
    
    submitAudio.play();
    thankYou();
})

// clear the content of main-container div for thank you page
function clearContent(id) {
    document.getElementById(id).innerHTML = "";
}
// formats the thank you screen
function thankYou() {
    clearContent("container");
    
}