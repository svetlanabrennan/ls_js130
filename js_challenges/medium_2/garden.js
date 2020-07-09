const STUDENTS = [
  "Alice", "Bob", "Charlie", "David",
  "Eve", "Fred", "Ginny", "Harriet",
  "Ileana", "Joseph", "Kincaid", "Larry"
]

const PLANTCHART = {
  G: "grass",
  C: "clover",
  R: "radishes",
  V: "violets"
}

class Garden {
  constructor(plants, students = STUDENTS) {
    this.assigned = {};
    this.rows = plants.split("\n");
    this.students = students.sort().map(student => student.toLowerCase());
    this.students.forEach((student, idx) => {
      this[student] = this.assignPlants(idx);
    });
  }

  assignPlants(index) {
    let firstCup = index * 2;
    let secondCup = firstCup + 1;
    let plants = [
      this.rows[0][firstCup],
      this.rows[0][secondCup],
      this.rows[1][firstCup],
      this.rows[1][secondCup]
    ]
    return plants.map(plant => PLANTCHART[plant]);
  }
}

let test = new Garden("VVCG\nVVRC");
console.log(test);

module.exports = Garden;
