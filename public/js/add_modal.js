// Get the modal
let addModal = document.getElementById("addModal");

// Get the button that opens the modal
let addBtn = document.getElementById("add");

// Get the <span> element that closes the modal
let addSpan = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
addBtn.onclick = function () {
    addModal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
addSpan.onclick = function () {
    addModal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target == addModal) {
        addModal.style.display = "none";
    }
}