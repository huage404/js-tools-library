/**
 *  函数防抖
 *  @param {Function} callback - 回调函数
 *  @param {Number} time - 间隔时间，单位 ms
 */
export function debounce(callback, time) {
    let timeId = null;
    return function (e) {
        if (timeId !== null) {
            clearTimeout(timeId)
        }
        // 启动定时器
        timeId = setTimeout(() => {
            // 执行回调
            callback.call(this, e);
            // 重置定时器变量
            timeId = null;
        }, time)
    }
}
