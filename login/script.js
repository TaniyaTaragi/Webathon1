const wrapper = document.querySelector(".wrapper");
const registerLink = document.querySelector(".registration-link");
const loginLink = document.querySelector(".Login-link");
registerLink.onclick = () => {
  wrapper.classList.add("active");
};
loginLink.onclick = () => {
  wrapper.classList.remove("active");
};
