describe('this is test suite for demo_2', () => {
    it('IT-1', () => {
        console.log('this is It-1')
    })
    it('IT-2', () => {
        console.log('this is It-2')
    })
    it('IT-3', () => {
        console.log('this is It-3')
    })
    beforeAll(() => {
        console.log('Before All')
    })
    beforeEach(() => {
        console.log('Before Each')
    })
    afterEach(() => {
        console.log('After each')
    })
    afterAll(() => {
        console.log('after All')
    })
})