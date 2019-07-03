class Events {
    toggleTheme() {
        const body = document.body
        const themeButton = document.querySelector('.theme-button')

        themeButton.addEventListener('click', () => {
            body.classList.toggle('dark')

            // For more than two themes
            // body.classList.remove('light')
            // body.classList.remove('green')
            // body.classList.add('dark')
        })
    }
}

module.exports = Events