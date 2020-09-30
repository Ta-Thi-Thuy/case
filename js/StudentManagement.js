class StudentManagement {
    constructor(arr) {
        this.students = arr;
    }

    showList() {
        let table = '';
        for (let i = 0; i < this.students.length; i++) {

            table += '<tr>';
            table += '<td>';
            table += i + 1;
            table += '</td>';

            table += '<td>';
            table += this.students[i].fullname;
            table += '</td>';

            table += '<td>';
            table += this.students[i].date;
            table += '</td>';

            table += '<td>';
            table += this.students[i].grade;
            table += '</td>';

            table += '<td>';
            table += '<img width="100px" height="100px" src=" '+this.students[i].img+'">';
            table += '</td>';

            table += '<td>' +
                '<button type="button" onclick="deleteStudent('+i+')">Delete</button>' +
                '<button type="button" onclick="editStudent('+i+')">Edit</button>' +
                '</td>';


            table += '</tr>';
        }
        console.log(table)

        document.getElementById('list-student').innerHTML = table;
    }

    addStudent(student) {
        this.students.push(student);
    }

    delete(id) {
        this.students.splice(id, 1);
    }

    findStudentById(id){
        return this.students[id];
    }

    edit(student,id, fullname, date, grade, img){
        student.edit(id, fullname, date, grade, img);
    }

}





