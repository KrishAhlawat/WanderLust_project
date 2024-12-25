// Example starter JavaScript for disabling form submissions if there are invalid fields
(() => {
  "use strict";
  const forms = document.querySelectorAll(".needs-validation");

  Array.from(forms).forEach((form) => {
    form.addEventListener(
      "submit",
      (event) => {
        if (!form.checkValidity()) {
          event.preventDefault();
          event.stopPropagation();
        }
        form.classList.add("was-validated");
      },
      false
    );
  });
})();

let taxSwitch = document.getElementById("flexSwitchCheckDefault");
taxSwitch.addEventListener("click", function () {
  let taxInfo = document.querySelectorAll(".tax-info");
  let taxedPrice = document.querySelectorAll(".price");
  for (let i = 0; i < taxedPrice.length; i++) {
    let priceText = taxedPrice[i].getAttribute("data-original-price");
    if (!priceText) {
      priceText = taxedPrice[i].innerText.replace(/[^\d]/g, "");
      taxedPrice[i].setAttribute("data-original-price", priceText);
    }
    let price = parseFloat(priceText);
    if (!isNaN(price)) {
      let taxedAmount = Math.round(price * 1.18).toLocaleString("en-IN");
      if (taxSwitch.checked) {
        taxedPrice[i].innerText = `₹ ${taxedAmount} / night with taxes`;
      } else {
        taxedPrice[i].innerText = `₹ ${price.toLocaleString(
          "en-IN"
        )} / night without taxes`;
      }
    }
  }
});
