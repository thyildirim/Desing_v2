window.onload = async function () {
  try {
    const response = await fetch("http://127.0.0.1:4001/auth/secret/", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
    });

    if (response.ok) {
      document.getElementById("logout-button").style.display = "inline-block";
    } else {
      document.getElementById("login-button").style.display = "inline-block";
      document.getElementById("register-button").style.display = "inline-block";
    }
  } catch (error) {
    console.error("Error making request to /secret:", error);
  }
};

document
  .getElementById("register-button")
  .addEventListener("click", function () {
    window.location.href = "register/index.html";
  });

document.getElementById("login-button").addEventListener("click", function () {
  window.location.href = "login/index.html";
});

document
  .getElementById("logout-button")
  .addEventListener("click", async function () {
    try {
      const response = await fetch("http://127.0.0.1:4001/auth/logout/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
      });

      if (response.ok) {
        document.getElementById("logout-button").style.display = "none";
        document.getElementById("login-button").style.display = "inline-block";
        document.getElementById("register-button").style.display =
          "inline-block";
        location.reload();
      }
    } catch (error) {
      console.error("Error logging out:", error);
    }
  });
