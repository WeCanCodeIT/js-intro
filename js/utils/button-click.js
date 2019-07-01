function toggleBackground() {
    const submitButton = document.querySelector('.submit-button');
    const firstName = document.querySelector('.first-name');
    const output = document.querySelector('.output');

    submitButton.addEventListener('click', () => {
        const value = firstName.value
        output.innerHTML = value
        output.classList.toggle('blue-background')
    })
}

export default { toggleBackground }