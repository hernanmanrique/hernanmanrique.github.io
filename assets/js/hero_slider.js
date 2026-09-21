// Homepage hero slider: simple crossfade, no external dependencies.
document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll(".hero-slider").forEach(function (slider) {
    var slides = slider.querySelectorAll(".hero-slide");
    var dots = slider.querySelectorAll(".hero-dot");
    var prevBtn = slider.querySelector(".hero-arrow-prev");
    var nextBtn = slider.querySelector(".hero-arrow-next");
    if (slides.length < 2) return;

    var current = 0;
    var intervalMs = 4000;
    var timer = null;
    var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    function show(index) {
      slides[current].classList.remove("active");
      if (dots[current]) dots[current].classList.remove("active");
      current = (index + slides.length) % slides.length;
      slides[current].classList.add("active");
      if (dots[current]) dots[current].classList.add("active");
    }

    function next() {
      show(current + 1);
    }

    function prev() {
      show(current - 1);
    }

    function start() {
      if (reduceMotion) return;
      stop();
      timer = setInterval(next, intervalMs);
    }

    function stop() {
      if (timer) clearInterval(timer);
      timer = null;
    }

    dots.forEach(function (dot, i) {
      dot.addEventListener("click", function () {
        stop();
        show(i);
        start();
      });
    });

    if (nextBtn) {
      nextBtn.addEventListener("click", function () {
        stop();
        next();
        start();
      });
    }

    if (prevBtn) {
      prevBtn.addEventListener("click", function () {
        stop();
        prev();
        start();
      });
    }

    slider.addEventListener("mouseenter", stop);
    slider.addEventListener("mouseleave", start);

    start();
  });
});
