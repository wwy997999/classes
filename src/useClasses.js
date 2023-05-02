import { inject, provide, computed } from 'vue-demi';
import { isArray, isObject, isString, objectToArray } from './utils';
const classesSymbol = Symbol('classes');
const _prefix = 'o';
// blockName__elementName--modifierName
const useClasses = (name, modifiers) => {
    if (!modifiers) {
        return name;
    }
    if (isString(modifiers)) {
        return `${name}--${modifiers}`;
    }
    else if (isArray(modifiers)) {
        const classes = [];
        modifiers.forEach(modifier => {
            if (isObject(modifier)) {
                classes.push(...objectToArray(modifiers).map(modifier => `${name}--${modifier}`));
            }
            else {
                classes.push(`${name}--${modifier}`);
            }
        });
        return classes;
    }
    else if (isObject(modifiers)) {
        return objectToArray(modifiers).map(modifier => `${name}--${modifier}`);
    }
    else {
        return name;
    }
};
export const useBlockClasses = (blockName, fn, prefix = _prefix) => {
    const name = `${prefix}-${blockName}`;
    provide(classesSymbol, name);
    return computed(() => {
        const modifiers = fn();
        return useClasses(name, modifiers);
    });
};
export const useElememtClasses = (elementName, fn) => {
    const prefix = inject(classesSymbol, 'unknown-block');
    const name = `${prefix}__${elementName}`;
    return computed(() => {
        const modifiers = fn();
        return useClasses(name, modifiers);
    });
};
