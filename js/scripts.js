const schemeSvg = document.querySelector('.scheme-svg');
const totalPriceTag = document.querySelector(".price-total")
const menuButton = document.querySelector(".m-menu")
const menu = document.querySelector(".menu")
let cost = 500;
let totalPrice = 0;
const playButton = document.querySelector('.film-trailer');

schemeSvg.addEventListener('click', (event) => {
    if(!event.target.classList.contains("booked")) {
        event.target.classList.toggle("active")
        let totalSeats = schemeSvg.querySelectorAll(".active").length;
        totalPrice = totalSeats * cost;
        totalPriceTag.textContent = totalPrice;
    }
});

menuButton.addEventListener("click", () => {
    console.log("Кликнули по меню");
    menu.classList.toggle("is-open");
});
playButton.addEventListener("click", () => {
    Fancybox.show([
        {
          src: "https://youtu.be/6ZfuNTqbHE8?si=SgA6hA_iBGWJx6QR",
          width: 640,
          height: 360,
        },
    ]);
});

