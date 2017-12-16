$(function () {
  // extra small: carousel, card
  var mini = false
  var slicks = []
  $(window).on('resize', doOnce(function () {
    var mini2 = window.innerWidth <= 768
    if (mini !== mini2) {
      mini = mini2
    } else {
      return
    }
    var wrapperHtmlStr = '<div class="card-wrapper-to-keep-shadow-in-slick"></div>'
    var cards = $('.soon-to-start-courses-block .cards, .early-bird-courses-block .cards')
    var carousels = $('.big-block .carousel')
    if (mini) {
      cards.add(carousels).addClass('mini').find('img').each(function (i, el) {
        // check lazyload. if not loaded, load img manually
        var t = $(el)
        if (!t.attr('src')) {
          t.attr('src', t.attr('data-src'))
        }
      })
      cards.find('.card').wrap(wrapperHtmlStr)
      cards.each(function (i, el) {
        $(el).slick({
          dots: true,
          arrows: false,
          autoplay: true,
        })
      })
      carousels.each(function (i, el) {
        $(el).find('.carousel-list').children('.carousel-item').addClass('card').wrap(wrapperHtmlStr)
      })
      var last = carousels.last()
      carousels.not(last).each(function (i, el) {
        $(el).find('.carousel-list').slick({
          dots: true,
          arrows: false,
          autoplay: true,
        })
      })
      last.find('.carousel-list').slick({
        dots: true,
        arrows: false,
        autoplay: true,
        slidesToShow: 2,
        slidesToScroll: 2,
      })
    } else {
      cards.add(carousels).removeClass('mini')
      // destroy
      cards.each(function (i, el) {
        $(el).slick('unslick')
      })
      cards.find('.card').unwrap()
      carousels.each(function (i, el) {
        $(el).find('.carousel-list').slick('unslick')
      })
      carousels.find('.carousel-item').removeClass('card').unwrap()
    }
  }))
})
