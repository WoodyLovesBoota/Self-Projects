// TODO
// form 에 연결되는 js 만들기
// https://sweeteuna.tistory.com/106

let contactForm = document.querySelector("#contact-form");
let contactSubmit = document.querySelector("#submit-button");
let contactName = document.querySelector("#name");
let contactEmail = document.querySelector("#email");
let contactMessage = document.querySelector("#message");

contactSubmit.addEventListener("click", () => {
  let cName = contactName.value;
  let email = contactEmail.value;
  let message = contactMessage.value;
  console.log(cName, email, message);
});
