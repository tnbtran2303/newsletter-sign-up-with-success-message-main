const form = document.querySelector("form");
const container = document.querySelector(".container");
const successCard = document.querySelector(".success-card");

form.addEventListener("submit", (e) =>{
    e.preventDefault();
    container.classList.add("hide");
    successCard.classList.remove("hide");
})