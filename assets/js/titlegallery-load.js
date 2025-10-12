document.addEventListener("DOMContentLoaded", () => {
    const bannerSlider = document.getElementById("banner-slider");

    base_path = "/images/titlegallery/"
    galleryArray = galleryArray.map(img_path => base_path + img_path);

    galleryArray.forEach((src, index) => {
      const img = document.createElement("img");
      img.dataset.src = src;
      if (index === 0) {
        img.src = src; // only load the first one immediately
        img.classList.add("active");
      }
      bannerSlider.appendChild(img);
    });

    const slides = bannerSlider.querySelectorAll("img");
    let current = 0;

    setInterval(() => {
      slides[current].classList.remove("active");
      current = (current + 1) % slides.length;

      const next = slides[current];
      if (!next.src) next.src = next.dataset.src;

      next.classList.add("active");
    }, 4000);
});