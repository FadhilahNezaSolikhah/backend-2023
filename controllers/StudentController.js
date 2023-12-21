// membuat class StudentController
class StudentController {
    // membuat method index
    index(req, res) {
        res.send('Menampilkan semua student');
    }
    // membuat method store
    store(req, res) {
        res.send('Menambahkan data student');
    }
    // membuat method update
    update(req, res) {
        const { id } = req.params;
        res.send(`Mengedit data student dengan id = ${id}`);
    }
    // membuat method destroy
    destroy(req, res) {
        const { id } = req.params;
        res.send(`Menghapus data student dengan id = ${id}`);
    
    }
}

// membuat object StudentController
const object = new StudentController();

// export object
module.exports = object;
