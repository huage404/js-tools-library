import {call} from './call'

/**
 * 模拟 bind
 * @param {Function} Fn - 被绑定的函数
 * @param {Object} obj - 绑定函数的 this 指向的对象
 * @param args - 被绑定函数的参数
 * @returns {function(...[*]=)}
 */
export function bind(Fn, obj, ...args){
    return function (...args2){
        call(Fn, obj, ...args, ...args2)
    }
}
