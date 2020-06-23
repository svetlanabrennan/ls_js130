/*
  [ 1, 2, 3 ],    row 0 => row[0]
  [ 4, 5, 6 ],    row 1 => row[0]
  [ 7, 8, 9 ],    row 2
  [ 0, 8, 7, 6 ]  row 3
*/

class Matrix {
  constructor(points) {
    this.rows = this.getRows(points);
    this.columns = this.getColumns();
  }

  getRows(numbers) {
    return numbers.split("\n").map(elem => {
      let arr = elem.trim().split(" ").map(Number);
      console.log(arr);
      return arr;
    });
  }

  getColumns() {
    let columns = [];

    for (let secondIdx = 0; secondIdx < this.rows.length; secondIdx += 1) { // controls 2nd index
      let column = [];
      for (let firstIndx = 0; firstIndx < this.rows.length; firstIndx += 1) {
        let num = this.rows[firstIndx][secondIdx];
        column.push(num);
      }
      columns.push(column);
    }
    return columns;
  }
}

let test = new Matrix("1 2 3\n4 5 6\n7 8 9\n 8 7 6");
console.log(test.rows);
console.log(test.columns);

module.exports = Matrix;

// STOPPED AT SADDLE POINT TEST