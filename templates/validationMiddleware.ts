export default function (): string {
  return `
const { z, ZodError } = require('zod');

const { StatusCodes } = require('http-status-codes');

module.exports = {
    /**
     * 
     * @param {*} schema 
     * @param {"query"|"body"|"params"} object 
     * @returns 
     */
    validateData(schema, object) {
        return (req, res, next) => {
            try {
                schema.parse(req[object]);
                next();
            } catch (error) {
                if (error instanceof ZodError) {
                    const errorMessages = error.errors.map((issue) => ({
                        message: issue.path.join('.')+" is "+issue.message,
                    }))
                    res.status(StatusCodes.BAD_REQUEST).json({ error: 'Invalid data', details: errorMessages });
                } else {
                    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ error: 'Internal Server Error' });
                }
            }
        };
    }
}
`;
}
