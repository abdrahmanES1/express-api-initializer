import firstLetterToUpperCase from "../../helpers/firstLetterToUpperCase";
import Handlebars from "handlebars";
import pluralize from "pluralize";
export default function (fileName: string): string {
  let correctFileName = pluralize.isPlural(fileName)
    ? fileName.toLowerCase()
    : pluralize.plural(fileName).toLowerCase();

  const context = {
    fileName: correctFileName,
    // e.g :  User
    siglulareUpperCaseName: firstLetterToUpperCase(pluralize.singular(correctFileName).toLowerCase()),
    // e.g : user
    siglulareName: pluralize.singular(correctFileName).toLowerCase(),
    //  e.g : Users
    pluralizeUpperCaseName: firstLetterToUpperCase(correctFileName),
    // e.g : users
    pluralizeName: correctFileName,
  };

  let template = `
const Router = require('express').Router;
const { getAll{{pluralizeUpperCaseName}}, get{{siglulareUpperCaseName}}, create{{siglulareUpperCaseName}}, delete{{siglulareUpperCaseName}}, modify{{siglulareUpperCaseName}} } = require('../controllers/{{fileName}}.controller')
const { validateData } = require('../middlewares/validationMiddleware.middleware');
const { create{{siglulareUpperCaseName}}Schema, id{{siglulareUpperCaseName}}Schema } = require('../schemas/{{pluralizeName}}.schema');

const route = Router();

route.get('', getAll{{pluralizeUpperCaseName}});
route.post('', validateData(id{{siglulareUpperCaseName}}Schema, "params"), create{{siglulareUpperCaseName}});
route.get('/:id', validateData(id{{siglulareUpperCaseName}}Schema, "params"), get{{siglulareUpperCaseName}});
route.put('/:id', validateData(id{{siglulareUpperCaseName}}Schema, "params"), modify{{siglulareUpperCaseName}});
route.delete('/:id', validateData(id{{siglulareUpperCaseName}}Schema, "params"), delete{{siglulareUpperCaseName}});
module.exports = route;
`;

  const content = Handlebars.compile(template);
  return content(context);
}
