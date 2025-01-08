async function encryptData() {
    const message = document.getElementById("input-encrypted-data").value; // Girdi alanından mesajı al
    const outputField = document.getElementById("output-decrypted-data"); // Çıktıyı gösterecek alan

    try {
        const response = await fetch('/encrypt/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'X-CSRFToken': getCookie('csrftoken') // CSRF koruması için
            },
            body: JSON.stringify({ message: message }) // Mesajı JSON formatında gönder
        });

        if (!response.ok) {
            const errorData = await response.json();
            outputField.value = `Hata: ${errorData.error}`;
            return;
        }

        const data = await response.json();
        outputField.value = data.encrypted_message; // Şifrelenmiş mesajı göster
    } catch (error) {
        outputField.value = `Hata: ${error.message}`;
    }
}

function getCookie(name) {
    let cookieValue = null;
    if (document.cookie && document.cookie !== '') {
        const cookies = document.cookie.split(';');
        for (let i = 0; i < cookies.length; i++) {
            const cookie = cookies[i].trim();
            if (cookie.startsWith(name + '=')) {
                cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                break;
            }
        }
    }
    return cookieValue;
}
