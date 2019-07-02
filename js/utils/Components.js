class Components {
    createElement(elementType) {
        if (!elementType) {
            throw new Error('Must pass valid HTML Element')
        }

        const createdElement = document.createElement(elementType)
        return createdElement
    }

    createNavigationMenu() {
        const navElement = this.createElement('nav')
        const ulElement = this.createElement('ul')
        const buttonElement = this.createElement('button')

        ulElement.classList.add('hidden')
        ulElement.textContent = 'This is my navigation'

        buttonElement.classList.add('navigation__button')
        buttonElement.textContent = 'MENU'

        buttonElement.addEventListener('click', () => {
            ulElement.classList.toggle('hidden')
        })

        navElement.appendChild(buttonElement)
        navElement.appendChild(ulElement)

        return navElement
    }
}

module.exports = Components