document.addEventListener("DOMContentLoaded", function () {
  const backToTop = document.getElementById("backToTop");

  window.addEventListener("scroll", function () {
    if (window.scrollY > 200) {
      backToTop.style.display = "inline-block";
    } else {
      backToTop.style.display = "none";
    }
  });
});
