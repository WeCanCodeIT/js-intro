const Components = require('./utils/Components')

const components = new Components()
const mainHeader = document.querySelector('.main-header')

mainHeader.appendChild(components.createNavigationMenu())