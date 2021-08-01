/**
 * 模仿 reduce 函数
 * @param {Array} arr - 被遍历的数组
 * @param {Function} callback - 回调函数
 * @param initValue - 初始值
 * @returns {*}
 */
export function reduce(arr, callback, initValue){
    // 声明变量
    let result = initValue;

    // 执行回调
    for(let i = 0; i < arr.length; i++){
        // 执行回调
        result = callback(result, arr[i])
    }
    // 返回最终结果
    return result;
}
