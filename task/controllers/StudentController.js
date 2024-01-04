// import Model Student
const Student = require("../models/Student");

class StudentController {
  // menambahkan keyword async
  async index(req, res) {
    // memanggil method static all dengan async await.
    const students = await Student.all();
    // data array lebih dari 0
    if  (students.length > 0) {
    const data = {
      message: "Menampilkkan semua students",
      data: students,
    };

    res.status(200).json(data);
  }
  else {
    const data = {
      message: "Data student tidak ditemukan",
    };

    res.status(200).json(data);
  }
  }

  async store(req, res) {
    // memanggil method static create dengan async await.
    
    const { nama, nim, email, jurusan } = req.body;

    // jika data undefined maka kirim response error
    if (!nama || !nim || !email || !jurusan) {
      const data = {
        message: "Semua data harus dikirim",
      };

      return res.status(422).json(data);
    }

    // else
    const student = await Student.create(req.body);
    const data = {
      message: "Berhasil menambahkan data student",
      data: student,
    };

    return res.status(201).json(data);
  }


  // update
async update(req, res) {
    const { id } = req.params;

    // cari id student yang ingin di update
    const student = await Student.find(id);

    if (student) {
      // melakukan update data student
      const student = await Student.update(id, req.body);
      const data = {
        message: `Mengedit data student`,
        data: student,
      };
      res.status(200).json(data);
    }
    else {
      const data = {
        message: `Data student tidak ditemukan`,
      };

      res.status(404).json(data);
    }
  }

  // update(req, res) {
  //   const { id } = req.params;
  //   const { nama } = req.body;

  //   const data = {
  //     message: `Mengedit student id ${id}, nama ${nama}`,
  //     data: [],
  //   };

  //   res.json(data);
  // }


  // delete
  async destroy(req, res) {
    const { id } = req.params;
    const student = await Student.find(id);

    if (student) {
      await Student.delete(id);
      const data = {
        message: `Menghapus data student`,
      };

      res.status(200).json(data);
    } else {
      const data = {
        message: `Data student tidak ditemukan`,
      };

      res.status(404).json(data);
    }
  }

// get one resource
async show(req, res) {
    const { id } = req.params;
    const student = await Student.find(id);

    if (student) {
      const data = {
        message: `Menampilkan detail student`,
        data: student,
      };

      res.status(200).json(data);
    } else {
      const data = {
        message: `Data student tidak ditemukan`,
      };

      res.status(404).json(data);
    }
  }

 



}

// Membuat object StudentController
const object = new StudentController();

// Export object StudentController
module.exports = object;
