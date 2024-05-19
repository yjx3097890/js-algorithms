// 0、1、1、2、3、5、8、13、21、34、……

// 循环的方式
function fibonacci1(n) {
    if (n < 0) return -1;
    if (n === 0) return 0;
    if (n === 1) return 1;
    let a = 0;
    let b = 1;
    let result = 0;
    for (let i = 2 ; i <= n ; i ++) {
        result = a + b;
        a = b;
        b = result;
    }
    return result;
}

// 递归的方式
function fibonacci(n) {
    if (n < 0) return -1;
    if (n === 0) return 0;
    if (n === 1) return 1;
    return fibonacci(n - 1) + fibonacci(n - 2);
}
