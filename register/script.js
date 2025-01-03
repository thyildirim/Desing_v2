document
  .getElementById("register-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const username = document.getElementById("username").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    console.log("Username:", username);
    console.log("Email:", email);
    console.log("Password:", password);

    alert("Registration successful!");
  });
