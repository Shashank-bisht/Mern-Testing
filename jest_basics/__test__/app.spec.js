const {getData}  = require('./app')

jest.mock("crypto", () => {
    return {
        randomBytes: jest.fn(() => {
            return Buffer.from('test')
        })
    }
})

test('fetch data', async () => {
    const data = await getData()
    console.log(data)
})

