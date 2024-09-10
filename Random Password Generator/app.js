const generateBtn = document.querySelector('.btn');
const inputText = document.querySelector('.copy-input');
const copyIcon = document.querySelector('.copy-icon');

// Function to generate a strong random password
function generateRandomStrongPassword(length = 12) {
    const upperCaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const lowerCaseChars = 'abcdefghijklmnopqrstuvwxyz';
    const numbers = '0123456789';
    const specialChars = '!@#$%^&*()-_=+[]{}|;:,.<>?';

    const allChars = upperCaseChars + lowerCaseChars + numbers + specialChars;

    let password = '';

    // Ensure at least one character from each group
    password += upperCaseChars[Math.floor(Math.random() * upperCaseChars.length)];
    password += lowerCaseChars[Math.floor(Math.random() * lowerCaseChars.length)];
    password += numbers[Math.floor(Math.random() * numbers.length)];
    password += specialChars[Math.floor(Math.random() * specialChars.length)];

    // Fill the remaining characters randomly
    for (let i = 4; i < length; i++) {
        password += allChars[Math.floor(Math.random() * allChars.length)];
    }

    // Shuffle the password to avoid predictable patterns
    password = password.split('').sort(() => Math.random() - 0.5).join('');

    return password;
}

// Event listener for generating password
generateBtn.addEventListener('click', () => {
    inputText.value = generateRandomStrongPassword(12); // Generate a 12-character password
});

// Event listener for copying the password
copyIcon.addEventListener('click', () => {
    inputText.select();  // Select the text in the input field
    document.execCommand('copy');  // Copy the selected text to clipboard
    alert('Password copied: ' + inputText.value);
});