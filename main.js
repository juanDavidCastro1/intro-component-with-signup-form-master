const form = document.querySelector(".signup-form");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const formData = new FormData(form);

  formData.forEach((value, name) => {
    const fieldElement = document.querySelector(`#${name}`);

    if (name === "email") {
      if (value.includes(".")) {
        fieldElement.classList.remove("signup-form__field--error");
      } else {
        fieldElement.classList.add("signup-form__field--error");
      }
    } else if (value === "") {
      fieldElement.classList.add("signup-form__field--error");
    } else {
      fieldElement.classList.remove("signup-form__field--error");
    }
  });
});
