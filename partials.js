/** @format */

fetch('./docs/sidebar.html')
  .then((response) => {
    return response.text();
  })
  .then((data) => {
    document.querySelector('.sidebar-content').innerHTML = data;
  });
fetch('./docs/topnav.html')
  .then((response) => {
    return response.text();
  })
  .then((data) => {
    document.querySelector('.top-nav-content').innerHTML = data;
  });
fetch('./docs/footer.html')
  .then((response) => {
    return response.text();
  })
  .then((data) => {
    document.querySelector('.footer-content').innerHTML = data;
  });

$(function () {
  const simpleBarEnabled =
    document.getElementsByClassName('js-simplebar').length > 0;
  const simpleBarInstance = simpleBarEnabled
    ? new SimpleBar(document.getElementsByClassName('js-simplebar')[0])
    : null;

  /* Sidebar toggle behaviour */
  $('.sidebar-toggle').on('click', function () {
    $('.sidebar')
      .toggleClass('toggled')
      // Triger resize after animation
      .one('transitionend', function () {
        setTimeout(function () {
          window.dispatchEvent(new Event('resize'));
        }, 100);
      });
  });

  const active = $('.sidebar .active');

  if (active.length && active.parent('.collapse').length) {
    const parent = active.parent('.collapse');

    parent.prev('a').attr('aria-expanded', true);
    parent.addClass('show');
  }
});
