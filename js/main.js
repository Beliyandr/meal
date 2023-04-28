document.querySelector(".order__wrap-title").addEventListener("click", () => {
  document.querySelector(".order").classList.toggle("order_open");
});

function closeModal() {
  document.querySelectorAll(".modal__close").forEach((close) => {
    close.addEventListener("click", () => {
      document.querySelectorAll(".modal").forEach((item) => {
        item.classList.remove("modal_open");
      });
    });
  });
}

function openModal() {
  let modal = document.querySelector(".modal_delivery");
  let buttonsOrder = document.querySelectorAll(".order__submit");

  buttonsOrder.forEach((item) => {
    item.addEventListener("click", () => {
      modal.classList.add("modal_open");
      document.body.style.overflow = 'hidden'
      html.style.overflow = 'hidden'
    });
  });
}

function changeFieldsetRadio() {
  let deliveryRadio = document.querySelector(".modal-delivery__fieldset_radio");
  let labels = deliveryRadio.querySelectorAll(".modal-delivery__label input");
  let underDelivery = document.querySelectorAll(".modal-delivery__fieldset")[2];

  labels.forEach((element) => {
    element.addEventListener("click", (e) => {
      if (e.target.value != "delivery") {
        underDelivery.classList.add("modal-delivery__fieldset_hide");
      } else {
        underDelivery.classList.remove("modal-delivery__fieldset_hide");
      }
    });
  });
}

openModal();
changeFieldsetRadio();
closeModal();
