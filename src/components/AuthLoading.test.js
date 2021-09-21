const AuthLoading = require("./AuthLoading")

// @ponicode
describe("componentDidMount", () => {
    let inst

    beforeEach(() => {
        inst = new AuthLoading.default("Edmond")
    })

    test("0", () => {
        let callFunction = () => {
            inst.componentDidMount()
        }
    
        expect(callFunction).not.toThrow()
    })
})
