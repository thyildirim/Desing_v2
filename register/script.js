document.getElementById("register-form").addEventListener("submit", async function (event) {
  event.preventDefault();  // Formun varsayılan submit davranışını engelle

  // Form verilerini al
  const username = document.getElementById("username").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  try {
    // Backend'e POST isteği gönder
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
      credentials: "include",  // Eğer gerekliyse, oturum çerezleri de dahil edilir
    });

    // Backend'den başarılı yanıt alırsak
    if (response.ok) {
      alert("Registration successful!");
      window.location.href = "../login/index.html"; // Başarıyla kaydolduktan sonra ana sayfaya yönlendir
    } else {
      // Backend'den hata mesajı alırsak
      const data = await response.json();
      alert(data.message || "An error occurred.");
    }
  } catch (error) {
    alert("Error registering: " + error.message);
  }
});
