export default function (str: string) {
    if(str.endsWith('y')) return str.concat('ies');
    return str.concat('s');
}