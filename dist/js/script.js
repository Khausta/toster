
function getTimeRemaining(endtime) {
        var t = Date.parse(endtime) - Date.parse(new Date());
        var seconds = Math.floor((t / 1000) % 60);
        var minutes = Math.floor((t / 1000 / 60) % 60);
        var hours = Math.floor((t / (1000 * 60 * 60)) % 24);
        // var days = Math.floor(t / (1000 * 60 * 60 * 24));
        return {
          'total': t,
        //   'days': days,
          'hours': hours,
          'minutes': minutes,
          'seconds': seconds
        };
      }
      
      function initializeClock(id, endtime) {
        var clock = document.getElementById(id);
        // var daysSpan = clock.querySelector('.days');
        var hoursSpan = clock.querySelector('.hours');
        var minutesSpan = clock.querySelector('.minutes');
        var secondsSpan = clock.querySelector('.seconds');
      
        function updateClock() {
          var t = getTimeRemaining(endtime);
      
        //   daysSpan.innerHTML = t.days;
          hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
          minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
          secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);
      
          if (t.total <= 0) {
            clearInterval(timeinterval);
          }
        }
      
        updateClock();
        var timeinterval = setInterval(updateClock, 1000);
      }
      
      var deadline="January 01 2018 00:00:00 GMT+0300"; //for Ukraine
      var deadline = new Date(Date.parse(new Date()) + 15 * 24 * 60 * 60 * 1000); // for endless timer
      initializeClock('countdown', deadline);

const swiper = new Swiper('.swiper', {
        loop: true,
        speed: 2000,
        autoplay: true,
        spaceBetween: 10,
        pagination: {
                el: '.swiper-pagination',
                clickable: true,
                // allowTouchMove: true,
                autoplayDisableOnInteraction: true,
                // type : 'custom',
                // bulletClass:'swiper-pagination__img',
                // bullets: 'swiper-pagination__img',
                // bulletClass: 'swiper-pagination__img',
                // bulletActiveClass: '_active',
                // renderBullet: function (index, className) {
                //         return '<span class="' + className + '">' + (index + 1) + '</span>';
                // }
        },

      });
   
const customBullets = document.querySelectorAll('.swiper-pagination-bullet');
console.log(customBullets);
customBullets[0].classList.add('swiper-pagination__img_1');
customBullets[1].classList.add('swiper-pagination__img_2');
customBullets[2].classList.add('swiper-pagination__img_3');
customBullets[3].classList.add('swiper-pagination__img_4');

console.log(document.querySelector('.swiper-slide-active'));

const optionMenu = document.querySelector(".select-menu"),
  selectBtn = optionMenu.querySelector(".select-btn"),
  options = optionMenu.querySelectorAll(".option"),
  sBtn_text = optionMenu.querySelector(".sBtn-text");

selectBtn.addEventListener("click", () =>
  optionMenu.classList.toggle("active")
);

options.forEach((option) => {
  option.addEventListener("click", () => {
    let selectedOption = option.querySelector(".option-text").innerText;
    sBtn_text.innerText = selectedOption;

    optionMenu.classList.remove("active");
  });
});

// const sizeMenuBl
class Menu {
        constructor (menuBlock) {
                this.parentBlock = document.querySelector(`.${menuBlock}`);
                this.selectBtn = this.parentBlock.querySelector('.select-btn');
                this.options = this.parentBlock.querySelectorAll(".option");
                this.sBtnText = this.parentBlock.querySelector(".sBtn-text");
        }

        init() {
                // this.parentBlock.
                console.log(this.parentBlock);
                console.log(this.selectBtn);
                console.log(this.options);
                console.log(this.sBtnText);
                this.clickBtn();
                this.clickOption();
        }

        clickBtn() {
                this.selectBtn.addEventListener("click", () =>
                this.parentBlock.classList.toggle("active")
              );    
        }

        clickOption() {
                this.options.forEach((option) => {
                        option.addEventListener("click", () => {
                          let selectedOption = option.querySelector(".option-text").innerText;
                          this.sBtnText.innerText = selectedOption;
                      
                          this.parentBlock.classList.remove("active");
                        });
                      });
        }
}

const sizeMenu = new Menu('good__size-menu');
sizeMenu.init();


                              

