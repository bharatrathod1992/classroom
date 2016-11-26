class Classroom {
  constructor(noOfStuds) {
    this.noOfStuds = noOfStuds
  }
  addStudent(noOfStuds){
    if(noOfStuds < 0) return
    this.noOfStuds += noOfStuds
  }
  removeStudent(noOfStuds){
    if(noOfStuds < 0) return
    this.noOfStuds -= noOfStuds
  }
}
module.exports = Classroom
