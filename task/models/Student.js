// import database
const db = require("../config/database");

// membuat class Model Student
class Student {
  /**
   * Membuat method static all.
   */
  static all() {
    // return Promise sebagai solusi Asynchronous
    return new Promise((resolve, reject) => {
      const sql = "SELECT * from students";
      /**
       * Melakukan query menggunakan method query.
       * Menerima 2 params: query dan callback
       */
      db.query(sql, (err, results) => {
        resolve(results);
      });
    });
  }

  /**
   * TODO 1: Buat fungsi untuk insert data.
   * Method menerima parameter data yang akan diinsert.
   * Method mengembalikan data student yang baru diinsert.
   */
  static async create(data) {
    // melakukan insert data ke database
    const id = await new Promise((resolve, reject) => {
      const sql = "INSERT INTO students SET ?";
      db.query(sql, data, (err, results) => {
        resolve(results.insertId);
      });
    });

    // melakukan query berdasarkan id
    const student = this.find(id);
    return student;
  }

  static async find(id) {
    return new Promise((resolve, reject) => {
      const sql = "SELECT * FROM students WHERE id = ?";
      db.query(sql, id, (err, results) => {
        resolve(results[0]);
      });
    });
  }

  /**
   * TODO 2: Buat fungsi untuk update data.
   * Method menerima parameter id dan data yang akan diupdate.
   * Method mengembalikan data student yang baru diupdate.
   
   */
  static async update(id, data) {
    await new Promise((resolve, reject) => {
      const sql = "UPDATE students SET ? WHERE id = ?";
      db.query(sql, [data, id], (err, results) => {
        resolve(results);
      });
    });
    
  // mencari data yang baru di update
  const student = await this
  .find(id);
  return student;
  }

  /**
   * TODO 3: Buat fungsi untuk delete data.
   * Method menerima parameter id.
   * Method mengembalikan data student yang dihapus.
   */
  static async delete(id) {
    const student = await this.find(id);
    return new Promise((resolve, reject) => {
      const sql = "DELETE FROM students WHERE id = ?";
      db.query(sql, id, (err, results) => {
        resolve(student);
      });
    });
  }

  
}



// export class Student
module.exports = Student;
