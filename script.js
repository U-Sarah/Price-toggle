document.addEventListener("DOMContentLoaded", function () {
  const toggle = document.getElementById("toggle");
  const basicPrice = document.getElementById("basic-price");
  const professionalPrice = document.getElementById("professional-price");
  const masterPrice = document.getElementById("master-price");

  function updatePrices() {
    if (toggle.checked) {
      //monthly prices
      basicPrice.innerHTML = `<span style="font-size: 30px; margin-bottom: -20px">$</span> 19.99`;
      professionalPrice.innerHTML = `<span style="font-size: 30px; margin-bottom: -20px">$</span> 24.99`;
      masterPrice.innerHTML = `<span style="font-size: 30px; margin-bottom: -20px">$</span> 39.99`;
    } else {
      //annual prices
      basicPrice.innerHTML = `<span style="font-size: 30px; margin-bottom: -20px">$</span> 199.99`;
      professionalPrice.innerHTML = `<span style="font-size: 30px; margin-bottom: -20px">$</span> 249.99`;
      masterPrice.innerHTML = `<span style="font-size: 30px; margin-bottom: -20px">$</span> 399.99`;
    }
  }

  updatePrices();

  toggle.addEventListener("change", updatePrices);
});
