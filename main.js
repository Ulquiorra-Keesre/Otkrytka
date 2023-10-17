const menuBtn = document.querySelector(".menu__btn");
const menuList = document.querySelector(".menu__list");

const portfolioBtn = document.querySelector(".portfolio__btn");
const portfolioList = document.querySelector(".portfolio__list");


function toggleMenuVisibility() {
    menuList.classList.toggle("hide");
}

// Скрипт для раскрытия блока portfolio
function togglePortfolioVisibility() {
    portfolioList.classList.toggle("hide");
}
//DOMContentLoaded

menuBtn.addEventListener("click", toggleMenuVisibility);

portfolioBtn.addEventListener("click", togglePortfolioVisibility);



