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
        let liElements

        const pages = ['index', 'about']

        liElements = pages.map((page) => {
            // creating all elements
            const liElement = document.createElement('li')
            const aElement = document.createElement('a')

            // assigning text value to anchor
            aElement.textContent = page

            // assign an href attribute to anchor
            aElement.setAttribute('href', `/${page}.html`)

            // adding anchor to list item
            liElement.appendChild(aElement)

            // sending li somewhere
            return liElement.outerHTML
        })

        ulElement.classList.add('hidden')
        ulElement.innerHTML = liElements.join('')


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