// script.js
const burger = document.querySelector("[data-burger]");
const mobile = document.querySelector("[data-mobile]");
if (burger && mobile) {
  burger.addEventListener("click", () => {
    const hidden = mobile.hasAttribute("hidden");
    if (hidden) mobile.removeAttribute("hidden");
    else mobile.setAttribute("hidden", "");
  });
}

const contactForm = document.querySelector("form[data-contact]");
if (contactForm) {
  contactForm.addEventListener("submit", (e) => {
    e.preventDefault();
    alert("Thanks! Hook this form to your email/Netlify to receive enquiries.");
  });
}
