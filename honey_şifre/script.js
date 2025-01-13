document.addEventListener("DOMContentLoaded", function () {
    const dnaSequenceInput = document.getElementById("dna-sequence");
    const geneNameInput = document.getElementById("gene-name");
    const form = document.querySelector("form");
    const encryptedDataTextArea = document.getElementById("encrypted-data");

    // DNA dizisinin geçerli olup olmadığını kontrol eden fonksiyon
    function isValidDNASequence(sequence) {
        const validDNARegex = /^[ATGC]+$/i; // Sadece A, T, G, C harflerine izin ver
        return validDNARegex.test(sequence);
    }

    // Form gönderildiğinde şifreleme işlemini başlat
    form.addEventListener("submit", function (event) {
        event.preventDefault(); // Formun varsayılan davranışını engelle

        // DNA dizisini ve gen adını al
        const dnaSequence = dnaSequenceInput.value.trim();
        const geneName = geneNameInput.value.trim();

        // Girişleri doğrula
        if (!isValidDNASequence(dnaSequence)) {
            alert("Lütfen sadece A, T, G, C harflerini içeren geçerli bir DNA dizisi girin.");
            return;
        }

        if (geneName === "") {
            alert("Lütfen bir gen adı girin.");
            return;
        }

        // AJAX isteğiyle Django'ya veri gönder
        fetch("/encrypt/", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "X-CSRFToken": getCSRFToken(), // Django için CSRF token gerekli
            },
            body: JSON.stringify({
                dna_sequence: dnaSequence,
                gene_name: geneName,
            }),
        })
            .then((response) => response.json())
            .then((data) => {
                if (data.success) {
                    // Şifrelenmiş veriyi göster
                    encryptedDataTextArea.value = data.encrypted_data;
                } else {
                    alert("Şifreleme işlemi başarısız oldu!");
                }
            })
            .catch((error) => {
                console.error("Hata:", error);
                alert("Sunucu ile iletişim kurulurken bir hata oluştu.");
            });
    });

    // CSRF token değerini al
    function getCSRFToken() {
        const csrfToken = document.querySelector("[name=csrfmiddlewaretoken]");
        return csrfToken ? csrfToken.value : "";
    }
});
