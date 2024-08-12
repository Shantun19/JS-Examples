document.querySelector('.btn').addEventListener('click', () => {
    const inputField = document.querySelector('.input__text');
    const resultElement = document.querySelector('.result');
    const value = inputField.value.trim();

    resultElement.className = '';

    if (!value) {
        resultElement.innerText = 'Please enter a valid input.';
        resultElement.classList.add('not-palindrome');
        return;
    }

    const isPalindrome = checkPalindrome(value);
    resultElement.innerText = `${value} is ${isPalindrome ? '' : 'not '}a palindrome String.`;
    resultElement.classList.add(isPalindrome ? 'palindrome' : 'not-palindrome');
});

function checkPalindrome(value) {
    return value === value.split('').reverse().join('');
}


