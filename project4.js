console.log("This is project 4");
const name = document.getElementById("name");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
let validEmail = false;
let validPhone = false;
let validUser = false;
$("#failure").hide();
$("#success").hide();

// console.log(name, email, phone);
name.addEventListener("blur", () => {
  console.log("name is blurred");
  // Validate name here
  let regex = /^[a-zA-Z]([a-zA-Z]){2,10}$/;
  let str = name.value;
  console.log(regex, str);
  if (regex.test(str)) {
    console.log("Your name is valid");
    name.classList.remove("is-invalid");
    validUser = true;
  } else {
    console.log("Your name is not valid");
    name.classList.add("is-invalid");
    validUser = false;
  }
});

email.addEventListener("blur", () => {
  console.log("email is blurred");
  let regex = /^([_\-\.0-9a-zA-Z]+)@([_\-\.0-9a-zA-Z]+)\.([a-zA-Z]){2,7}$/;
  let str = email.value;
  console.log(regex, str);
  if (regex.test(str)) {
    console.log("Your email is valid");
    email.classList.remove("is-invalid");
    validEmail = true;
  } else {
    console.log("Your email is not valid");
    email.classList.add("is-invalid");
    validEmail = false;
  }
});

phone.addEventListener("blur", () => {
  console.log("phone is blurred");
  // Validate phone here
  let regex = /^([0-9]){10}$/;
  let str = phone.value;
  console.log(regex, str);
  if (regex.test(str)) {
    console.log("Your phone is valid");
    phone.classList.remove("is-invalid");
    validPhone = true;
  } else {
    console.log("Your phone is not valid");
    phone.classList.add("is-invalid");
    validPhone = false;
  }
});

let submit = document.getElementById("submit");
submit.addEventListener("click", (e) => {
  e.preventDefault();

  console.log("You clicked on submit");
  console.log(validEmail, validUser, validPhone);

  if (validEmail && validUser && validPhone) {
    let failure = document.getElementById("failure");
    let success = document.getElementById("success");
    success.classList.add("show");
    console.log("Phone, email and user are valid. Submitting the form");
    setTimeout(() => {
      console.log(3434);
      $("#success").hide();
    }, 2000);
    window.localStorage.setItem("email", email.value);
    window.localStorage.setItem("phone", phone.value);
    window.localStorage.setItem("name", name.value);
    document.getElementById("addForm").reset();
    $("#failure").hide();
    $("#success").show();
    // $("success").clear();
  } else {
    console.log(
      "One of Phone, email or user are not valid. Hence not submitting the form. Please correct the errors and try again"
    );
    // JSON.parse(window.localStorage.getItem('validEmail && validUser && validPhone'));
    let failure = document.getElementById("failure");
    failure.classList.add("show");
    setTimeout(() => {
      $("#failure").hide();
    }, 2000);

    $("#success").hide();
    $("#failure").show();
  }
});

let searchText = document.getElementsById("searchText");
searchText.addEventListener("input", function () {
  let inputVal = search.value;
  console.log("Input search vaild", inputVal);
});
