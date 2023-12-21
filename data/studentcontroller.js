//Import data
const students = require('../data/student');

//Membuat class StudentController
class StudentController {
    index = (req, res) => {
        const data = {
            message: `Menampilkan Semua Students`,
            data: students
        }
        res.json(data);
    }

    store(req, res){
         //menampilkan semua data terbaru
        const { name } = req.body;
        students.push(name);
        const data = {
            message: `Menambahkan data student : Aufa`,
            data: students
        }

        res.json(data);
    }

    update(req, res) {
        const { id } = req.params;
        const { name } = req.body;
        students[id] = name;
        const data = {
            message: `Mengedit student id: 1, nama : Claudia`,
            data: students
        }
        res.json(data);
    }

    destroy(req, res){
        const { id } = req.params;
        students.splice(id, 1);
        const data = {
            message: `Menghapus student id: 2`,
            data: students
        }
        res.json(data);
    }
}

//Export object
const object = new StudentController();

module.exports = object;