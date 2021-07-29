
/**
 * @param {Function} fn - 需要执行的函数
 * @param {Object} obj - 函数运行时指向的对象
 * @param {any} arge - 函数运行时的参数
 */
function call(fn, obj, ...arge){
    if(obj === undefined || obj ===null){
        obj = globalThis;
    }

    // 为 obj 添加临时的方法
    obj.temp = fn;

    // 调用 temp 
    const result =  obj.temp(...arge);

    // 删除 temp 临时方法
    delete obj.temp;

    // 返回执行结果
    return result;
}