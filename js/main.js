const swiper = new Swiper(".swiper", {
  slidesPerView: 2,
  centeredSlides: true,

  spaceBetween: 50,

  navigation: {
    nextEl: ".button-next",
    prevEl: ".button-prev",
  },
});

const paginationItems = document.querySelectorAll(".pagination__button"); // находим элементы пагинации

swiper.on("slideChange", function () {
  paginationItems.forEach(function (item, index) {
    index === swiper.realIndex
      ? item.classList.add("is-active")
      : item.classList.remove("is-active");
  });
});

paginationItems.forEach(function (item, index) {
  item.addEventListener("click", function () {
    swiper.slideTo(index);
  });
});
