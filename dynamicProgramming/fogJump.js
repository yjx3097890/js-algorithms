// 一个青蛙，一次只能跳一级台阶，或者跳两级台阶。
// 问：这个青蛙跳上 n 级台阶有多少种跳法。

// f(n) = f(n-1) + f(n-2)

function fogJump(n) {
    if (n <= 0) return -1;
    if (n === 1) return 1;
    if (n === 2) return 2;
    return fogJump(n-1) + fogJump(n-2);
}
