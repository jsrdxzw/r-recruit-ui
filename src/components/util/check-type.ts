const toString = Object.prototype.toString;

export function isFunction(target: any): boolean {
    return toString.apply(target) === '[object Function]'
}

