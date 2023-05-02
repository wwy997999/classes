export const isArray = Array.isArray;

export const isObject = (arg: any): arg is Record<string, any> => {
  return  Object.prototype.toString.call(arg) === '[object Object]'
}

export const isString = (arg: any): arg is string => {
  return typeof arg === 'string'
}

export const objectToArray = (obj: Record<string, any>) => {
  return Object.keys(obj).filter(key => !!obj[key])
}