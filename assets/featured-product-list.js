document.addEventListener("DOMContentLoaded", function() {
  const productList = document.querySelector(".product-list--carousel");
  const progressBar = document.querySelector(".progress-bar");

  if (productList && progressBar) {
    productList.addEventListener("scroll", () => {
      const scrollLeft = productList.scrollLeft;
      const scrollWidth = productList.scrollWidth - productList.clientWidth;
      const progress = (scrollLeft / scrollWidth) * 100;
      progressBar.style.width = progress + "%";
    });
  }
});
