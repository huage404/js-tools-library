
/**
 * @param {Function} fn - 需要执行的函数
 * @param {Object} obj - 函数运行时指向的对象
 * @param {Array} arge - 函数运行时的参数
 */
function apply(fn, obj, arge){
    if(obj === undefined || obj === null){
        // globalThis 是 es11 中代指全局的对象
        obj = globalThis;
    }

    obj.temp = fn;
    const result = obj.temp(...arge)
    delete obj.temp;
    return result;
}