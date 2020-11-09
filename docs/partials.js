/** @format */

fetch('./docs/sidebar.html')
  .then((response) => {
    return response.text();
  })
  .then((data) => {
    document.querySelector('.sidebar-content').innerHTML = data;
  });
// fetch('./docs/topnav.html')
//   .then((response) => {
//     return response.text();
//   })
//   .then((data) => {
//     document.querySelector('.top-nav-content').innerHTML = data;
//   });
fetch('./docs/footer.html')
  .then((response) => {
    return response.text();
  })
  .then((data) => {
    document.querySelector('.footer-content').innerHTML = data;
  });
