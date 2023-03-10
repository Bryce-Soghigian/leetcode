/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */
var findKthPositive = function(arr, k) {
    let res = 0
    let len = arr.length
    for (let i = 0; i < len; i++) {
        if (arr[i] - i - 1 >= k) {
            res = i + k
            return res
        }
    }
    return len + k
};