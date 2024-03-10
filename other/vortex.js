/**
 * 生成漩涡二维数组
 * @param m 行数
 * @param n 列数
 */
function vortex(m, n){
   const result = new Array(m).fill(0).map(() => Array(n).fill(0));
    ring(result, m, n, 1, 1, 1);
   return result;
}

/**
 *
 * @param result
 * @param m
 * @param n
 * @param i 从1开始
 * @param j 从1开始
 * @param value
 * @return {*}
 */
function ring(result, m, n, i, j, value){
    if (i > m-i + 1  || j> n-j+1) return result;
    const total = m*n;
    let num = value;
    for (let k = j-1; k < n - j + 1&& num <= total; k++) {
        result[i-1][k] = num++;
    }
    for (let k = i; k < m - i +1&& num <= total; k++) {
        result[k][n-j] = num++;
    }
    for (let k = n-j-1; k >= j-1 && num <= total; k--) {
        result[m-i][k] = num++;
    }
    for (let k = m-i-1; k >= i && num <= total; k--) {
        result[k][j-1] = num++;
    }
    return ring(result, m, n, i+1, j+1, num);
}

console.log(vortex(5,4))
