const Components = require('../../js/utils/Components')

let components;

beforeEach(() => {
    components = new Components()
})

describe('createElement', () => {
    test('should create an element', () => {
        // console.log(components.createElement('p'))
        expect(components.createElement('p') instanceof HTMLParagraphElement).toBeTruthy()
    })

    test('should throw error when no parameter is passed', () => {
        // console.log(components.createElement())
        expect(() => {
            components.createElement()
        }).toThrow('Must pass valid HTML Element')
    })
})

describe('createNavigationMenu', () => {
    test('should create a HTMLNavElement', () => {
        // console.log(components.createNavigationMenu())
        expect(components.createNavigationMenu() instanceof HTMLElement).toBeTruthy()
    })

    test('should contain an unordered list', () => {
        console.log(components.createNavigationMenu().querySelector('ul'))
        expect(components.createNavigationMenu().querySelector('ul') instanceof HTMLUListElement).toBeTruthy()
    })
})