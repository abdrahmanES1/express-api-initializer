import firstLetterToUpperCase from "../../../helpers/firstLetterToUpperCase";
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
function {{siglulareName}}Middleware(error, request, response, next) {
    next();
}
module.exports = {{siglulareName}}Middleware;

`;

  const content = Handlebars.compile(template);
  return content(context);
}
