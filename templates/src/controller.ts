import firstLetterUpperCase from '../../../helpers/firstLetterToUpperCase'
import toSinglure from '../../../helpers/toSinglure'

export default function (fileName: string): string {
    const UpperCaseName = firstLetterUpperCase(fileName);
    const siglulareName = toSinglure(UpperCaseName);

    return `
const asyncHandler = require('express-async-handler');
const ${siglulareName} = require('../models/${fileName}.model');

const getAll${UpperCaseName} = asyncHandler(async (req, res, next) => {
    const { populate, min ,max } = req.query;

    res.status(200).send({
        "success": true,
        
    });
})

const get${siglulareName} = asyncHandler(async (req, res, next) => {
    const { id } = req.params;
    res.status(200).send({
        "success": true,
    });
});

const delete${siglulareName} = asyncHandler(async (req, res, next) => {
    const { id } = req.params;

    return res.status(200).send({
        "success": true
    });

});

const modify${siglulareName} = asyncHandler(async (req, res, next) => {
    const { id } = req.params;

    return res.status(200).send({
        "success": true,

    });
});




module.exports = { getAll${UpperCaseName}, get${siglulareName}, delete${siglulareName}, modify${siglulareName} };
    
    `
}
