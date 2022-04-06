//question 1
const student = {
    firstName: '',
    lastName: '',
    grades: [],
    inputNewGrade: function (newGarde) {
        this.grades.push(newGarde);
    },

    computeAverageGrade() {
        return this.grades.reduce((sum, current,index, array) => sum + current / array.length, 0)
    }
}

//question 2
function Student(firstName,lastName, grades = [])
{
    this.firstName = firstName ;
    this.lastName = lastName ;
    this.grades = grades ;
}

Student.prototype.inputNewGrade = function(newGarde) {
    this.grades.push(newGarde);
}
Student.prototype.computeAverageGrade = function() {
    return this.grades.reduce((sum, current,index, array) => sum + current / array.length, 0)
}


// const stu1 = Object.create(student);
// stu1.firstName = 'John';
// stu1.lastName = 'Smith';
// stu1.inputNewGrade(88);
// stu1.inputNewGrade(98);
// stu1.inputNewGrade(86);
// stu1.inputNewGrade(80);
// const stu2 = Object.create(student);
// stu2.firstName = 'John2';
// stu2.lastName = 'Smith2';
// stu2.inputNewGrade(85);
// stu2.inputNewGrade(95);
// stu2.inputNewGrade(85);
// stu2.inputNewGrade(70);
// const students = [stu1, stu2];
// const result = students.reduce((average, stu,index, array) => average + stu.computeAverageGrade() / array.length, 0);
// console.log(result);

