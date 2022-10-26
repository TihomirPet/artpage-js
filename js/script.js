(function () {
  function el(css) {
    return document.querySelector(css);
  }

  function create(html) {
    return document.createElement(html);
  }

  function loadImages() {
    for (let i = 1; i <= 18; i++) {
      let img = create('img');
      img.src = `/img/${i}.JPG`;
      img.className = 'rot';
      img.setAttribute('id', ` img ${i}`);

      el('#content').appendChild(img);

      console.log(img);
    }
  }

  loadImages();
})();
