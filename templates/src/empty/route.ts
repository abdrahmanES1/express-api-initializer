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
    siglulareUpperCaseName: firstLetterToUpperCase(
      pluralize.singular(correctFileName).toLowerCase()
    ),
    // e.g : user
    siglulareName: pluralize.singular(correctFileName).toLowerCase(),
    //  e.g : Users
    pluralizeUpperCaseName: firstLetterToUpperCase(correctFileName),
    // e.g : users
    pluralizeName: correctFileName,
  };

  let template = `
const Router = require('express').Router;

const route = Router();

module.exports = route;
`;

  const content = Handlebars.compile(template);
  return content(context);
}
