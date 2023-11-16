import firstLetterToUpperCase from '../../helpers/firstLetterToUpperCase'

describe('Test Capitalize funtion', () => {

    it('should Return first Letter To Upper Case', async () => {
        expect(firstLetterToUpperCase("users")).toBe("Users")
    })
})