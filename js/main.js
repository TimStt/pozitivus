function main() {
  const sliderRender = () => {
    const swiper = new Swiper(".swiper", {
      centeredSlides: true,

      spaceBetween: 50,
      watchOverflow: true,
      updateOnWindowResize: true,

      navigation: {
        nextEl: ".button-next",
        prevEl: ".button-prev",
      },
      breakpoints: {
        500: {
          slidesPerView: "auto",
        },
        1000: {
          slidesPerView: 2,
        },

        1400: {
          slidesPerView: 2,
        },
      },
    });

    const paginationRender = () => {
      const paginationItems = document.querySelectorAll(".pagination__button"); // находим элементы пагинации

      swiper.on("slideChange", function () {
        paginationItems.forEach(function (item, index) {
          index === swiper.realIndex
            ? item.classList.add("is-active")
            : item.classList.remove("is-active");
        });
      });

      const paginationHandlerClick = () => {
        paginationItems.forEach(function (item, index) {
          item.addEventListener("click", function () {
            swiper.slideTo(index);
          });
        });
      };
      paginationHandlerClick();
    };

    paginationRender();
  };

  const burgerMenuHandler = () => {
    const burger_btn = document.querySelector(".burger-wrapper");
    let menuIsVisible = false;

    burger_btn.addEventListener("click", () => {
      menuIsVisible = !menuIsVisible;
      burger_btn.classList.toggle("menu-is-visible");
      document.body.style.overflow = menuIsVisible ? "hidden" : "visible";
    });
  };

  burgerMenuHandler();
  sliderRender();
}
main();
