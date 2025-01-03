document
  .getElementById("register-form")
  .addEventListener("submit", async function (event) {
    event.preventDefault();

    const username = document.getElementById("username").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    try {
      const response = await fetch("http://127.0.0.1:4001/auth/register/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: username,
          email: email,
          password: password,
        }),
        credentials: "include",
      });

      if (response.ok) {
        window.location.href = "../index.html";
      } else {
        response.json().then((data) => {
          alert(data.message);
        });
      }
    } catch (error) {
      alert("Error registering: " + error.message);
    }
  });
