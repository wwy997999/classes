type Modifiers = string[] | (string | Record<string, boolean>)[] | Record<string, boolean> | string | undefined;
type ModifiersFn = () => Modifiers;
export declare const useBlockClasses: (blockName: string, fn: ModifiersFn, prefix?: string) => any;
export declare const useElememtClasses: (elementName: string, fn: ModifiersFn) => any;
export {};
