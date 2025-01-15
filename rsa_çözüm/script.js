const publicKey = `-----BEGIN PUBLIC KEY-----
YOUR_PUBLIC_KEY_HERE
-----END PUBLIC KEY-----`;

const privateKey = `-----BEGIN PRIVATE KEY-----
YOUR_PRIVATE_KEY_HERE
-----END PRIVATE KEY-----`;

function encryptData() {
    const plainData = document.getElementById('input-plain-data').value;
    const encrypt = new JSEncrypt();
    encrypt.setPublicKey(publicKey);
    const encrypted = encrypt.encrypt(plainData);
    document.getElementById('output-encrypted-data').value = encrypted;
}

function decryptData() {
    const encryptedData = document.getElementById('input-encrypted-data').value;
    const decrypt = new JSEncrypt();
    decrypt.setPrivateKey(privateKey);
    const decrypted = decrypt.decrypt(encryptedData);
    document.getElementById('output-decrypted-data').value = decrypted;
}
