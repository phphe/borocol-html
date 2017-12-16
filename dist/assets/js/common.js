$(function () {
  var menu = $('.main-header .menu-card')
  $('.main-header .menu-btn').on('click', function () {
    var ts = $(this)
    ts.toggleClass('active')
    if (ts.hasClass('active')) {
      menu.slideDown()
    } else {
      menu.slideUp()
    }
  })
  menu.find('.menu-item a').on('click', function (e) {
    var ts = $(this)
    if (ts.next().is('.sub-menu')) {
      e.preventDefault()
      ts.next().slideToggle()
    }
  })
  // carousel
  $('.carousel').each(function () {
    var ts = $(this)
    var list = ts.find('.carousel-list')
    var wrapper = ts.find('.carousel-list-wrapper')
    var offset = 0
    ts.find('.left-btn').on('click', function () {
      move('right')
    })
    ts.find('.right-btn').on('click', function () {
      move('left')
    })
    function move(dir) {
      var step = wrapper.width()
      if (dir === 'right') {
        offset += step
        if (offset > 0) {
          offset = 0
        }
      } else {
        var min = -(list[0].scrollWidth - wrapper.width())
        offset -= step
        if (offset < min) {
          offset = min
        }
        if (offset > 0) {
          offset = 0
        }
      }
      list.stop().animate({
        left: offset + 'px',
      })
    }
  })
})

// utils
function doOnce(fun) {
  fun()
  return fun
}
