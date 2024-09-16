const calculateBtn = document.querySelector('.calc');
const inputDate = document.querySelector('.dob');
const displayAge = document.querySelector('.displayAge');

calculateBtn.addEventListener('click', (e) => {
    const birthDate = new Date(inputDate.value); // convert the user input date into date format.
    const today = new Date(); // get the current date.

    // Extract year, month, and day
    let birthYear = birthDate.getFullYear();
    let birthMonth = birthDate.getMonth(); // Note: months are zero-indexed
    let birthDay = birthDate.getDate();

    let currentYear = today.getFullYear();
    let currentMonth = today.getMonth();
    let currentDay = today.getDate();

    let age = currentYear - birthYear;
    displayAge.textContent = age + " Years Old "
})