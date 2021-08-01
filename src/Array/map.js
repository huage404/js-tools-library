/**
 * 模拟 map 函数
 * @param {Array} arr - 被循环的函数
 * @param {Function} callback - 回调函数
 * @returns {[]}
 */
export function map(arr, callback){
    const result = [];
    for(let i = 0; i < arr.length; i++){
        // 执行回调
        result.push(callback(arr[i], i))
    }
    // 返回结果
    return result;
}
