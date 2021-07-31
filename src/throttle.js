/**
 * 节流函数
 * @param {Function} callback - 回调函数
 * @param wait - 节流的间隔时间
 * @returns {function(...[*]=)}
 */
export function throttle(callback, wait){
    // 定义开始时间
    let start = 0;

    /**
     * 返回结果是一个函数
     * @param event - 事件源对象
     */
    return function (event){
        // 获取当前的时间戳
        let now = Date.now();
        // 判断
        if(now - start >= wait){
            callback.call(this, event);
            // 修改开始时间
            start = now
        }
    }
}
