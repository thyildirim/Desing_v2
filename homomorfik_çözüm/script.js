function decryptData() {
    const inputEncryptedData = document.getElementById('input-encrypted-data').value;
    const decryptedData = atob(inputEncryptedData); // Basit bir Base64 çözümleme örneği
    document.getElementById('output-decrypted-data').value = decryptedData;
}