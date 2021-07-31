
/**
 * @param {Function} Fn - 需要执行的函数
 * @param {Object} obj - 函数运行时指向的对象
 * @param {Array} arge - 函数运行时的参数
 */
export function apply(Fn, obj, arge){
    if(obj === undefined || obj === null){
        // globalThis 是 es11 中代指全局的对象
        obj = globalThis;
    }

    obj.temp = Fn;
    const result = obj.temp(...arge)
    delete obj.temp;
    return result;
}
