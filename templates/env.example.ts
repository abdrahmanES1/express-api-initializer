export default function (): string {
  let template = `
PORT=4000
MONGOO_DB_URL=mongodb://localhost:27017
NODE_ENV=development

CLIENT_URL=http://localhost:3000/

`;

  return template;
}
