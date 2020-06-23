class Garden {
  constructor(diagram, students = STUDENTS) {
    this.cupRows = diagram.split("\n");
    this.students = students.sort();
    this.students.forEach((student, idx) => {
      this[student.toLowerCase()] = this.getPlantForStudent(idx);
    });
  }

  getPlantForStudent(idx) {
    let firstCupIndex = idx * 2;
    let secondCupIndex = firstCupIndex + 1;
    let plants = [
      this.cupRows[FIRST_ROW][firstCupIndex],
      this.cupRows[FIRST_ROW][secondCupIndex],
      this.cupRows[SECOND_ROW][firstCupIndex],
      this.cupRows[SECOND_ROW][secondCupIndex],
    ]
    return plants.map(plant => PLANTS[plant]);
  }
}

let PLANTS = {
  G: "grass",
  C: "clover",
  R: "radishes",
  V: "violets"
}

let STUDENTS = [
  "Alice",
  "Bob",
  "Charlie",
  "David",
  "Eve",
  "Fred",
  "Ginny",
  "Harriet",
  "Ileana",
  "Joseph",
  "Kincaid",
  "Larry"
]

const FIRST_ROW = 0;
const SECOND_ROW = 1;


module.exports = Garden;