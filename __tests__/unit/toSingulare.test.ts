import toSinglure from '../../helpers/toSinglure'

describe('Test transform Plural Noun to Siglure Noun', () => {

    it('should Return Siglure Noun From Plural Noun ', async () => {
        expect(toSinglure("Users")).toBe("User")
        expect(toSinglure("universities")).toBe("university")
        expect(toSinglure("foxes")).toBe("foxe")
    })
})