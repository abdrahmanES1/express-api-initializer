export default function (str: string) {
    if (str.endsWith('ies')) return str.slice(0, -3).concat('y');
    return str.slice(0, -1);
}