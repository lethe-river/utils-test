//利用递归对left和right数组继续拆分
export const midSort = function (nums) {
    if (nums.length <= 1) return nums;
    let mid = Math.floor(nums.length / 2),
        midNum = nums.splice(mid, 1)[0];
    let left = [], right = [];
    nums.forEach(item => {
        item < midNum ? left.push(item) : right.push(item)
    })
    return midSort(left).concat(midNum, midSort(right));
}

//防抖debounce代码：
export const debounce = function (fn, delay) {
    var timeout = null; // 创建一个标记用来存放定时器的返回值
    return function (e) {
        // 每当用户输入的时候把前一个 setTimeout clear 掉
        clearTimeout(timeout);
        // 然后又创建一个新的 setTimeout, 这样就能保证interval 间隔内如果时间持续触发，就不会执行 fn 函数
        timeout = setTimeout(() => {
            fn.apply(this, arguments);
        }, delay);
    };
}


//节流throttle代码：
export const throttle = function (fn, delay) {
    let canRun = true; // 通过闭包保存一个标记
    return function () {
        // 在函数开头判断标记是否为true，不为true则return
        if (!canRun) return;
        // 立即设置为false
        canRun = false;
        // 将外部传入的函数的执行放在setTimeout中
        setTimeout(() => {
            // 最后在setTimeout执行完毕后再把标记设置为true(关键)表示可以执行下一次循环了。
            // 当定时器没有执行的时候标记永远是false，在开头被return掉
            fn.apply(this, arguments);
            canRun = true;
        }, delay);
    };
}

