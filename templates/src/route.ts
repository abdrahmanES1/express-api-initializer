import firstLetterUpperCase from '../../helpers/firstLetterToUpperCase'
import toSinglure from '../../helpers/toSinglure'
export default function (fileName: string): string {
    const UpperCaseName = firstLetterUpperCase(fileName);
    const siglulareName = toSinglure(UpperCaseName);
    return `
const Router = require('express').Router;
const { getAll${UpperCaseName}, get${siglulareName}, create${siglulareName}, modify${siglulareName}, delete${siglulareName}} = require('../controllers/${fileName}.controller')

const route = Router();

route.get('', getAll${UpperCaseName});
route.post('', create${siglulareName});
route.get('/:id', get${siglulareName});
route.put('/:id', modify${siglulareName});
route.delete('/:id', delete${siglulareName});
module.exports = route;
    
    `
}
