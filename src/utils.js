export const isArray = Array.isArray;
export const isObject = (arg) => {
    return Object.prototype.toString.call(arg) === '[object Object]';
};
export const isString = (arg) => {
    return typeof arg === 'string';
};
export const objectToArray = (obj) => {
    return Object.keys(obj).filter(key => !!obj[key]);
};
