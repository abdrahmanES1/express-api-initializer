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
const mongoose = require("mongoose");
const asyncHandler = require('express-async-handler');
const {{siglulareUpperCaseName}} = require('../models/{{fileName}}.model');
const ErrorResponse = require('../utils/errorResponse');

const getAll{{pluralizeUpperCaseName}} = asyncHandler(async (req, res, next) => {
    const { populate, min ,max } = req.query;
    const {{pluralizeName}} = await {{siglulareUpperCaseName}}.find({});

    res.status(200).send({
        "success": true,
        {{pluralizeName}}
    });
})

const create{{siglulareUpperCaseName}} = asyncHandler(async (req, res, next) => {
    const { id } = req.params;
    
    if (!mongoose.isValidObjectId(id)) {
        return next(new ErrorResponse("id not valid", 403));
    }
    const {{siglulareName}} = await {{siglulareUpperCaseName}}.findById(id);
    
    if (!{{siglulareName}}) { return next(new ErrorResponse('{{siglulareName}} does not exist', 403)) }
    res.status(200).send({
        "success": true,
        {{siglulareName}}
    });
});

const get{{siglulareUpperCaseName}} = asyncHandler(async (req, res, next) => {
    const { id } = req.params;

    if (!mongoose.isValidObjectId(id)) {
        return next(new ErrorResponse("id not valid", 403));
    }
    const {{siglulareName}} = await {{siglulareUpperCaseName}}.findById(id);
    
    if (!{{siglulareName}}) { return next(new ErrorResponse('{{siglulareName}} does not exist', 403)) }
    res.status(200).send({
        "success": true,
        {{siglulareName}}
    });
    res.status(200).send({
        "success": true,
    });
});

const delete{{siglulareUpperCaseName}} = asyncHandler(async (req, res, next) => {
    const { id } = req.params;
    const {{siglulareName}} = await {{siglulareUpperCaseName}}.deleteOne({ _id: id });


    if ({{siglulareName}}.deletedCount == 0) {
        return next(new ErrorResponse("{{siglulareName}} not found", 403))
    }

    return res.status(200).send({
        "success": true
    });

});

const modify{{siglulareUpperCaseName}} = asyncHandler(async (req, res, next) => {
    const { id } = req.params;
    const { {{siglulareName}} } = req.body;

    if (!mongoose.isValidObjectId(id)) {
        return next(new ErrorResponse("{{siglulareName}} id not valid", 403));
    }

    const exist{{siglulareUpperCaseName}} = await {{siglulareUpperCaseName}}.findByIdAndUpdate(id, { ...{{siglulareName}} });

    if (!exist{{siglulareUpperCaseName}}) {
        return next(new ErrorResponse("{{siglulareName}} not exist", 403));
    }

    return res.status(200).send({
        "success": true,
        {{siglulareName}}: exist{{siglulareUpperCaseName}}
    });
});

module.exports = { getAll{{pluralizeUpperCaseName}}, get{{siglulareUpperCaseName}}, create{{siglulareUpperCaseName}}, delete{{siglulareUpperCaseName}}, modify{{siglulareUpperCaseName}} };`;

  const content = Handlebars.compile(template);
  return content(context);
}
