if(!!window.performance && window.performance.navigation.type == 2)
{
    window.location.reload();
}
$(document).ready(function () {
    $nav = $('.nav');
    $toggleCollapse = $('.toggle-collapse');

    /** click event on toggle menu */
    $toggleCollapse.click(function () {
        $nav.toggleClass('collapse');
    });
    var swiper = new Swiper('.a .swiper-container', {
      pagination: {
        el: '.a .swiper-pagination',
        dynamicBullets: true,
      },
      loop : true,
      autoplay: {
        delay: 5000,
        disableOnInteraction: false,
      },
    });
    var swiper = new Swiper('.e .swiper-container', {
      slidesPerView: 3,
      spaceBetween: 30,
      loop: true,
      pagination: {
        el: '.e .swiper-pagination',
        clickable: true,
      },
      breakpoints:{
          900: {
              slidesPerView: 3,
              spaceBetween: 10
          },
          640: {
            slidesPerView: 2,
            spaceBetween: 10
        },
          0: {
            slidesPerView: 1,
            spaceBetween: 10
        },
      }
    });
});

var a = 0;
$(window).scroll(function() {

  var oTop = $('#counter').offset().top - window.innerHeight;
  if (a == 0 && $(window).scrollTop() > oTop) {
    $('.counter-value').each(function() {
      var $this = $(this),
        countTo = $this.attr('data-count');
      $({
        countNum: $this.text()
      }).animate({
          countNum: countTo
        },

        {

          duration: 5000,
          easing: 'swing',
          step: function() {
            $this.text(Math.floor(this.countNum));
          },
          complete: function() {
            $this.text(this.countNum);
            //alert('finished');
          }

        });
    });
    a = 1;
  }

});