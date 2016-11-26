const expect = require('chai').expect
const Clasroom = require('../src/classroom.js')
describe('Classroom', () => {
  describe('New Classroom', () => {
    it('has number of students provided as an argument', () => {
      const classroom = new Clasroom(50)
      const noOfStuds = classroom.noOfStuds
      expect(noOfStuds).to.equal(50)
    })
    it('has another number of students provided as an argument', () => {
      const classroom = new Clasroom(100)
      const noOfStuds = classroom.noOfStuds
      expect(noOfStuds).to.equal(100)
    })
  })
  describe('#addStudent ', () => {
    it('adds the number of students when positive numbers provided as an argument', () => {
      const classroom = new Clasroom(40)
      classroom.addStudent(10)
      const noOfStuds = classroom.noOfStuds
      expect(noOfStuds).to.equal(50)
    })
    it('adds another number of students when positive numbers provided as an argument', () => {
      const classroom = new Clasroom(50)
      classroom.addStudent(10)
      const noOfStuds = classroom.noOfStuds
      expect(noOfStuds).to.equal(60)
    })
    it('do nothing when negative numbers provided as an argument', () => {
      const classroom = new Clasroom(50)
      classroom.addStudent(-10)
      const noOfStuds = classroom.noOfStuds
      expect(noOfStuds).to.equal(50)
    })
  })
  describe('#removeStudent', () => {
    it('decreases the noOfStuds when given positive numbers', () => {
      const classroom = new Clasroom(50)
      classroom.removeStudent(10)
      const noOfStuds = classroom.noOfStuds
      expect(noOfStuds).to.equal(40)
    })
    it('one more time decreases the noOfStuds when given positive numbers', () => {
      const classroom = new Clasroom(50)
      classroom.removeStudent(20)
      const noOfStuds = classroom.noOfStuds
      expect(noOfStuds).to.equal(30)
    })
    it('do nothing when given negative numbers', () => {
      const classroom = new Clasroom(50)
      classroom.removeStudent(-10)
      const noOfStuds = classroom.noOfStuds
      expect(noOfStuds).to.equal(50)
    })
  })
})
