
// You should implement your task here.

module.exports = function towelSort (matrix) {
    let res = [];
    if (!matrix) {
        return res;
    }
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            const columns = i % 2 === 0 ? j : (matrix[i].length -j -1)
            res.push(matrix[i][columns]);
        }
    }
    return res;
}
