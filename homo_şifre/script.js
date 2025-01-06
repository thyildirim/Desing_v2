function validateDNASequence(sequence) {
    return /^[ATCG]+$/i.test(sequence);
}

function encryptDNA() {
    // Form validasyonu
    const geneName = document.getElementById('gene-name').value;
    const dnaSequence = document.getElementById('dna-sequence').value.toUpperCase();
    
    // Hata kontrolü
    let hasError = false;
    
    if (!geneName) {
        document.getElementById('gene-name-error').style.display = 'block';
        hasError = true;
    } else {
        document.getElementById('gene-name-error').style.display = 'none';
    }

    if (!validateDNASequence(dnaSequence)) {
        document.getElementById('dna-sequence-error').style.display = 'block';
        hasError = true;
    } else {
        document.getElementById('dna-sequence-error').style.display = 'none';
    }

    if (hasError) return;

    // DNA şifreleme algoritması (örnek olarak basit bir şifreleme)
    let encrypted = '';
    for (let i = 0; i < dnaSequence.length; i++) {
        switch(dnaSequence[i]) {
            case 'A': encrypted += 'T'; break;
            case 'T': encrypted += 'A'; break;
            case 'G': encrypted += 'C'; break;
            case 'C': encrypted += 'G'; break;
        }
    }

    // Sonuçları göster
    document.getElementById('encrypted-data').value = encrypted;
    document.getElementById('result-container').style.display = 'block';
}

function saveData() {
    // Burada kaydetme işlemi yapılacak
    alert('Şifrelenmiş DNA verisi kaydedildi!');
}