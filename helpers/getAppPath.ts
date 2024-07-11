export default function (absolutePath: string) {
    let pathElemets = absolutePath.split('/');
    let index = pathElemets.indexOf('src') - 1;
    return pathElemets.splice(index).join('/');
}