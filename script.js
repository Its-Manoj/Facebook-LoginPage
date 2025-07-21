const signInTab = document.getElementById("signInTab");
const signUpTab = document.getElementById("signUpTab");
const signInForm = document.getElementById("signInForm");
const signUpForm = document.getElementById("signUpForm");

signInTab.addEventListener("click", () => {
  signInTab.classList.add("active");
  signUpTab.classList.remove("active");
  signInForm.classList.remove("hidden");
  signUpForm.classList.add("hidden");
});

signUpTab.addEventListener("click", () => {
  signUpTab.classList.add("active");
  signInTab.classList.remove("active");
  signUpForm.classList.remove("hidden");
  signInForm.classList.add("hidden");
});
